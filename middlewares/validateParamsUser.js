const validateParametersUser = (req, res, next) => {
  const user = req.body
  if (!user.email || !user.password || !user.rol || !user.lenguage) {
    return res.status(400).json({
      error: 'Los campos deben estar presentes'
    })
  }
  next()
}

export { validateParametersUser }
