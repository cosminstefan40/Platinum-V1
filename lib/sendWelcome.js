const { bot_ } = require("./config"); // Import any necessary configuration or bot helpers

/**
 * Sends a welcome message to the group.
 * @param {Object} message - The message object, containing chat information.
 * @param {string} welcomeText - The custom welcome message to send.
 */
async function sendWelcome(message, welcomeText) {
  try {
    // Ensure the message is from a group chat
    if (!message.isGroup) {
      return message.reply("This command can only be used in group chats.");
    }

    // Check if the bot is an admin or has necessary permissions
    if (!message.isAdmin && !message.isCreator) {
      return message.reply("You need to be an admin or creator to set the welcome message.");
    }

    // Format the welcome message (optional - you can customize this)
    let formattedMessage = `
Welcome to the group, @${message.pushName}!

${welcomeText}

We hope you have a great time here! 😊
`;

    // Send the welcome message to the group
    await bot_.sendMessage(message.chat, {
      text: formattedMessage,
      mentions: [message.pushName], // Mentions the user that was added
    });

  } catch (error) {
    // Log any errors that occur
    console.error("Error in sendWelcome:", error);
    return message.reply("An error occurred while sending the welcome message.");
  }
}

module.exports = { sendWelcome };
