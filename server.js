const express = require('express')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = process.env.PORT

app.use(express.compress({threshold: 0}));

app.prepare()
.then(() => {
  const server = express()

  server.get('/:route', (req, res) => {
    const actualPage = '/post'
    const port = PORT;
    const queryParams = { route: req.params.route, port: port } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on ${PORT}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})