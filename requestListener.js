// req - request/ запрос, res - response/ ответ
module.exports = function requestListener(req, res){
    const {url, method} = req;
    res.end(`Hello! Your method is ${method} in url ${url}`); 
}