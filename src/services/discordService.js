const { Client, GatewayIntentBits } = require('discord.js');
const { DISCORD_BOT_TOKEN, DISCORD_USER_ID } = require('../config/discordConfig');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences] });

let activityStatus = "Offline";

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
    if (newPresence && newPresence.userId === DISCORD_USER_ID) {
        activityStatus = newPresence.status.charAt(0).toUpperCase() + newPresence.status.slice(1);

        const activity = newPresence.activities[0];
        if (activity) {
            activityStatus += ` - ${activity.type}: ${activity.name}`;
        }
    }
});

client.login(DISCORD_BOT_TOKEN);

exports.getActivityStatus = async () => {
    return activityStatus;
};
