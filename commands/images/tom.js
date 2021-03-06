const Command = require("../../structures/Command.js");
const { MessageAttachment } = require("discord.js");

class Tom extends Command {
  constructor(...args) {
    super(...args, {
      cooldown: 3,
      cost: 5,
      usage: "tom [@user]"
    });
  }

  async run(ctx, [user]) {
    user = await this.verifyUser(ctx, user, true);

    const img = await this.client.img.tom(user.displayAvatarURL({ size: 256, format: "png" }));

    return ctx.reply(new MessageAttachment(img, "tom.png"));
  }
}

module.exports = Tom;
