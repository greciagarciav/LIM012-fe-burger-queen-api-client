const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('users.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// server.get('/users/:email', (req, res) => {
//     res.jsonp(req.body.next)
// })
server.use((req, res, next) => {
    if (req.method === 'POST' && req.url === '/auth') {
        if (req.body !== '') {
            console.log(res.body);
            res.status(200).jsonp({
                token: '12345.abcde.fdgfdg'
            })
        } else {
            res.status(400).jsonp({
                error: "Por favor, escribir email y password, ambos son necesarios."
            })
        }
    } else { next() }

})
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
}) 