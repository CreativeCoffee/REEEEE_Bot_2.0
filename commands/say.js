const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('say')
    .setDescription("Replies to test bot")
    .addStringOption(option => option
        .setName('phrase')
        .setDescription('The phrase you want to say')
        .setRequired(true)
        ),
    async execute(interaction) {
        await interaction.reply(interaction.options.getString('phrase'));
    },
};