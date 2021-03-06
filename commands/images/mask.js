const Command = require("../../structures/Command.js");
const { MessageAttachment } = require("discord.js");

class Beautiful extends Command {
  constructor(...args) {
    super(...args, {
      description: "Get protected against COVID-19",
      cooldown: 3,
      cost: 5,
      usage: "mask [@user]"
    });
  }

  async run(ctx, [user]) {
    user = await this.verifyUser(ctx, user, true);

    const img = await this.client.img.mask(user.displayAvatarURL({ size: 512, format: "png" }));

    return ctx.reply(new MessageAttachment(img, "mask.png"));
  }
}

module.exports = Beautiful;
