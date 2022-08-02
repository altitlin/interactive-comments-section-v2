module.exports = (_, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://localhost:4242')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  next()
}
