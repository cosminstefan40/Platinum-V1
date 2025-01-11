const { smd } = require("../lib");
const {
  enableGreetings,
  setMessage,
  deleteMessage,
  getMessage,
  greetingsPreview,
  clearGreetings
} = require('../lib/');

smd({
  pattern: "welcome ?(.*)",
  desc: "Welcome new members.",
  category: "group",
  filename: __filename
}, async (message, match) => {
  try {
    // Retrieve the saved welcome message for the group
    const welcome = await getMessage(message.jid, 'welcome', message.id);

    // If no argument and no welcome message exists, show an example
    if (!match && !welcome) {
      return await message.reply('*Example: welcome Hi &mention*');
    }

    // Handle toggling the welcome feature on/off
    if (match === 'on' || match === 'off') {
      if (!welcome) {
        return await message.reply('*Example: welcome Hi &mention*');
      }
      await enableGreetings(message.jid, 'welcome', match, message.id);
      return await message.reply(`_Welcome ${match === 'on' ? 'Enabled' : 'Disabled'}_`);
    }

    // Handle deleting the welcome message
    if (match === 'delete') {
      await deleteMessage(message.jid, 'welcome', message.id);
      clearGreetings(message.jid, 'welcome', message.id);
      return await message.reply('_Welcome deleted_');
    }

    // Save the new welcome message
    await setMessage(message.jid, 'welcome', match, true, message.id);

    // Generate and preview the saved message
    const { msg, options, type } = await greetingsPreview(message, 'welcome', message.id);
    await message.bot.sendMessage(message.chat, msg, options, { quoted: message });
    return await message.reply('_Welcome set_');
  } catch (error) {
    await message.error(error + "\n\ncommand: welcome", error, false);
  }
});

smd({
  pattern: "goodbye ?(.*)",
  desc: "Goodbye members.",
  category: "group",
  filename: __filename
}, async (message, match) => {
  try {
    // Retrieve the saved goodbye message for the group
    const goodbye = await getMessage(message.jid, 'goodbye', message.id);

    // If no argument and no goodbye message exists, show an example
    if (!match && !goodbye) {
      return await message.reply('*Example: goodbye Bye &mention*');
    }

    // Handle toggling the goodbye feature on/off
    if (match === 'on' || match === 'off') {
      if (!goodbye) {
        return await message.reply('*Example: goodbye Bye &mention*');
      }
      await enableGreetings(message.jid, 'goodbye', match, message.id);
      return await message.reply(`_Goodbye ${match === 'on' ? 'Enabled' : 'Disabled'}_`);
    }

    // Handle deleting the goodbye message
    if (match === 'delete') {
      await deleteMessage(message.jid, 'goodbye', message.id);
      clearGreetings(message.jid, 'goodbye', message.id);
      return await message.reply('_Goodbye deleted_');
    }

    // Save the new goodbye message
    await setMessage(message.jid, 'goodbye', match, true, message.id);

    // Generate and preview the saved message
    const { msg, options, type } = await greetingsPreview(message, 'goodbye', message.id);
    await message.bot.sendMessage(message.chat, msg, options, { quoted: message });
    return await message.reply('_Goodbye set_');
  } catch (error) {
    await message.error(error + "\n\ncommand: goodbye", error, false);
  }
});
