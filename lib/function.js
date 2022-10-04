const axios = require("axios");
const { spawn } = require("child_process");
const FormData = require("form-data");
const fetch = require("node-fetch");
const { JSDOM } = require("jsdom");
const { MODE } = require("../config");

async function getJson(url, options) {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

async function getBuffer(url, options) {
    try {
	options ? options : {}
	const res = await axios({
	    method: "get",
	    url,
	    headers: {
		'DNT': 1,
		'Upgrade-Insecure-Request': 1
	    },
	    ...options,
	    responseType: 'arraybuffer'
	})
	return res.data
    } catch (err) {
	return err
    }
}

async function isUrl(url) {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, "gi"));
}

async function isAdmin(jid, user, client) {
    const { jidDecode } = require("@adiwajshing/baileys");
    const decodeJid = (jid) => {
      if (!jid) return jid;
      if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {};
        return (
          (decode.user && decode.server && decode.user + "@" + decode.server) ||
          jid
        );
      } else return jid;
    };
    let groupMetadata = await client.groupMetadata(jid);
    const groupAdmins = groupMetadata.participants
      .filter((v) => v.admin !== null)
      .map((v) => v.id);
    return groupAdmins.includes(decodeJid(user));
  }

async function parseJid(text = '') {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

async function getRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

async function isPublic() {
var abu = MODE == 'public' ? false : true
return abu;
}

async function qrcode() {
qrcode:async(string)=>{
    const { toBuffer } = require("qrcode");
    let buff = await toBuffer(string);
    return buff;
}
  
async function secondsToDHMS() {  
secondsToDHMS :async(seconds)=>{
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " D, " : " D, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " H, " : " H, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " M, " : " M, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " S" : " S") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

module.exports = { 
     getBuffer,
     getJson,
     getRandom,
     isUrl,
     parseJid,
     isPublic,
     qrcode,
     secondsToDHMS
}
