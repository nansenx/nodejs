留言板项目，最开始是使用原生的node写的，后改良使用express开源框架
// http
//     .createServer(function (req, res) {
//         var parseObj = new URL(req.url, 'http://127.0.0.1:8081/')
//         var pathname = parseObj.pathname
//         console.log(pathname)
//         switch (pathname) {
//             case '/':
//                 fs.readFile('./views/index.html', function (err, data) {
//                     if (err) {
//                         return res.end('对不起~请求失败了呢--')
//                     }
//                     var htmlStr = template.render(data.toString(),{
//                         dataList:dataList
//                     })
//                     res.end(htmlStr)
//                 })
//                 break;
//             case '/post':
//                 fs.readFile('./views/post.html', function (err, data) {
//                     if (err) {
//                         return res.end('对不起~请求失败了呢--')
//                     }
//                     res.end(data)
//                 })
//                 break;
//             case '/pinglun':
//                 var dataItem = {}
//                 dataItem.name = parseObj.searchParams.get('name');
//                 dataItem.message = parseObj.searchParams.get('message');
//                 dataItem.time = '2020-02-20'
//                 dataList.unshift(dataItem)
//                 res.statusCode = 302
//                 res.setHeader('Location','/')
//                 res.end()
//                 break;
//             default:
//                 if(pathname.indexOf('/public/') === 0){
//                     fs.readFile('.'+pathname, function (err, data) {
//                         if (err) {
//                             return res.end('对不起~请求失败了呢--')
//                         }
//                         res.end(data)
//                     })
//                 }else{
//                     fs.readFile('./views/error.html', function (err, data) {
//                         if (err) {
//                             return res.end('对不起~请求失败了呢--')
//                         }
//                         res.end(data)
//                     })
//                 }
//                 break;
//         }

//         // res.writeHead(200, { 'Content-Type': 'text/plain' });
//     })
