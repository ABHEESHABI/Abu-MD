const Jsl_0x28a4f2=Jsl_0x3c4e;(function(_0x1148cb,_0x3dc3e7){const _0x1fddb4=Jsl_0x3c4e,_0x3f564f=_0x1148cb();while(!![]){try{const _0x39b387=-parseInt(_0x1fddb4(0x1b5))/0x1+parseInt(_0x1fddb4(0x1ea))/0x2*(-parseInt(_0x1fddb4(0x1bc))/0x3)+-parseInt(_0x1fddb4(0x1eb))/0x4+-parseInt(_0x1fddb4(0x1fa))/0x5+-parseInt(_0x1fddb4(0x1b6))/0x6*(-parseInt(_0x1fddb4(0x1bf))/0x7)+-parseInt(_0x1fddb4(0x1a5))/0x8*(-parseInt(_0x1fddb4(0x1cc))/0x9)+parseInt(_0x1fddb4(0x1a9))/0xa;if(_0x39b387===_0x3dc3e7)break;else _0x3f564f['push'](_0x3f564f['shift']());}catch(_0x385de2){_0x3f564f['push'](_0x3f564f['shift']());}}}(Jsl_0x28b4,0xdcac7));const got=require(Jsl_0x28a4f2(0x1fe)),Heroku=require('heroku-client'),{secondsToDHMS,Jsl}=require(Jsl_0x28a4f2(0x1af)),Config=require('../config'),heroku=new Heroku({'token':Config[Jsl_0x28a4f2(0x200)]}),baseURI=Jsl_0x28a4f2(0x1e2)+Config[Jsl_0x28a4f2(0x1dc)],simpleGit=require(Jsl_0x28a4f2(0x1b8)),git=simpleGit(),exec=require('child_process')[Jsl_0x28a4f2(0x1fd)];function Jsl_0x3c4e(_0x4dddb7,_0x47c445){const _0x28b47d=Jsl_0x28b4();return Jsl_0x3c4e=function(_0x3c4eed,_0xeeccf2){_0x3c4eed=_0x3c4eed-0x1a1;let _0x316be5=_0x28b47d[_0x3c4eed];return _0x316be5;},Jsl_0x3c4e(_0x4dddb7,_0x47c445);}Jsl({'pattern':'restart','fromMe':!![],'desc':Jsl_0x28a4f2(0x1b3),'type':'heroku'},async _0x3e9a8f=>{const _0x3d948a=Jsl_0x28a4f2;await _0x3e9a8f[_0x3d948a(0x1b4)](_0x3d948a(0x1e0)),await heroku[_0x3d948a(0x1d9)](baseURI+_0x3d948a(0x1db))['catch'](async _0x2a588f=>{const _0x207f1e=_0x3d948a;await _0x3e9a8f[_0x207f1e(0x1b4)](_0x207f1e(0x1e7)+_0x2a588f[_0x207f1e(0x1ee)][_0x207f1e(0x1a8)]);});}),Jsl({'pattern':'shutdown','fromMe':!![],'desc':Jsl_0x28a4f2(0x205),'type':'heroku'},async _0x279015=>{const _0x402f15=Jsl_0x28a4f2;await heroku[_0x402f15(0x202)](baseURI+_0x402f15(0x204))[_0x402f15(0x1cb)](async _0x590406=>{const _0x30178f=_0x402f15;await _0x279015[_0x30178f(0x1b4)]('_Shuttind\x20down._'),await heroku[_0x30178f(0x1c7)](baseURI+'/formation/'+_0x590406[0x0]['id'],{'body':{'quantity':0x0}});})[_0x402f15(0x1d4)](async _0x26a64b=>{const _0x5b09d0=_0x402f15;await _0x279015[_0x5b09d0(0x1b4)](_0x5b09d0(0x1e7)+_0x26a64b[_0x5b09d0(0x1ee)]['message']);});}),Jsl({'pattern':Jsl_0x28a4f2(0x1ae),'fromMe':!![],'desc':Jsl_0x28a4f2(0x1d8),'type':Jsl_0x28a4f2(0x1ef)},async _0x50f0be=>{const _0x284b25=Jsl_0x28a4f2;try{heroku[_0x284b25(0x202)](_0x284b25(0x1c2))[_0x284b25(0x1cb)](async _0xb111bb=>{const _0x588f24=_0x284b25,_0x56a633='https://api.heroku.com/accounts/'+_0xb111bb['id']+_0x588f24(0x1a3);headers={'User-Agent':_0x588f24(0x1c4),'Authorization':_0x588f24(0x1b1)+Config['HEROKU_API_KEY'],'Accept':_0x588f24(0x1fc)};const _0xd594a4=await got(_0x56a633,{'headers':headers}),_0x51ce0c=JSON[_0x588f24(0x206)](_0xd594a4[_0x588f24(0x1ee)]),_0x25b81a=Math[_0x588f24(0x1df)](_0x51ce0c[_0x588f24(0x1f9)]),_0x13bcd2=Math[_0x588f24(0x1df)](_0x51ce0c[_0x588f24(0x1e9)]),_0x4149ed=_0x25b81a-_0x13bcd2,_0x1dee87=_0x588f24(0x1ff)+secondsToDHMS(_0x25b81a)+_0x588f24(0x1ab)+secondsToDHMS(_0x13bcd2)+_0x588f24(0x1a4)+secondsToDHMS(_0x4149ed);await _0x50f0be['sendMessage'](_0x588f24(0x1b0)+_0x1dee87+_0x588f24(0x1b0));})[_0x284b25(0x1d4)](async _0x13de11=>{const _0x141b6d=_0x284b25;return await _0x50f0be[_0x141b6d(0x1b4)]('HEROKU\x20:\x20'+_0x13de11[_0x141b6d(0x1ee)]['message']);});}catch(_0x1ce85e){await _0x50f0be[_0x284b25(0x1b4)](_0x1ce85e);}}),Jsl({'pattern':Jsl_0x28a4f2(0x1e4),'fromMe':!![],'desc':Jsl_0x28a4f2(0x1c8),'type':Jsl_0x28a4f2(0x1ef)},async(_0x4f9641,_0x444aa9)=>{const _0x2e73b3=Jsl_0x28a4f2;if(!_0x444aa9)return await _0x4f9641['sendMessage'](_0x2e73b3(0x1e8));const [_0x25aafc,_0x2c1371]=_0x444aa9[_0x2e73b3(0x1f0)](':');if(!_0x25aafc||!_0x2c1371)return await _0x4f9641[_0x2e73b3(0x1b4)]('_Example:\x20.setvar\x20SUDO:918113921898_');heroku[_0x2e73b3(0x1c7)](baseURI+_0x2e73b3(0x201),{'body':{[_0x25aafc['toUpperCase']()]:_0x2c1371}})['then'](async()=>{const _0x1aac9d=_0x2e73b3;await _0x4f9641[_0x1aac9d(0x1b4)]('_'+_0x25aafc['toUpperCase']()+':\x20'+_0x2c1371+'_');})['catch'](async _0x21aea5=>{const _0x54a4b1=_0x2e73b3;await _0x4f9641[_0x54a4b1(0x1b4)](_0x54a4b1(0x1e7)+_0x21aea5[_0x54a4b1(0x1ee)][_0x54a4b1(0x1a8)]);});}),Jsl({'pattern':'delvar\x20','fromMe':!![],'desc':Jsl_0x28a4f2(0x1d2),'type':'heroku'},async(_0x45a028,_0x2a1e85)=>{const _0x3739db=Jsl_0x28a4f2;if(!_0x2a1e85)return await _0x45a028['sendMessage'](_0x3739db(0x1e1));heroku[_0x3739db(0x202)](baseURI+_0x3739db(0x201))['then'](async _0x35d599=>{const _0x4c33ee=_0x3739db,_0x41b759=_0x2a1e85[_0x4c33ee(0x1da)]()[_0x4c33ee(0x1ed)]();if(_0x35d599[_0x41b759])return await heroku['patch'](baseURI+'/config-vars',{'body':{[_0x41b759]:null}}),await _0x45a028[_0x4c33ee(0x1b4)](_0x4c33ee(0x1d7)+_0x41b759+'_');await _0x45a028[_0x4c33ee(0x1b4)]('_'+_0x41b759+_0x4c33ee(0x1d0));})['catch'](async _0x4b9a65=>{const _0x12c3ca=_0x3739db;await _0x45a028[_0x12c3ca(0x1b4)](_0x12c3ca(0x1e7)+_0x4b9a65['body'][_0x12c3ca(0x1a8)]);});}),Jsl({'pattern':'getvar\x20','fromMe':!![],'desc':Jsl_0x28a4f2(0x1f5),'type':'heroku'},async(_0x13641b,_0x2b2007)=>{const _0x9e5059=Jsl_0x28a4f2;if(!_0x2b2007)return await _0x13641b[_0x9e5059(0x1b4)](_0x9e5059(0x1f6));const _0x1443e6=_0x2b2007[_0x9e5059(0x1da)]()['toUpperCase']();heroku[_0x9e5059(0x202)](baseURI+_0x9e5059(0x201))[_0x9e5059(0x1cb)](async _0x259a41=>{const _0x447881=_0x9e5059;if(_0x259a41[_0x1443e6])return await _0x13641b['sendMessage'](_0x447881(0x1d5)[_0x447881(0x1f4)]('{}',_0x1443e6)[_0x447881(0x1f4)]('{}',_0x259a41[_0x1443e6]));await _0x13641b[_0x447881(0x1b4)](_0x1443e6+_0x447881(0x1ac));})[_0x9e5059(0x1d4)](async _0xc94bed=>{const _0x5f4a49=_0x9e5059;await _0x13641b[_0x5f4a49(0x1b4)]('HEROKU\x20:\x20'+_0xc94bed[_0x5f4a49(0x1ee)]['message']);});}),Jsl({'pattern':Jsl_0x28a4f2(0x1d6),'fromMe':!![],'desc':Jsl_0x28a4f2(0x1e6),'type':Jsl_0x28a4f2(0x1ef)},async _0x133359=>{const _0xea8b6e=Jsl_0x28a4f2;let _0x1eb1b6='```Here\x20your\x20all\x20Heroku\x20vars\x0a\x0a\x0a';heroku['get'](baseURI+_0xea8b6e(0x201))[_0xea8b6e(0x1cb)](async _0x2fa475=>{const _0x4280c1=_0xea8b6e;for(const _0xfad08c in _0x2fa475){_0x1eb1b6+=_0xfad08c+_0x4280c1(0x1fb)+_0x2fa475[_0xfad08c]+'\x0a\x0a';}return await _0x133359[_0x4280c1(0x1b4)](_0x1eb1b6+_0x4280c1(0x1b0));})[_0xea8b6e(0x1d4)](async _0x3665e8=>{const _0x54dbc6=_0xea8b6e;await _0x133359['sendMessage'](_0x54dbc6(0x1e7)+_0x3665e8[_0x54dbc6(0x1ee)][_0x54dbc6(0x1a8)]);});}),Jsl({'pattern':'update','fromMe':!![],'desc':Jsl_0x28a4f2(0x1b2)},async _0x1264eb=>{const _0x3547eb=Jsl_0x28a4f2;await git[_0x3547eb(0x1a6)]();var _0x517167=await git['log']([Config[_0x3547eb(0x1b7)]+_0x3547eb(0x1cf)+Config[_0x3547eb(0x1b7)]]);if(_0x517167[_0x3547eb(0x1f8)]===0x0)await _0x1264eb[_0x3547eb(0x1b4)](_0x3547eb(0x1a2));else{var _0x39d84d=_0x3547eb(0x1c3);_0x517167[_0x3547eb(0x1ad)][_0x3547eb(0x1f7)](_0x593b8f=>{const _0x534168=_0x3547eb;_0x39d84d+=_0x534168(0x1bb)+_0x593b8f[_0x534168(0x1de)][_0x534168(0x1c1)](0x0,0xa)+_0x534168(0x1c0)+_0x593b8f[_0x534168(0x1a8)]+'\x20<'+_0x593b8f[_0x534168(0x1ca)]+'>\x0a';}),await _0x1264eb[_0x3547eb(0x1b4)](_0x39d84d+_0x3547eb(0x1b0));}}),Jsl({'pattern':Jsl_0x28a4f2(0x1ba),'fromMe':!![],'dontAddJslList':!![],'desc':Jsl_0x28a4f2(0x1c9)},async _0x589cac=>{const _0x4692bd=Jsl_0x28a4f2;await git[_0x4692bd(0x1a6)]();var _0x124539=await git[_0x4692bd(0x1d1)]([Config['BRANCH']+_0x4692bd(0x1cf)+Config[_0x4692bd(0x1b7)]]);if(_0x124539[_0x4692bd(0x1f8)]===0x0)return await _0x589cac[_0x4692bd(0x1b4)](_0x4692bd(0x1a2));else{await _0x589cac[_0x4692bd(0x1a7)](_0x4692bd(0x1aa));if(Config[_0x4692bd(0x203)][_0x4692bd(0x203)]){try{var _0x124714=await heroku[_0x4692bd(0x202)]('/apps/'+Config[_0x4692bd(0x1dc)]);}catch{await _0x589cac['sendMessage']('_Invalid\x20Heroku\x20Details_'),await new Promise(_0x3134e4=>setTimeout(_0x3134e4,0x3e8));}git[_0x4692bd(0x1a6)](_0x4692bd(0x1f2),Config[_0x4692bd(0x1b7)]),git[_0x4692bd(0x1ce)](_0x4692bd(0x1f1),[_0x4692bd(0x1ec)]);var _0x346250=_0x124714[_0x4692bd(0x1cd)]['replace'](_0x4692bd(0x1c5),_0x4692bd(0x1bd)+Config[_0x4692bd(0x200)]+'@');try{await git[_0x4692bd(0x1dd)](_0x4692bd(0x1ef),_0x346250);}catch{console[_0x4692bd(0x1d1)](_0x4692bd(0x1e5));}await git['push']('heroku',Config[_0x4692bd(0x1b7)]),await _0x589cac[_0x4692bd(0x1b4)]('UPDATED');}else git[_0x4692bd(0x1c6)](async(_0x3efe18,_0x19d84c)=>{const _0x3eb28d=_0x4692bd;if(_0x19d84c&&_0x19d84c['summary'][_0x3eb28d(0x1e3)])await _0x589cac[_0x3eb28d(0x1b4)](_0x3eb28d(0x1d3)),exec(_0x3eb28d(0x1b9))[_0x3eb28d(0x1be)][_0x3eb28d(0x1f3)](process['stderr']);else _0x3efe18&&await _0x589cac[_0x3eb28d(0x1b4)](_0x3eb28d(0x1a1)+_0x3efe18+_0x3eb28d(0x1b0));});}});function Jsl_0x28b4(){const _0x5ccdd6=['3804885tqUaYc','\x20:\x20','application/vnd.heroku+json;\x20version=3.account-quotas','exec','got','Total\x20Quota\x20:\x20','HEROKU_API_KEY','/config-vars','get','HEROKU','/formation','Dyno\x20off','parse','*❌\x20Update\x20failed!*\x0a*Error:*\x20```','_Already\x20on\x20latest\x20version_','/actions/get-quota','\x0aRemaning\x20\x20\x20\x20:\x20','3273896rwlfMG','fetch','reply','message','44841740NtJgRr','_Updating_','\x0aUsed\x20\x20Quota\x20:\x20','\x20not\x20found','all','dyno','../lib/','```','Bearer\x20','Checks\x20for\x20update.','Restart\x20Dyno','sendMessage','1485438EySThJ','6voeNyO','BRANCH','simple-git','npm\x20install','update\x20now','🔹\x20[','969uCSGLM','https://api:','stderr','418145HaWKWO',']:\x20','substring','/account','Update\x20Available*\x0a\x0a\x0a\x20Changes:\x0a```','Chrome/80.0.3987.149\x20Mobile\x20Safari/537.36','https://','pull','patch','Set\x20heroku\x20env','Updates\x20the\x20Bot','author_name','then','9StBPqx','git_url','reset','..origin/','\x20not\x20found_','log','Delete\x20Heroku\x20env','UPDATED','catch','_{}\x20:\x20{}_','allvar','_Deleted\x20','Show\x20Quota\x20info','delete','trim','/dynos','HEROKU_APP_NAME','addRemote','date','floor','_Restarting_','_Example:\x20delvar\x20sudo_','/apps/','changes','setvar\x20','heroku\x20remote\x20error','Heroku\x20all\x20env','HEROKU\x20:\x20','_Example:\x20.setvar\x20SUDO:918113921898_','quota_used','332dPPvvS','6996936dklrfI','FETCH_HEAD','toUpperCase','body','heroku','split','hard','upstream','pipe','replace','Show\x20heroku\x20env','_Example:\x20getvar\x20sudo_','map','total','account_quota'];Jsl_0x28b4=function(){return _0x5ccdd6;};return Jsl_0x28b4();}
