const getReport = async (req, res, next) => {
  const params = req.body
  const url = req.url
  console.log(
    `Se ha recibido una consulta de la ruta: ${url}
    por el usuario:`,
    params.email
  )
  next()
}

export { getReport }
