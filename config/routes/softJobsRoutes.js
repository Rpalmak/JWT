import express from 'express'
import {
  getUsers,
  createUsers
} from '../../src/api/v1/controllers/softJobsController.js'
import { getReport } from '../../middlewares/softJobsMiddleware.js'
import { isLogin } from '../../middlewares/isLogin.js'
import { validateParametersUser } from '../../middlewares/validateParamsUser.js'

const router = express.Router()

router.get('/usuarios', isLogin, getUsers)
router.post('/usuarios', getReport, validateParametersUser, createUsers)

export default router
