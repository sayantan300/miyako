const Command = require("../../structures/Command.js");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

class SmallBoobs extends Command {
  constructor(...args) {
    super(...args, {
      description: "Hentai Small boobs",
      cooldown: 5,
      cost: 15,
      nsfw: true,
      aliases: ["sboobs"]
    });
  }

  async run(ctx) {
    const { url } = await fetch("https://nekos.life/api/v2/img/smallboobs")
      .then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle("Hentai Small Boobs")
      .setColor(0x9590EE)
      .setImage(url)
      .setFooter(`Requested by: ${ctx.author.tag} | Powered by nekos.life`, ctx.author.displayAvatarURL({ size: 32 }));

    return ctx.reply({ embed });
  }
}

module.exports = SmallBoobs;
