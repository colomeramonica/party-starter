import express, { Request, Response } from 'express'
import { UserController } from '@controllers/UserController'
import { CharacterController } from '@controllers/CharacterController';

const router = express.Router();

const userController = new UserController()
/** User Routes **/
router.post('/create-account/', async (req: Request, res: Response) => {
  return await userController.createUser(req, res)
})

router.post('/reset-password/', async (req: Request, res: Response) => {
  return await userController.resetPassword(req, res)
})

router.post('/login/', async (req: Request, res: Response) => {
  return await userController.login(req, res)
})

/** Character Routes **/
const characterController = new CharacterController()
router.post('/character/new', async (req: Request, res: Response) => {
  return await characterController.createCharacter(req, res)
})

export default router