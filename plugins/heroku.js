const Jsl_0x2ce703=Jsl_0x2f4b;function Jsl_0x2f4b(_0x1c75e4,_0x480fbb){const _0xea8ffb=Jsl_0xea8f();return Jsl_0x2f4b=function(_0x2f4bc8,_0x4877ce){_0x2f4bc8=_0x2f4bc8-0x108;let _0x496838=_0xea8ffb[_0x2f4bc8];return _0x496838;},Jsl_0x2f4b(_0x1c75e4,_0x480fbb);}(function(_0xcbce88,_0x1f6cec){const _0x5cb92b=Jsl_0x2f4b,_0x44f917=_0xcbce88();while(!![]){try{const _0x3a9c43=parseInt(_0x5cb92b(0x137))/0x1*(-parseInt(_0x5cb92b(0x125))/0x2)+parseInt(_0x5cb92b(0x12f))/0x3+parseInt(_0x5cb92b(0x114))/0x4+-parseInt(_0x5cb92b(0x127))/0x5+parseInt(_0x5cb92b(0x14b))/0x6*(-parseInt(_0x5cb92b(0x121))/0x7)+parseInt(_0x5cb92b(0x14d))/0x8*(parseInt(_0x5cb92b(0x11b))/0x9)+parseInt(_0x5cb92b(0x10d))/0xa;if(_0x3a9c43===_0x1f6cec)break;else _0x44f917['push'](_0x44f917['shift']());}catch(_0x8ef722){_0x44f917['push'](_0x44f917['shift']());}}}(Jsl_0xea8f,0x8cbb7));const got=require(Jsl_0x2ce703(0x12a)),Heroku=require(Jsl_0x2ce703(0x134)),{bot,isPublic}=require(Jsl_0x2ce703(0x139)),Config=require(Jsl_0x2ce703(0x13f)),heroku=new Heroku({'token':Config[Jsl_0x2ce703(0x109)]}),baseURI=Jsl_0x2ce703(0x140)+Config[Jsl_0x2ce703(0x10c)],simpleGit=require(Jsl_0x2ce703(0x136)),{secondsToDHMS}=require('../lib'),git=simpleGit(),exec=require(Jsl_0x2ce703(0x118))[Jsl_0x2ce703(0x126)];bot({'pattern':Jsl_0x2ce703(0x11e),'fromMe':!![],'type':Jsl_0x2ce703(0x13a),'desc':Jsl_0x2ce703(0x132),'type':Jsl_0x2ce703(0x13a)},async _0x3205fd=>{const _0x114a7b=Jsl_0x2ce703;await _0x3205fd[_0x114a7b(0x11f)](_0x114a7b(0x147)),await heroku[_0x114a7b(0x11c)](baseURI+_0x114a7b(0x12b))[_0x114a7b(0x124)](async _0x32e4f7=>{const _0x58e34f=_0x114a7b;await _0x3205fd[_0x58e34f(0x11f)](_0x58e34f(0x111)+_0x32e4f7[_0x58e34f(0x123)][_0x58e34f(0x14a)]);});}),bot({'pattern':Jsl_0x2ce703(0x145),'fromMe':!![],'type':Jsl_0x2ce703(0x13a),'desc':Jsl_0x2ce703(0x13b),'type':Jsl_0x2ce703(0x13a)},async _0x1a6e6e=>{const _0xcc7e5=Jsl_0x2ce703;await heroku[_0xcc7e5(0x14c)](baseURI+'/formation')[_0xcc7e5(0x122)](async _0x557915=>{const _0x833f3f=_0xcc7e5;await _0x1a6e6e[_0x833f3f(0x11f)](_0x833f3f(0x13e)),await heroku['patch'](baseURI+'/formation/'+_0x557915[0x0]['id'],{'body':{'quantity':0x0}});})[_0xcc7e5(0x124)](async _0x57e17e=>{const _0xacb28d=_0xcc7e5;await _0x1a6e6e['sendMessage'](_0xacb28d(0x111)+_0x57e17e[_0xacb28d(0x123)]['message']);});}),bot({'pattern':Jsl_0x2ce703(0x12d),'fromMe':isPublic,'desc':'Show\x20Quota\x20info','type':Jsl_0x2ce703(0x13a)},async _0x2c23a6=>{const _0x2be077=Jsl_0x2ce703;try{heroku[_0x2be077(0x14c)](_0x2be077(0x138))[_0x2be077(0x122)](async _0x2b371f=>{const _0x2bd656=_0x2be077,_0x1e80be=_0x2bd656(0x146)+_0x2b371f['id']+_0x2bd656(0x143);headers={'User-Agent':_0x2bd656(0x119),'Authorization':_0x2bd656(0x149)+Config[_0x2bd656(0x109)],'Accept':_0x2bd656(0x13d)};const _0x4f6c76=await got(_0x1e80be,{'headers':headers}),_0x556872=JSON['parse'](_0x4f6c76[_0x2bd656(0x123)]),_0x11eac5=Math[_0x2bd656(0x133)](_0x556872['account_quota']),_0x57d38b=Math[_0x2bd656(0x133)](_0x556872[_0x2bd656(0x135)]),_0x1dd439=_0x11eac5-_0x57d38b,_0x557424=_0x2bd656(0x108)+secondsToDHMS(_0x11eac5)+_0x2bd656(0x10e)+secondsToDHMS(_0x57d38b)+_0x2bd656(0x148)+secondsToDHMS(_0x1dd439);await _0x2c23a6[_0x2bd656(0x11f)](_0x2bd656(0x116)+_0x557424+'```');})['catch'](async _0x1417ac=>{const _0x4c5bd2=_0x2be077;return await _0x2c23a6[_0x4c5bd2(0x11f)]('HEROKU\x20:\x20'+_0x1417ac[_0x4c5bd2(0x123)][_0x4c5bd2(0x14a)]);});}catch(_0xd816e3){await _0x2c23a6['sendMessage'](_0xd816e3);}}),bot({'pattern':'setvar\x20','fromMe':!![],'type':Jsl_0x2ce703(0x13a),'desc':Jsl_0x2ce703(0x11d),'type':Jsl_0x2ce703(0x13a)},async(_0x109971,_0x311abf)=>{const _0x176577=Jsl_0x2ce703;if(!_0x311abf)return await _0x109971[_0x176577(0x11f)](_0x176577(0x110));const [_0x40c8bc,_0x4ec845]=_0x311abf[_0x176577(0x13c)](':');if(!_0x40c8bc||!_0x4ec845)return await _0x109971[_0x176577(0x11f)]('_Example:\x20.setvar\x20SUDO:918113921898_');heroku[_0x176577(0x10b)](baseURI+_0x176577(0x130),{'body':{[_0x40c8bc[_0x176577(0x12c)]()]:_0x4ec845}})[_0x176577(0x122)](async()=>{const _0x1fbb3d=_0x176577;await _0x109971[_0x1fbb3d(0x11f)]('_'+_0x40c8bc[_0x1fbb3d(0x12c)]()+':\x20'+_0x4ec845+'_');})[_0x176577(0x124)](async _0x480c54=>{const _0x29e40f=_0x176577;await _0x109971[_0x29e40f(0x11f)](_0x29e40f(0x128)+_0x480c54[_0x29e40f(0x123)][_0x29e40f(0x14a)]);});}),bot({'pattern':Jsl_0x2ce703(0x12e),'fromMe':!![],'type':Jsl_0x2ce703(0x13a),'desc':Jsl_0x2ce703(0x131),'type':Jsl_0x2ce703(0x13a)},async(_0x42ce85,_0x4afb13)=>{const _0x4a9251=Jsl_0x2ce703;if(!_0x4afb13)return await _0x42ce85[_0x4a9251(0x11f)]('_Example:\x20delvar\x20sudo_');heroku[_0x4a9251(0x14c)](baseURI+_0x4a9251(0x130))[_0x4a9251(0x122)](async _0x2c83fe=>{const _0x275bcb=_0x4a9251,_0x597714=_0x4afb13[_0x275bcb(0x144)]()[_0x275bcb(0x12c)]();if(_0x2c83fe[_0x597714])return await heroku[_0x275bcb(0x10b)](baseURI+_0x275bcb(0x130),{'body':{[_0x597714]:null}}),await _0x42ce85[_0x275bcb(0x11f)]('_Deleted\x20'+_0x597714+'_');await _0x42ce85['sendMessage']('_'+_0x597714+_0x275bcb(0x142));})['catch'](async _0x3c22c8=>{const _0x2f4f93=_0x4a9251;await _0x42ce85[_0x2f4f93(0x11f)](_0x2f4f93(0x128)+_0x3c22c8[_0x2f4f93(0x123)][_0x2f4f93(0x14a)]);});}),bot({'pattern':'getvar\x20','fromMe':!![],'type':'heroku','desc':Jsl_0x2ce703(0x10a),'type':Jsl_0x2ce703(0x13a)},async(_0x5620e4,_0x5080ca)=>{const _0x51de8e=Jsl_0x2ce703;if(!_0x5080ca)return await _0x5620e4[_0x51de8e(0x11f)]('_Example:\x20getvar\x20sudo_');const _0x55e9a5=_0x5080ca['trim']()[_0x51de8e(0x12c)]();heroku[_0x51de8e(0x14c)](baseURI+'/config-vars')['then'](async _0x169596=>{const _0x504bee=_0x51de8e;if(_0x169596[_0x55e9a5])return await _0x5620e4[_0x504bee(0x11f)](_0x504bee(0x120)[_0x504bee(0x11a)]('{}',_0x55e9a5)[_0x504bee(0x11a)]('{}',_0x169596[_0x55e9a5]));await _0x5620e4[_0x504bee(0x11f)](_0x55e9a5+_0x504bee(0x141));})[_0x51de8e(0x124)](async _0x49fef8=>{const _0x4dc76c=_0x51de8e;await _0x5620e4[_0x4dc76c(0x11f)](_0x4dc76c(0x113)+_0x49fef8[_0x4dc76c(0x123)][_0x4dc76c(0x14a)]);});}),bot({'pattern':Jsl_0x2ce703(0x117),'fromMe':!![],'type':Jsl_0x2ce703(0x13a),'desc':Jsl_0x2ce703(0x10f),'type':Jsl_0x2ce703(0x13a)},async _0x142cce=>{const _0x29638e=Jsl_0x2ce703;let _0x318cc0=_0x29638e(0x129);heroku['get'](baseURI+'/config-vars')[_0x29638e(0x122)](async _0x16c398=>{const _0x2add4f=_0x29638e;for(const _0x13eca2 in _0x16c398){_0x318cc0+=_0x13eca2+_0x2add4f(0x112)+_0x16c398[_0x13eca2]+'\x0a\x0a';}return await _0x142cce[_0x2add4f(0x11f)](_0x318cc0+_0x2add4f(0x116));})[_0x29638e(0x124)](async _0xd8d150=>{const _0x1b5bae=_0x29638e;await _0x142cce[_0x1b5bae(0x11f)](_0x1b5bae(0x115)+_0xd8d150['body'][_0x1b5bae(0x14a)]);});});function Jsl_0xea8f(){const _0x14080f=['heroku-client','quota_used','simple-git','2923XUOrRz','/account','../lib/','heroku','Dyno\x20off','split','application/vnd.heroku+json;\x20version=3.account-quotas','_Shutting\x20down._','../config','/apps/','\x20not\x20found','\x20not\x20found_','/actions/get-quota','trim','shutdown','https://api.heroku.com/accounts/','_Restarting_','\x0aRemaning\x20\x20\x20\x20:\x20','Bearer\x20','message','126ILaTMt','get','612088gsdguu','Total\x20Quota\x20:\x20','HEROKU_API_KEY','Show\x20heroku\x20env','patch','HEROKU_APP_NAME','15551110digtOY','\x0aUsed\x20\x20Quota\x20:\x20','Heroku\x20all\x20env','_Example:\x20.setvar\x20SUDO:918113921898_','HEROKU\x20:\x20','\x20:\x20','ᴇʜʀᴏᴋᴜ\x20:\x20','82344akJiml','𝐻𝑒𝑟𝑜𝑘𝑜\x20:\x20','```','allvar','child_process','Chrome/80.0.3987.149\x20Mobile\x20Safari/537.36','replace','9rBMQao','delete','Set\x20heroku\x20env','restart','sendMessage','_{}\x20:\x20{}_','307573GKmHzC','then','body','catch','262JaLesi','exec','3344845vfqRum','ʜᴇʀᴏᴋᴜ\x20:\x20','```ʜᴇʀᴏᴋᴜ\x20ᴀʟʟ\x20ᴠᴀʀs\x0a\x0a\x0a','got','/dynos','toUpperCase','dyno','delvar\x20','2696496tcPbsM','/config-vars','Delete\x20Heroku\x20env','Restart\x20Dyno','floor'];Jsl_0xea8f=function(){return _0x14080f;};return Jsl_0xea8f();}
