const _0x4aca41=_0x1766;(function(_0x41a77a,_0x3a6da3){const _0x3ae40c=_0x1766,_0x2ec7ee=_0x41a77a();while(!![]){try{const _0x477dcd=parseInt(_0x3ae40c(0x185))/0x1*(parseInt(_0x3ae40c(0x186))/0x2)+-parseInt(_0x3ae40c(0x14e))/0x3*(-parseInt(_0x3ae40c(0x172))/0x4)+-parseInt(_0x3ae40c(0x15c))/0x5+parseInt(_0x3ae40c(0x1a6))/0x6*(parseInt(_0x3ae40c(0x16e))/0x7)+-parseInt(_0x3ae40c(0x1bc))/0x8+-parseInt(_0x3ae40c(0x1c1))/0x9+parseInt(_0x3ae40c(0x1a9))/0xa*(-parseInt(_0x3ae40c(0x173))/0xb);if(_0x477dcd===_0x3a6da3)break;else _0x2ec7ee['push'](_0x2ec7ee['shift']());}catch(_0x5526cc){_0x2ec7ee['push'](_0x2ec7ee['shift']());}}}(_0x5aa5,0x9ac7e));let Config=require('./config');const {default:makeWASocket,DisconnectReason,useSingleFileAuthState,fetchLatestBaileysVersion,jidNormalizedUser,makeInMemoryStore,DEFAULT_CONNECTION_CONFIG,DEFAULT_LEGACY_CONNECTION_CONFIG}=require('@adiwajshing/baileys'),fs=require('fs');global['user']=require(_0x4aca41(0x16a)),global['group']=require(_0x4aca41(0x15d)),global['_user']=JSON['parse'](fs[_0x4aca41(0x177)](_0x4aca41(0x168))),global['_group']=JSON[_0x4aca41(0x182)](fs['readFileSync'](_0x4aca41(0x16b))),global[_0x4aca41(0x1c0)]=[_0x4aca41(0x191)],global['mess']=(_0x425d20,_0x30d0ba)=>{const _0x116d99=_0x4aca41;let _0x15a4c0={'wait':_0x116d99(0x1c5),'owner':_0x116d99(0x1ba),'premium':_0x116d99(0x1c7),'group':'Perintah\x20ini\x20hanya\x20dapat\x20digunakan\x20di\x20group!','private':_0x116d99(0x17d),'admin':_0x116d99(0x192),'botAdmin':_0x116d99(0x17c),'bot':'Fitur\x20ini\x20hanya\x20dapat\x20diakses\x20oleh\x20Bot','dead':_0x116d99(0x16f),'media':'Reply\x20media','error':_0x116d99(0x162)}[_0x425d20];if(_0x15a4c0)return _0x30d0ba[_0x116d99(0x199)](_0x15a4c0,_0x30d0ba[_0x116d99(0x1a8)],{'quoted':_0x30d0ba});};const pino=require(_0x4aca41(0x1ac)),path=require(_0x4aca41(0x17a)),{Boom}=require(_0x4aca41(0x1d0)),{Simple,upsert,JslFunc}=require(_0x4aca41(0x18e)),Welcome=require(_0x4aca41(0x1af)),jsoConfig=JSON[_0x4aca41(0x182)](fs[_0x4aca41(0x177)](_0x4aca41(0x1bb))),events=require(_0x4aca41(0x15f)),{chatting}=JslFunc,{serialize,WAConnection}=Simple;function _0x1766(_0x517ab9,_0x15d53f){const _0x5aa517=_0x5aa5();return _0x1766=function(_0x1766e6,_0x4771ba){_0x1766e6=_0x1766e6-0x14e;let _0x2b4a07=_0x5aa517[_0x1766e6];return _0x2b4a07;},_0x1766(_0x517ab9,_0x15d53f);}global['mydb']={},global[_0x4aca41(0x176)][_0x4aca41(0x1d2)]=new Array(),global[_0x4aca41(0x176)][_0x4aca41(0x17e)]=new Number(),global[_0x4aca41(0x165)]=![],global[_0x4aca41(0x161)]=![];const {state,saveState}=useSingleFileAuthState(_0x4aca41(0x16c),pino({'level':_0x4aca41(0x1b1)})),store=makeInMemoryStore({'logger':pino()[_0x4aca41(0x1d1)]({'level':_0x4aca41(0x1b1),'stream':_0x4aca41(0x164)})});store[_0x4aca41(0x160)](_0x4aca41(0x167)),setInterval(()=>{const _0x4b4a17=_0x4aca41;store[_0x4b4a17(0x153)]('./lib/Jsl/store_multi.json');},0x1e*0x3e8),fs[_0x4aca41(0x158)](_0x4aca41(0x19d))[_0x4aca41(0x19c)](_0x1f569b=>{const _0x4cd84c=_0x4aca41;path[_0x4cd84c(0x1b9)](_0x1f569b)[_0x4cd84c(0x18a)]()==_0x4cd84c(0x169)&&require('./plugins/'+_0x1f569b);}),global[_0x4aca41(0x190)]=(_0x1b202f,_0x2c5b75='/',_0xcde4ed={},_0x5a0e96)=>(_0x1b202f in jsoConfig[_0x4aca41(0x178)]?jsoConfig['APIs'][_0x1b202f]:_0x1b202f)+_0x2c5b75+(_0xcde4ed||_0x5a0e96?'?'+new URLSearchParams(Object['entries']({..._0xcde4ed,..._0x5a0e96?{[_0x5a0e96]:jsoConfig[_0x4aca41(0x178)][_0x4aca41(0x1b4)]}:{}})):'');const bot=async()=>{const _0x2986e2=_0x4aca41;let {version:_0x4e107e,isLatest:_0x24338c}=await fetchLatestBaileysVersion(),_0xba2150={'markOnlineOnConnect':!![],'linkPreviewImageThumbnailWidth':0x1f4,'printQRInTerminal':!![],'browser':['md',_0x2986e2(0x18d),_0x2986e2(0x1b2)],'logger':pino({'level':_0x2986e2(0x1b1)}),'auth':state,'version':_0x4e107e},_0xf59299=makeWASocket(_0xba2150);_0xf59299=new WAConnection(_0xf59299),store['bind'](_0xf59299['ev']),_0xf59299['ev']['on'](_0x2986e2(0x183),saveState),_0xf59299['ev']['on'](_0x2986e2(0x17f),async _0x49ac7f=>{const _0x1e95ec=_0x2986e2,{lastDisconnect:_0x448db8,connection:_0x27d3c9,isNewLogin:_0x56cbe0,isOnline:_0x10b52f,qr:_0xa00b3b,receivedPendingNotifications:_0x541b80}=_0x49ac7f;if(_0x27d3c9=='connecting')console[_0x1e95ec(0x1c2)](_0x1e95ec(0x193));else{if(_0x27d3c9=='open')console['log'](_0x1e95ec(0x1a4));else{if(_0x27d3c9==_0x1e95ec(0x159)){let _0x2a942c=new Boom(_0x448db8?.[_0x1e95ec(0x1a1)])?.[_0x1e95ec(0x188)][_0x1e95ec(0x1bf)];if(_0x2a942c===DisconnectReason[_0x1e95ec(0x1c3)])console[_0x1e95ec(0x1c2)](_0x1e95ec(0x1cf)),_0xf59299['logout']();else{if(_0x2a942c===DisconnectReason[_0x1e95ec(0x1b8)])console[_0x1e95ec(0x1c2)](_0x1e95ec(0x1ad)),bot();else{if(_0x2a942c===DisconnectReason['connectionLost'])console[_0x1e95ec(0x1c2)](_0x1e95ec(0x1bd)),bot();else{if(_0x2a942c===DisconnectReason[_0x1e95ec(0x196)])console['log'](_0x1e95ec(0x1ae)),_0xf59299[_0x1e95ec(0x180)]();else{if(_0x2a942c===DisconnectReason[_0x1e95ec(0x1c4)])console['log'](_0x1e95ec(0x1aa)),process[_0x1e95ec(0x184)](0x0);else{if(_0x2a942c===DisconnectReason['restartRequired'])console['log'](_0x1e95ec(0x154)),bot();else{if(_0x2a942c===DisconnectReason[_0x1e95ec(0x163)])console['log'](_0x1e95ec(0x1b0)),bot();else _0xf59299[_0x1e95ec(0x194)](_0x1e95ec(0x1c8)+_0x2a942c+'|'+_0x27d3c9);}}}}}}}else{if(_0x10b52f===!![])console[_0x1e95ec(0x1c2)](_0x1e95ec(0x1a0));else{if(_0x10b52f===![])console[_0x1e95ec(0x1c2)](_0x1e95ec(0x174));else{if(_0x541b80===!![])console[_0x1e95ec(0x1c2)](_0x1e95ec(0x150));else{if(_0x541b80===![])console[_0x1e95ec(0x1c2)]('\x20Not\x20Received\x20Pending\x20Notifications.');else{if(_0x56cbe0===!![])console[_0x1e95ec(0x1c2)](_0x1e95ec(0x15b));else{if(_0x56cbe0===![])console['log']('\x20Not\x20New\x20Login.');else{if(_0xa00b3b)console[_0x1e95ec(0x1c2)](_0x1e95ec(0x198));else console['log'](_0x1e95ec(0x1a2),_0x49ac7f);}}}}}}}}}}),_0xf59299['ev']['on'](_0x2986e2(0x19e),async _0xe23ecf=>{const _0x1802c9=_0x2986e2;if(events[_0x1802c9(0x155)][_0x1802c9(0x1b6)][_0x1802c9(0x1ab)][_0x1802c9(0x16d)](_0xe23ecf['id']))return;else Welcome(_0xf59299,_0xe23ecf);}),_0xf59299['ev']['on'](_0x2986e2(0x157),async _0x50be3f=>{const _0x361b9d=_0x2986e2;global[_0x361b9d(0x165)]=![];let _0x3479a8=new serialize(_0xf59299,_0x50be3f[_0x361b9d(0x1c6)][0x0]);if(events[_0x361b9d(0x155)][_0x361b9d(0x1b6)][_0x361b9d(0x1ab)][_0x361b9d(0x16d)](_0x3479a8['from'])||!_0x3479a8[_0x361b9d(0x17b)]||_0x3479a8['key']&&_0x3479a8[_0x361b9d(0x181)][_0x361b9d(0x1be)]==_0x361b9d(0x1b7)||_0x3479a8[_0x361b9d(0x181)]['id'][_0x361b9d(0x1ca)]('BAE5')&&_0x3479a8[_0x361b9d(0x181)]['id']['length']==0x10)return;if(global[_0x361b9d(0x176)][_0x361b9d(0x1d2)][_0x361b9d(0x1b3)](_0x3479a8[_0x361b9d(0x18c)])==-0x1)global[_0x361b9d(0x176)]['users'][_0x361b9d(0x19a)](_0x3479a8[_0x361b9d(0x18c)]);await upsert(_0xf59299,_0x3479a8),await chatting(_0x3479a8,_0xf59299);try{events[_0x361b9d(0x175)][_0x361b9d(0x156)](async _0x400c10=>{const _0x7dd1fe=_0x361b9d;for(let _0x48fedd in _0x400c10[_0x7dd1fe(0x166)]){if(_0x400c10[_0x7dd1fe(0x166)][_0x48fedd]==_0x3479a8[_0x7dd1fe(0x151)][_0x7dd1fe(0x1c9)]||_0x400c10['on']==_0x7dd1fe(0x1d3)){global[_0x7dd1fe(0x165)]=!![],global[_0x7dd1fe(0x176)][_0x7dd1fe(0x17e)]+=0x1,global[_0x7dd1fe(0x161)]=![],await _0xf59299[_0x7dd1fe(0x195)](_0x3479a8[_0x7dd1fe(0x1a8)],await events[_0x7dd1fe(0x15a)](_0x7dd1fe(0x1a3)),_0x3479a8[_0x7dd1fe(0x181)]),await _0xf59299[_0x7dd1fe(0x14f)](events[_0x7dd1fe(0x155)][_0x7dd1fe(0x1a7)]['presence'][_0x7dd1fe(0x152)],_0x3479a8[_0x7dd1fe(0x1a8)]);try{await _0x400c10['function'](_0x3479a8,_0xf59299);}catch(_0x228654){global['catchError']=!![],console[_0x7dd1fe(0x1c2)](_0x228654);}global[_0x7dd1fe(0x161)]?await _0xf59299[_0x7dd1fe(0x195)](_0x3479a8[_0x7dd1fe(0x1a8)],await events[_0x7dd1fe(0x15a)](_0x7dd1fe(0x197)),_0x3479a8['key']):await _0xf59299['sendReact'](_0x3479a8[_0x7dd1fe(0x1a8)],_0x400c10[_0x7dd1fe(0x18b)],_0x3479a8[_0x7dd1fe(0x181)]),await _0xf59299[_0x7dd1fe(0x14f)](_0x7dd1fe(0x19f),_0x3479a8[_0x7dd1fe(0x1a8)]);}}});}catch(_0x3a040c){console[_0x361b9d(0x1c2)](_0x3a040c),sendErrorMessage(_0x3479a8['from'],_0x3a040c,_0x3479a8[_0x361b9d(0x181)],_0x3479a8,[],![]);}}),setInterval(async()=>{const _0x279201=_0x2986e2;var _0x4a1aff=new Date()[_0x279201(0x1a5)]('EN',{'weekday':_0x279201(0x179),'year':_0x279201(0x1cd),'month':_0x279201(0x179),'day':_0x279201(0x1cd)}),_0x412efc=new Date()[_0x279201(0x1cc)]('LK',{'timeZone':_0x279201(0x189)})['split']('\x20')[0x1];const _0x45db0b=_0x279201(0x170)+_0x4a1aff+_0x279201(0x171)+_0x412efc+_0x279201(0x15e);await _0xf59299[_0x279201(0x1ce)](_0x45db0b);},0x3e8*0xa);if(_0xf59299[_0x2986e2(0x187)]&&_0xf59299[_0x2986e2(0x187)]?.['id'])_0xf59299[_0x2986e2(0x187)][_0x2986e2(0x1cb)]=jidNormalizedUser(_0xf59299[_0x2986e2(0x187)]?.['id']);_0xf59299[_0x2986e2(0x18f)]=_0xf59299[_0x2986e2(0x1b5)]==_0x2986e2(0x19b)?DEFAULT_LEGACY_CONNECTION_CONFIG['logger']['child']({}):DEFAULT_CONNECTION_CONFIG[_0x2986e2(0x18f)][_0x2986e2(0x1d1)]({});};function _0x5aa5(){const _0x1f6c51=['hits','connection.update','logout','key','parse','creds.update','exit','296cJQxWP','6346dusHwT','user','output','Asia/Colombo','toLowerCase','sucReact','sender','Safari','./lib','logger','api','917025994178','Perintah\x20ini\x20hanya\x20dapat\x20digunakan\x20oleh\x20admin\x20group!','connecting\x20to\x20Bot♾️','end','sendReact','connectionReplaced','ERROR','heh','reply','push','legacy','forEach','./plugins','group-participants.update','available','\x20Online.','error','Connection...','INFO','Login\x20successful!\x20✅️','toLocaleDateString','151002IgzJxv','auto','from','47540oAucsT','💥\x20Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','blockchat','pino','💥\x20Connection\x20closed,\x20reconnecting....','💥\x20Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','./lib/Welcome','💥\x20Connection\x20TimedOut,\x20Reconnecting...','silent','4.0.0','indexOf','apikey','type','setting','status@broadcast','connectionClosed','extname','Perintah\x20ini\x20hanya\x20dapat\x20digunakan\x20oleh\x20Owner!','./lib/class/config.json','4026816oDkzXy','💥\x20Connection\x20Lost\x20from\x20Server,\x20reconnecting...','remoteJid','statusCode','owner','3016647JWvJNT','log','badSession','loggedOut','Wait,\x20in\x20progress','messages','Perintah\x20ini\x20hanya\x20dapat\x20digunakan\x20oleh\x20Premium!','💥\x20Unknown\x20DisconnectReason:\x20','command','startsWith','jid','toLocaleString','numeric','updateProfileStatus','💥\x20Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','@hapi/boom','child','users','text','6IgAovN','sendPresenceUpdate','Received\x20Pending\x20Notifications.','client','value','writeToFile','💥\x20Restart\x20Required,\x20Restarting...','config','map','messages.upsert','readdirSync','close','reactArry','\x20New\x20Login.','2368230pldRyZ','./lib/db/group','\x0a\x0a💗\x20ᴀʙᴜ...ᴍᴅ...ᴡᴀᴛsᴀᴘᴘ...ᴍᴜʟᴛɪ..ʙᴏᴛ...💬\x0a\x0a🤤🤍\x20ᴄʀᴇᴀᴛᴇᴅ\x20ʙʏ\x20ᴊsʟ','./utils','readFromFile','catchError','No\x20Results\x20Found','timedOut','store','isInCmd','pattern','./lib/Jsl/store_multi.json','./lib/db/user.json','.js','./lib/db/user','./lib/db/group.json','./session.json','includes','7giGJCY','Fitur\x20ini\x20sedang\x20dimatikan!','📅\x20','\x0a⌚\x20','2372420PYZcxc','473jpAwFL','Offine.','commands','mydb','readFileSync','APIs','long','path','message','Bot\x20bukan\x20admin,\x20tidak\x20dapat\x20mengakses\x20fitur\x20tersebut','Perintah\x20ini\x20hanya\x20dapat\x20digunakan\x20di\x20private\x20chat!'];_0x5aa5=function(){return _0x1f6c51;};return _0x5aa5();}bot();
