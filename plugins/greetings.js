const { bot } = require('../lib/handler.js');
const Greetings = require('../lib/sql/greetings.js');
const { isEnabled, setWelcomeMessage, setGoodByeMessage, getWelcomeMessage, getGoodByeMessage } = Greetings;

bot(
   {
      pattern: 'intro',
      isPublic: true,
      desc: 'Setup Intro Messages for new Group Members',
      type: 'group',
   },
   async (message, match, m) => {
      if (!message.isGroup) return message.sendReply('_for groups only!_');
      const groupJid = m.from;
      const args = match.trim().split(' ');

      if (args[0] === 'on' || args[0] === 'off') {
         const status = args[0] === 'on';
         await Greetings.upsert({ groupJid, enabled: status });
         return message.sendReply(`_Welcome messages are now ${status ? 'enabled' : 'disabled'}._`);
      }

      if (args[0] === 'set') {
         const welcomeMessage = args.slice(1).join(' ');
         if (!welcomeMessage) {
            return message.sendReply('_Please provide a welcome message._');
         }

         await setWelcomeMessage(groupJid, welcomeMessage);
         return message.sendReply(`_Welcome message updated successfully!_\n\n_New Message:_ ${welcomeMessage}`);
      }

      if (args[0] === 'get') {
         const currentMessage = await getWelcomeMessage(groupJid);
         const status = await isEnabled(groupJid);
         return message.sendReply(currentMessage ? `_Current Welcome Message:_\n${currentMessage}\n\n_Status:_ ${status ? 'Enabled' : 'Disabled'}` : '_No Welcome Message has been set yet._');
      }

      return message.sendReply('_Invalid command. Usage: .welcome [on/off] | .welcome set [message] | .welcome get_');
   }
);

bot(
   {
      pattern: 'farewell',
      isPublic: true,
      desc: 'Setup Farewell Messages for left Group Members',
      type: 'group',
   },
   async (message, match, m) => {
      if (!message.isGroup) return message.sendReply('_for groups only!_');
      const groupJid = m.from;
      const args = match.trim().split(' ');

      if (args[0] === 'on' || args[0] === 'off') {
         const status = args[0] === 'on';
         await Greetings.upsert({ groupJid, enabled: status });
         return message.sendReply(`_Goodbye messages are now ${status ? 'enabled' : 'disabled'}._`);
      }

      if (args[0] === 'set') {
         const goodbyeMessage = args.slice(1).join(' ');
         if (!goodbyeMessage) {
            return message.sendReply('_Please provide a goodbye message._');
         }

         await setGoodByeMessage(groupJid, goodbyeMessage);
         return message.sendReply(`_Goodbye message updated successfully!_\n\n_New Message:_ ${goodbyeMessage}`);
      }

      if (args[0] === 'get') {
         const currentMessage = await getGoodByeMessage(groupJid);
         const status = await isEnabled(groupJid);
         return message.sendReply(currentMessage ? `_Current Goodbye Message:_\n${currentMessage}\n\n_Status:_ ${status ? 'Enabled' : 'Disabled'}` : '_No Goodbye Message has been set yet._');
      }

      return message.sendReply('_Invalid command. Usage: .goodbye [on/off] | .goodbye set [message] | .goodbye get_');
   }
);
