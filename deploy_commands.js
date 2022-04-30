const { REST } = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const {SlashCommandBuilder} = require('@discordjs/builders');
const fs = require('node:fs')
require('dotenv').config();

function deploy() {
    const commands = [];
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for(file of commandFiles) {
        const command  = require(`./commands/${file}`);
        commands.push(command.data.toJSON())
    }
    
    const rest = new REST({version: '9'}).setToken(process.env.TOKEN);
    
    (async () => {
        try {
            console.log("Refreshing / Commmands");
            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
                {body: commands},
            );
            console.log("Successfully Reloaded / Commands"); 
        }catch(err) {
            console.error(err);
        }
    })();
}

module.exports = {deploy}; // export deploy function
