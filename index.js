function Jsl_0x2b34(_0x2a8961,_0x4cd0f2){const _0x38b124=Jsl_0x38b1();return Jsl_0x2b34=function(_0x2b3497,_0x38d10b){_0x2b3497=_0x2b3497-0x9e;let _0x1170ac=_0x38b124[_0x2b3497];return _0x1170ac;},Jsl_0x2b34(_0x2a8961,_0x4cd0f2);}function Jsl_0x38b1(){const _0x2f3a2c=['body','961240hSRSKx','Session\x20Restored..✅!','./config','connecting','Desktop','messages','got','notify','readdirSync','text','pino','silent','183058GzMsBg','sendMessage','Installing\x20Plugins.✅..','type','user','close','./lib/utils','\x0a\x0a\x0a\x0a\x0a','test','42FhfJfC','function','imageMessage','27geAMCB','statusCode','map','payload','existsSync','error','.js','parse','./lib/serialize','4211670sihKdu','7653366YQVLtr','dataValues','url','log','2373049bCHAMV','./session.json','./plugins/','output','90YabhqC','pattern','toLowerCase','✅\x20Plugins\x20Installed!','217412JohbDM','name','photo','image','774173WfUCcS','./lib/Base','path','open','group-participants.update','@adiwajshing/baileys'];Jsl_0x38b1=function(){return _0x2f3a2c;};return Jsl_0x38b1();}const Jsl_0x2da23c=Jsl_0x2b34;(function(_0x306e02,_0x89d351){const _0x568213=Jsl_0x2b34,_0x1d3b03=_0x306e02();while(!![]){try{const _0x12da09=parseInt(_0x568213(0xcf))/0x1+-parseInt(_0x568213(0xa9))/0x2*(parseInt(_0x568213(0xb2))/0x3)+parseInt(_0x568213(0xcb))/0x4*(parseInt(_0x568213(0xc7))/0x5)+parseInt(_0x568213(0xbf))/0x6+parseInt(_0x568213(0xc3))/0x7+-parseInt(_0x568213(0xd6))/0x8+parseInt(_0x568213(0xb5))/0x9*(-parseInt(_0x568213(0xbe))/0xa);if(_0x12da09===_0x89d351)break;else _0x1d3b03['push'](_0x1d3b03['shift']());}catch(_0x2686f8){_0x1d3b03['push'](_0x1d3b03['shift']());}}}(Jsl_0x38b1,0xab651));const {default:makeWASocket,useSingleFileAuthState,Browsers}=require(Jsl_0x2da23c(0xd4)),fs=require('fs'),{serialize}=require(Jsl_0x2da23c(0xbd)),{Message,Image,Video}=require(Jsl_0x2da23c(0xd0)),pino=require(Jsl_0x2da23c(0xa7)),path=require(Jsl_0x2da23c(0xd1)),events=require(Jsl_0x2da23c(0xaf)),got=require(Jsl_0x2da23c(0xa3)),config=require(Jsl_0x2da23c(0x9f)),{PluginDB}=require('./lib/sql/plugins'),Greetings=require('./lib/Greetings');async function bot(){const _0x51db6d=Jsl_0x2da23c;await config['DATABASE']['sync']();const {state:_0x1d66db,saveState:_0x1798d5}=useSingleFileAuthState(_0x51db6d(0xc4),pino({'level':_0x51db6d(0xa8)}));let _0x39f278=makeWASocket({'logger':pino({'level':_0x51db6d(0xa8)}),'auth':_0x1d66db,'printQRInTerminal':!![],'browser':Browsers['macOS'](_0x51db6d(0xa1)),'downloadHistory':![],'syncFullHistory':![]});_0x39f278['ev']['on']('connection.update',async _0x42c572=>{const _0x2f3855=_0x51db6d,{connection:_0x2673ce,lastDisconnect:_0x45ef76}=_0x42c572;_0x2673ce===_0x2f3855(0xa0)&&console[_0x2f3855(0xc2)]('Abu\x20MD\x20V\x202.0.1');_0x2673ce===_0x2f3855(0xae)&&_0x45ef76&&_0x45ef76[_0x2f3855(0xba)]&&_0x45ef76[_0x2f3855(0xba)][_0x2f3855(0xc6)][_0x2f3855(0xb6)]!=0x191&&(console['log'](_0x45ef76['error']['output'][_0x2f3855(0xb8)]),bot());if(_0x2673ce===_0x2f3855(0xd2)){console[_0x2f3855(0xc2)](_0x2f3855(0x9e)),console['log'](_0x2f3855(0xab));let _0x50da31=await PluginDB['findAll']();_0x50da31[_0x2f3855(0xb7)](async _0x4b50a0=>{const _0x45607d=_0x2f3855;if(!fs[_0x45607d(0xb9)](_0x45607d(0xc5)+_0x4b50a0[_0x45607d(0xc0)][_0x45607d(0xcc)]+_0x45607d(0xbb))){console[_0x45607d(0xc2)](_0x4b50a0[_0x45607d(0xc0)]['name']);var _0x4fb3e7=await got(_0x4b50a0[_0x45607d(0xc0)][_0x45607d(0xc1)]);_0x4fb3e7['statusCode']==0xc8&&(fs['writeFileSync'](_0x45607d(0xc5)+_0x4b50a0[_0x45607d(0xc0)][_0x45607d(0xcc)]+_0x45607d(0xbb),_0x4fb3e7['body']),require(_0x45607d(0xc5)+_0x4b50a0[_0x45607d(0xc0)]['name']+_0x45607d(0xbb)));}}),fs[_0x2f3855(0xa5)]('./plugins')['forEach'](_0x7ace34=>{const _0x422731=_0x2f3855;path['extname'](_0x7ace34)[_0x422731(0xc9)]()==_0x422731(0xbb)&&require(_0x422731(0xc5)+_0x7ace34);}),console[_0x2f3855(0xc2)](_0x2f3855(0xca));try{_0x39f278['ev']['on']('creds.update',_0x1798d5),_0x39f278['ev']['on'](_0x2f3855(0xd3),async _0x350f12=>{Greetings(_0x350f12,_0x39f278);}),_0x39f278['ev']['on']('messages.upsert',async _0x201a1f=>{const _0x11fea9=_0x2f3855;if(_0x201a1f[_0x11fea9(0xac)]!==_0x11fea9(0xa4))return;let _0x5dcb08=_0x201a1f[_0x11fea9(0xa2)][0x0],_0x5511cd=await serialize(JSON[_0x11fea9(0xbc)](JSON['stringify'](_0x5dcb08)),_0x39f278);if(!_0x5511cd['message'])return;let _0xe23479=_0x5511cd[_0x11fea9(0xd5)];if(_0xe23479)console[_0x11fea9(0xc2)](_0xe23479);events['commands'][_0x11fea9(0xb7)](async _0x2dbea4=>{const _0x126401=_0x11fea9;_0x5511cd[_0x126401(0xac)]==='videoMessage'&&_0x2dbea4['on']==='video'&&(whats=new Video(_0x39f278,_0x5511cd,_0x5dcb08),console['log'](whats));if(_0x2dbea4[_0x126401(0xc8)]&&_0x2dbea4[_0x126401(0xc8)][_0x126401(0xb1)](_0xe23479)){var _0x3f657d=_0xe23479['match'](_0x2dbea4[_0x126401(0xc8)])[0x1]||![];whats=new Message(_0x39f278,_0x5511cd,_0x5dcb08),_0x2dbea4[_0x126401(0xb3)](whats,_0x3f657d,_0x5511cd,_0x39f278);}else{if(_0x2dbea4['on']===_0x126401(0xa6))whats=new Message(_0x39f278,_0x5511cd,_0x5dcb08),_0x2dbea4['function'](whats,_0xe23479,_0x5511cd,_0x39f278);else(_0x2dbea4['on']===_0x126401(0xce)||_0x2dbea4['on']===_0x126401(0xcd))&&_0x5511cd[_0x126401(0xac)]===_0x126401(0xb4)&&(whats=new Image(_0x39f278,_0x5511cd,_0x5dcb08),_0x2dbea4[_0x126401(0xb3)](whats,_0xe23479,_0x5511cd,_0x39f278));}});});}catch(_0x48103f){console[_0x2f3855(0xc2)](_0x48103f+_0x2f3855(0xb0)+JSON['stringify'](msg));}}}),process['on']('uncaughtException',_0x310dd2=>{const _0x35e9d8=_0x51db6d;let _0xcd827=_0x310dd2['message'];_0x39f278[_0x35e9d8(0xaa)](_0x39f278[_0x35e9d8(0xad)]['id'],{'text':_0xcd827}),console[_0x35e9d8(0xc2)](_0x310dd2);});}bot();
