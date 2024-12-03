const mongoose = require('mongoose');
const config = require('../../config.js');

const GreetingsSchema = new mongoose.Schema({
   groupJid: {
      type: String,
      unique: true,
      required: true,
   },
   enabled: {
      type: Boolean,
      default: false,
   },
   welcomeMessage: {
      type: String,
      default: null,
   },
   goodbyeMessage: {
      type: String,
      default: null,
   },
}, { collection: 'greetings', timestamps: false });

const Greetings = mongoose.model('Greetings', GreetingsSchema);

/**
 * Check if greetings are enabled for a specific group.
 * @param {string} groupJid - The group JID.
 * @returns {Promise<boolean>} - True if enabled, false otherwise.
 */
const isEnabled = async (groupJid) => {
   const group = await Greetings.findOne({ groupJid });
   return group ? group.enabled : false;
};

/**
 * Get the welcome message for a specific group.
 * @param {string} groupJid - The group JID.
 * @returns {Promise<string|null>} - The welcome message or null if not set.
 */
const getWelcomeMessage = async (groupJid) => {
   const group = await Greetings.findOne({ groupJid });
   return group ? group.welcomeMessage : null;
};

/**
 * Get the goodbye message for a specific group.
 * @param {string} groupJid - The group JID.
 * @returns {Promise<string|null>} - The goodbye message or null if not set.
 */
const getGoodByeMessage = async (groupJid) => {
   const group = await Greetings.findOne({ groupJid });
   return group ? group.goodbyeMessage : null;
};

/**
 * Set or update the welcome message for a specific group.
 * @param {string} groupJid - The group JID.
 * @param {string} message - The new welcome message.
 * @returns {Promise<void>}
 */
const setWelcomeMessage = async (groupJid, message) => {
   await Greetings.findOneAndUpdate(
      { groupJid },
      { welcomeMessage: message },
      { upsert: true, new: true }
   );
};

/**
 * Set or update the goodbye message for a specific group.
 * @param {string} groupJid - The group JID.
 * @param {string} message - The new goodbye message.
 * @returns {Promise<void>}
 */
const setGoodByeMessage = async (groupJid, message) => {
   await Greetings.findOneAndUpdate(
      { groupJid },
      { goodbyeMessage: message },
      { upsert: true, new: true }
   );
};

module.exports = {
   Greetings,
   isEnabled,
   getWelcomeMessage,
   getGoodByeMessage,
   setWelcomeMessage,
   setGoodByeMessage,
};
