const {SlashCommandBuilder} = require('@discordjs/builders');
const {MessageEmbed} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('roll_stats')
    .setDescription("Roll a D&D stat array"),
    async execute(interaction) {
        // Roll 6x4d6 add them together and take away the lowest output the total.
        let number_of_stats = 1;
        let totals = [];
        while(number_of_stats <= 6) {
        let numbers = [];
        let generated_numbers = 1;
        while(generated_numbers <= 4) {
            let number = Math.floor(Math.random() * 6 + 1);
            numbers.push(number)
            generated_numbers++
        }
        //console.log(numbers) // full array
        const numbers_adjusted = numbers.sort().filter((_,n) => n)
        const total = numbers_adjusted.reduce((partialSum, a) => partialSum + a, 0);
        totals.push(total)
        number_of_stats++
    }
        console.log(totals)
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle("D&D Stat Roller")
            .setDescription("Provides 6 stat array values")
            .addField("Strength", `${totals[0].toString()}`, true)
            .addField("Dexterity", `${totals[1].toString()}`, true)
            .addField("Constitution", `${totals[2].toString()}`, true)
            .addField("Intelligence", `${totals[3].toString()}`, true)
            .addField("Wisdom", `${totals[4].toString()}`, true)
            .addField("Charisma", `${totals[5].toString()}`, true)
        await interaction.reply({ embeds: [ embed ] })
            
    },
};