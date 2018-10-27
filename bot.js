const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const prefix = '-'
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(Logged in as ${client.user.tag}!);
  console.log('')
  console.log(servers! [ " ${client.guilds.size} " ]);
  console.log('')
  console.log(Users! [ " ${client.users.size} " ]);
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
const F5R = member.guild.channels.get("481277680109486110");//ايدي الشات
if(!F5R) return;
if(F5R) {
F5R.send(  ${lol[Math.floor(Math.random() * lol.length)]});
}
});


 client.login(process.env.BOT_TOKEN);
