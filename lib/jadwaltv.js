//═══════════════════════════════════════════════════════//
// 𝘛𝘏𝘐𝘚 𝘉𝘖𝘛 𝘊𝘙𝘌𝘈𝘛𝘌𝘋 𝘉𝘠 𝘈𝘉𝘜
// 𝘠𝘖𝘜 𝘊𝘖𝘗𝘠 𝘗𝘈𝘚𝘛𝘐𝘕𝘎 𝘖𝘙 𝘙𝘌 𝘌𝘋𝘐𝘛𝘐𝘕𝘎 
// 𝘗𝘓𝘌𝘈𝘚𝘌 𝘋𝘖𝘕𝘛 𝘙𝘌𝘔𝘖𝘝𝘌 𝘔𝘠 𝘊𝘙𝘌𝘋𝘐𝘛
// 𝘈𝘉𝘜 𝘚𝘌𝘙 𝘉𝘠 𝘑𝘚𝘓
//════════════════════════════//

const {default: Axios} = require('axios')
const cheerio = require('cheerio')

function jadwaltv(query) {
	return new Promise(async (resolve, reject) => {
const channelna = query;
               let stasiun = [
                    "rcti",
                    "nettv",
                    "antv",
                    "gtv",
                    "indosiar",
                    "inewstv",
                    "kompastv",
                    "metrotv",
                    "mnctv",
                    "rtv",
                    "sctv",
                    "trans7",
                    "transtv",
                    "tvone",
                    "tvri",
               ];
               let isist = `*Available channels* :\n\n`;
               for (let i = 0;i < stasiun.length;i++) {
                    isist += `*➣*  ${stasiun[i]}\n`;
               }
               try {
                    // const tv_switch = stasiun[0]
                    Axios.get("https://www.jadwaltv.net/channel/" + channelna)
                         .then(({
                              data
                         }) => {
                              const $ = cheerio.load(data);
                              let isitable1 = [];
                              let isitable2 = [];
                              $("div > div > table:nth-child(3) > tbody > tr").each(function (
                                   i,
                                   result
                              ) {
                                   isitable1.push({
                                        jam: result.children[0].children[0].data,
                                        tayang: result.children[1].children[0].data,
                                   });
                              });
                              // console.log(isitable1)
                              $("div > div > table:nth-child(5) > tbody > tr").each(function (
                                   i,
                                   result
                              ) {
                                   isitable2.push({
                                        jam: result.children[0].children[0].data,
                                        tayang: result.children[1].children[0].data,
                                   });
                              });
                              const semuatable = [];

                              for (let i = 0;i < isitable1.length;i++) {
                                   semuatable.push(isitable1[i]);
                              }
                              for (let i = 0;i < isitable2.length;i++) {
                                   semuatable.push(isitable2[i]);
                              }
                              // console.log(semuatable)
                              let daftartay = `*Menampilkan daftar tayang channel ${channelna}*\n\n`;
                              for (let i = 0;i < semuatable.length;i++) {
                                   daftartay += `${semuatable[i].jam}  ${semuatable[i].tayang}\n`;
                              }
                              resolve(daftartay);
                              // console.log(semuatable)
                         })
                         .catch((e) => {
                              resolve(isist);
                              // console.log(e)
                         });
               } catch (e) {
                    resolve(isist);
                    console.log(e);
               }
	})
}

module.exports = {jadwaltv}