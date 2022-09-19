const config = require("../config");
const { Jsl } = require("../lib/");
Jsl(
  {
    pattern: "sticker ?(.*)",
    fromMe: true,
    desc: "_Converts Photo or video to sticker_",
    type: "converter",
  },
  async (message, match,m) => {
    if(!(message.reply_message.video||message.reply_message.image)) return await message.reply('_Reply to photo or video_')
    let buff = await m.quoted.download()
    message.sendMessage(buff,{ packname: config.PACKNAME, author: config.AUTHOR },'sticker')
  }
);
