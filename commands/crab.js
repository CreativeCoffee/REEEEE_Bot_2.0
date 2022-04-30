const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('crab')
    .setDescription("His goals are beyond your understanding"),
    async execute(interaction) {
        await interaction.reply("https://cdn.discordapp.com/attachments/382960871468564480/615324920116674581/fftad9ltrni31.png");
    },
};