const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription("Replies to a question")
    .addStringOption(option => option
        .setName('question')
        .setDescription('The question you want to ask')
        .setRequired(true)
        ),
    async execute(interaction) {
        Array.prototype.random = function() {
            return this[Math.floor(Math.random()*this.length)];
        }
        const answers = [
            'It is certain.', 
            'It is decidedly so.', 
            'Without a doubt.', 
            'Yes, definitely.', 
            'You may rely on it.', 
            'As I see it, yes.', 
            'Most likely.', 
            'Outlook good.', 
            'Yes.',
            'Signs point to yes.', 
            'Reply hazy, try again.', 
            'Ask again later.', 
            'Better not tell you now.', 
            'Cannot predict now.', 
            'Concentrate and ask again.', 
            "Don't count on it.",             
            'My reply is no.', 
            'My sources say no.', 
            'Outlook not so good.', 
            'Very doubtful.' 
        ];
        //console.log(answers.random())
        await interaction.reply(answers.random())

    },
};