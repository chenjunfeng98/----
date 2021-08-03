module.exports = {
    publicPath: '/', //项目的公共路径
    devServer: {    //开发用的服务器配置
        proxy: {
            '/zhihudaily': {
                target: 'http://news-at.zhihu.com/api/3/news/latest',  //这里是目标服务器地址
                changeOrigin: true, //是否改变源地址
                ws: true,  //是否支持websocket协议
                pathRewrite: {  //路径重写
                    '^/zhihudaily': ''       //这里一定要为空
                }
            },
            '/zhihuyesterday': {
                target: `http://news-at.zhihu.com/api/3/news/before/${formateTime(new Date())}`,  //这里是目标服务器地址
                changeOrigin: true, //是否改变源地址
                ws: true,  //是否支持websocket协议
                pathRewrite: {  //路径重写
                    '^/zhihuyesterday': ''       //这里一定要为空
                }
            },
            '/zhihubeforeyesterday': {
                target: `http://news-at.zhihu.com/api/3/news/before/${formateTime(new Date())-1}`,  //这里是目标服务器地址
                changeOrigin: true, //是否改变源地址
                ws: true,  //是否支持websocket协议
                pathRewrite: {  //路径重写
                    '^/zhihubeforeyesterday': ''       //这里一定要为空
                }
            }
        }
    }
}



function formateTime(t){
    if(t instanceof Date){
        let year = t.getFullYear();
        let month = t.getMonth()+1;
        month =  month < 10 ? `0${month}` : month;
        let day = t.getDate();
        day =  day < 10 ? `0${day}` : day;
        res = `${year}${month}${day}`;
        return res; 
    }
    return "";
}