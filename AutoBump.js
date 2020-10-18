const Discord = new require("discord.js");
const bot = new Discord.Client();
const config = new require("./config.json");
const TOKEN = config.token;

bot.login(NzY3NDE2NTEwNzIwNjM5MDM2.X4xmUg.5ON95kAMNmh8xS_CAtKWgsaUq88);

bot.on("message", function(message)
{

    if (message.content == 'ab!start'){

      message.channel.send("**Auto-bumping started! Next message in 20 minutes from now!**")  

      var interval = setInterval (function ()
            {
              message.channel.send("!d bump")
            }, 1200000);

      }

});
