import fs from 'fs'
import utilites from './utilites'


const baiduLogin = (() => {
	let req	
	  , formGroup = null
	
	return class {
		constructor(bduss){
			this.tbs = null
			
			req = utilites(bduss)
		}
		
		async login(){
			try{
				let res = await req.getMethod('http://tieba.baidu.com/dc/common/tbs', true)
				res = res.json()
				
				if(res.is_login == 1){
					this.tbs = res.tbs
					return Promise.resolve(true)
				}
				else
					return Promise.resolve(false)
					
			}
			catch(e){
				console.log('Login failed, ' + e.message)
				return Promise.resolve(false)
			}	
		}
		
		async getAllTieba(){
			if(this.tbs === null)
				return Promise.resolve(false)
			
			try{
				const res = await req.getMethod('https://tieba.baidu.com/home/main?un=thuocd')
				const $ = res.jq()

				
				const targetScript = $(
					$('script')
						.toArray()
						.find(e => /ihome\/widget\/forumGroup/.test($(e).html()))
				).html()
				
				formGroup = eval(`(()=>{let content;const _={Module:{use:(str,obj)=>content=obj.forumArr}};${targetScript}return content})()`)
				
				return Promise.resolve(formGroup.length)
			}
			catch(e){
				console.log('Get all tieba failed: '+e.message)
				return Promise.resolve(false)
			}
		}
		
		async startSignUp(){
			if(this.tbs === null)
				return Promise.resolve(false)
			if(formGroup === null)
				return Promise.resolve(false)
			
			if(formGroup.length == 0)
				return Promise.resolve(false)	
			
			let allSignup = []
			
			try{
				for(let i of formGroup){
					console.log(`正在簽到${i.forum_name}吧`)
					
					let signup_rst = await req.postMethod('https://tieba.baidu.com/sign/add', {
						ie: 'utf-8',
						kw: i.forum_name,
						tbs: this.tbs
					})
					
					signup_rst = signup_rst.json()
					
					allSignup.push({
						...signup_rst,
						name: i.forum_name	
					})
				}
				
				return Promise.resolve(allSignup)
			}
			catch(e){
				console.log('Signup failed: '+e.message)
				return Promise.resolve(false)
			}
		}
	}
})()

export default baiduLogin