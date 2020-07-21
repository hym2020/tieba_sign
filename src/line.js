import linebot from 'linebot'
import fs from 'fs'



const bot = linebot({
	channelId: process.env.LINECHANNEL,
	channelSecret: process.env.LINESECRET,
	channelAccessToken: process.env.LINECHANNELTOKEN
})



export default function(){
	return bot.push(process.env.LINE_USERID, `百度簽到失敗 at ${new Date().toString()}`)
}