import express, { Request, Response } from 'express'
import { UserController } from '@controllers/UserController'

const router = express.Router();

const userController = new UserController()
/** User Routes **/
router.post('/user/new', async (req: Request, res: Response) => {
  return await userController.createUser(req, res)
})

router.post('/reset-password/', async (req: Request, res: Response) => {
  return await userController.resetPassword(req, res)
})

export default router