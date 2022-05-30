const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription("Outputs the commands."),
    async execute(interaction) {
        const help = new MessageEmbed()
            .setColor("#50C878")
            .setTitle("Help")
            .setDescription("Available Commands")
            .addFields(
                { name: 'Test Commands', value: 'ping' },
                { name: 'Games', value: 'dice | roll_stats | 8ball' },
                { name: 'Moderation', value: 'purge' },
                { name: 'Misc', value: 'crab' },
            )
        await interaction.reply({embeds: [help]});
    },
};