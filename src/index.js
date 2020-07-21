import signin from './signin'
import lbot from './line'


(async function(){
	const tiebaSign = new signin(process.env.BDUSS)
	
	console.log('正在準備，正在開始進行百度貼吧簽到...')
	console.log('/-----------------------------------------------------------------/')
	console.log('/-----------------------------------------------------------------/')

	
	
	console.log('正在登入中...')
	const isLogin = await tiebaSign.login()
	if(!isLogin){
		console.log('登入失敗。。。')
		lbot()
		return
	}
	console.log('登入成功!!')
	console.log('/-----------------------------------------------------------------/')
	console.log('/-----------------------------------------------------------------/')
	
	
	console.log('獲取貼吧總數')
	const tiebaNum = await tiebaSign.getAllTieba()
	if(!tiebaNum){
		console.log('獲取貼吧總數失敗。。。')
		lbot()
		return
	}
	console.log('獲取成功!!')
	console.log('總共: ' + tiebaNum + '個')
	console.log('/-----------------------------------------------------------------/')
	console.log('/-----------------------------------------------------------------/')
	
	
	console.log('開始簽到')
	const startRst = await tiebaSign.startSignUp()
	if(!startRst){
		console.log('簽到失敗。。。')
		lbot()
		return
	}
	console.log('簽到成功!!')
	console.log('結果如下')
	console.log(startRst)
	console.log('/-----------------------------------------------------------------/')
	console.log('/-----------------------------------------------------------------/')
})()