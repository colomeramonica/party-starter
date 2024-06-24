import express, { Request, Response } from 'express'
import UserController from './controllers/user'
const router = express.Router()

/** User Routes **/
router.post('/user/new', async (req: Request, res: Response) => {
  return await UserController.createUser(req, res)
})

router.post('/update-profile/:userId', async (req: Request, res: Response) => {
  return await UserController.updateUserProfile(req, res)
})

router.post('/reset-password/', async (req: Request, res: Response) => {
  return await UserController.resetPassword(req, res)
})

router.get('/profile/:userId', async (req: Request, res: Response) => {
  return await UserController.getUserProfile(req, res)
})