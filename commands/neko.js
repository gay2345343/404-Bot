const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
    superagent.get('https://nekos.life/api/v2/img/neko')
        .end((err, response) => {
      const nekombed = new Discord.RichEmbed()
      .setDescription("Nya~!")
      .setImage(response.body.url)
      .setColor("#3a0be7")
  message.channel.send(nekoembed);
    })
}

    module.exports.help = {
      name: "neko"
}