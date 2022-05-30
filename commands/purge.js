const {SlashCommandBuilder} = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription("purges X number of messages")
    .addIntegerOption( option => option
        .setName('number')
        .setDescription("a whole number")
        .setRequired(true)
    ),
    async execute(interaction) {
        const numberOfMessages = interaction.options.getInteger("number")
        if(!interaction.member.permissions.has("MANAGE_MESSAGES")) {
            await interaction.reply("You do not have permission to run that command!!")
        }else if(parseInt(numberOfMessages) > 99) {
            await interaction.reply("Woah there I can't delete that many messages")
        }else {
            const messages = await interaction.channel.messages.fetch({limit: numberOfMessages})
            const {size} = messages
            messages.forEach(message => {
                message.delete()
        });
        await interaction.reply({content: `Deleting ${size} messages`, ephemeral: true})
        }
        
    },
};