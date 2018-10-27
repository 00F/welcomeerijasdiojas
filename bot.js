const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log('Logged! ${client.user.tag}!');
  console.log('')
  console.log(' servers! [ " ${client.guilds.size} " ]');
  console.log('')
  console.log('Users! [ " ${client.users.size} " ]');
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});
client.on('ready', () => {

});

   const lol =
[
'Welcome To NoThing.',
'Welcome To nothing',
'Welcome To Nothing.',
'Welcome To **Nothing**',
'Welcome To NoThing',
'Welcome To Nothing',
'Welcome To NoThing',
'Welcome To NoThing-',
'Welcome To `Nothing`',
'Welcome To NOTHING',
'Welcome To Nothing',
'Welcome To NoThing',
'Welcome To `Nothing`',
'Welcome To **NoThing**'
]
client.on('guildMemberAdd', member => {
const NOTHING = member.guild.channels.get("481277680109486110");//ايدي الشات
if(!NOTHING) return;
if(NOTHING) {
NOTHING.send(  ${lol[Math.floor(Math.random() * lol.length)]});
}
});


 client.login(process.env.BOT_TOKEN);
