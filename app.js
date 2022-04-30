const { Client, Intents, Collection } = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS]});
require('dotenv').config();
const fs = require('node:fs');

require('./deploy_commands').deploy(); // Refresh Slash Commands

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.data.name, command)
}

client.on('ready', () => {
    console.log(`${client.user.tag} Ready!`);
})

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName)

    if(!command) return;

    try {
        await command.execute(interaction)
    }catch(err) {
        console.error(err)
        await interaction.reply({content: "There was an error please try again", ephemeral: true})
    }
})

client.login(process.env.TOKEN);