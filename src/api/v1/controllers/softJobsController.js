import { createUser, findUserByEmail } from '../models/softJobsModel.js'
import { findError } from '../utils/utils.js'

const getUsers = async (req, res) => {
  try {
    const user = await findUserByEmail(req.user)
    res.status(200).json([user])
  } catch (error) {
    const errorFound = findError(error.code)
    return errorFound.length
      ? res.status(errorFound[0].status).json({ error: errorFound[0].message })
      : res.status(500).json({ error: 'Error al mostrar los usuarios' })
  }
}

const createUsers = async (req, res) => {
  try {
    const user = req.body
    const newUser = await createUser(user)
    res.status(201).json({ user: newUser })
  } catch (error) {
    const errorFound = findError(error.code)
    return errorFound.length
      ? res.status(errorFound[0].status).json({ error: errorFound[0].message })
      : res.status(500).json({ error: 'Error al crear el usuario' })
  }
}

export { getUsers, createUsers }
