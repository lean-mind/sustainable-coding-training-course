import express from 'express'
import http from 'http'
const port = 3000

const app = express()

app.use(express.static('src'))
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log('Listening on ' + bind)
})
