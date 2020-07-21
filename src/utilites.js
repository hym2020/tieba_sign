import request from 'request'
import cheerio from 'cheerio'


const UA = {
	'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0'
}

const myRequest = bduss => {
	
	const cookieJar = request.jar()
	
	cookieJar.setCookie(request.cookie(`BDUSS=${bduss}`), 'https://baidu.com')
	cookieJar.setCookie(request.cookie(`BDUSS=${bduss}`), 'http://tieba.baidu.com')
	
	class myCls {
		constructor(){}
		
		getMethod(url, isSign = false){			
			return new Promise((resolve, reject) => {
				request({
					url: url,
					headers: {...UA},
					method: 'GET',
					jar: cookieJar,
					maxRedirects: 20
				}, (err, res, body) => {
					if(err) 
						return reject(err)
					else
						resolve({
							text: () => body,
							json: () => JSON.parse(body),
							jq: () => cheerio.load(body, {xmlMode: true})
						})
				})
			})
		}
		
		postMethod(url, data){
			return new Promise((resolve, reject) => {
				request({
					url: url,
					headers: {
						...UA,
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
					},
					method: 'POST',
					jar: cookieJar,
					body: Object.keys(data).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(data[e])}`).join('&')
				}, (err, res, body) => {
					if(err)
						return reject(err)
					else
						resolve({
							text: () => body,
							json: () => JSON.parse(body),
							jq: () => cheerio.load(body, {xmlMode: true})
						})
				})
			})			
		}
	}
	
	return new myCls
}

export default myRequest