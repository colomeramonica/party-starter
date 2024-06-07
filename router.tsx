import express, { Request, Response } from 'express'
const router = express.Router()

/** User Routes **/
router.post('/user/new', async (req: Request, res: Response) => {
  return await userController.createUser(req, res)
})

router.post('/update-profile/:userId', async (req: Request, res: Response) => {
  return await userController.updateUserProfile(req, res)
})

router.post('/reset-password/', async (req: Request, res: Response) => {
  return await userController.resetPassword(req, res)
})

router.get('/profile/:userId', async (req: Request, res: Response) => {
  return await userController.getUserProfile(req, res)
})