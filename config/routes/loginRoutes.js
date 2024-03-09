import express from 'express'
import { loginUser } from '../../src/api/v1/controllers/loginController.js'
import { validparameters } from '../../middlewares/validateParamsLogin.js'
const router = express.Router()

router.post('/login', validparameters, loginUser)

export default router
