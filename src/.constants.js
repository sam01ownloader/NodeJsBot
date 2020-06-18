module.exports = Object.freeze({
  TOKEN: '1097240482:AAHapjhwTfWOMxFmwiasakzQJ-oUzsKkpyM',
  ARIA_SECRET: 'sam03',
  ARIA_DOWNLOAD_LOCATION: 'app/downloads',
  INDEX_DOMAIN:'https://goindex_samteam.sam-makkrkill.workers.dev/0:/',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT:8210,
  GDRIVE_PARENT_DIR_ID: '0AD1w2Ox2EQzJUk9PVA',
  SUDO_USERS: [912865533],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001455423976],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 1200,
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
     COMMANDS_USE_BOT_NAME: {
      ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command.
      NAME: "@Trollmusicbot" //Enter your Bot Username here if above is set to true.
    }
  
});
