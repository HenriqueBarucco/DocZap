const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const client = new Client();

client.initialize();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

//Replying Messages
client.on("message", (message) => {
  if (message.body === "oi") {
    message.reply("Oi");
  }
});