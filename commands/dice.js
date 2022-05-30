const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dice')
    .setDescription("Rolls a dice.")
    .addStringOption(option => option
        .setName('dice')
        .setDescription('Type of dice')
        .setRequired(true)
        .addChoices({
            name: "d4",
            value: "d4"
        })
        .addChoices({
            name: "d6",
            value: "d6"
        })
        .addChoices({
            name: "d8",
            value: "d8"
        })
        .addChoices({
            name: "d10",
            value: "d10"
        })
        .addChoices({
            name: "d12",
            value: "d12"
        })
        .addChoices({
            name: "d20",
            value: "d20"
        })
        .addChoices({
            name: "d100",
            value: "d100"
        })
        ),
    async execute(interaction) {
        function getRandomInteger(int) {
            const number = Math.floor(Math.random() * int + 1); 
            return number.toString();
        }
       switch(interaction.options.getString("dice")) {
           case "d4":
               await interaction.reply("Rolling a 4 sided dice");
               await interaction.followUp(`Rolled ${getRandomInteger(4)}`);
               break
            case "d6":
                await interaction.reply("Rolling a 6 sided dice");
                await interaction.followUp(`Rolled ${getRandomInteger(6)}`);
                break
            case "d8":
                await interaction.reply("Rolling a 8 sided dice");
                await interaction.followUp(`Rolled ${getRandomInteger(8)}`);
                break
            case "d10":
                await interaction.reply("Rolling a 10 sided dice");
                await interaction.followUp(`Rolled ${getRandomInteger(10)}`);
                break
            case "d12":
                await interaction.reply("Rolling a 12 sided dice");
                await interaction.followUp(`Rolled ${getRandomInteger(12)}`);;
                break
            case "d20":
                await interaction.reply("Rolling a 20 sided dice");
                await interaction.followUp(`Rolled ${getRandomInteger(20)}`);;
                break
            case "d100":
                await interaction.reply("Rolling a 100 sided dice");
                await interaction.followUp(`Rolled ${getRandomInteger(100)}`);;
                break
       }
    }
};