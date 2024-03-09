const validparameters = (req, res, next) => {
  const user = req.body
  if (!user.email || !user.password) {
    return res.status(400).json({ error: 'Debe completar los campos' })
  }
  next()
}

export { validparameters }
