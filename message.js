module.exports = client => {
  client.on("message", async message => {

    // Do nothing if the message was sent by a bot - including this bot (;
    if (message.author.bot) return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    console.log(args)
    console.log(command)
  }
}
