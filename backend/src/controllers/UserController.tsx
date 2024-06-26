import { Response, Request } from 'express'
import { BaseController } from '@controllers/BaseController'
import { firebaseApp } from '@/services/firebaseConfig'
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from 'firebase/auth'

export class UserController extends BaseController {
  constructor() {
    super()
  }

  public async createUser(req: Request, res: Response) {
    const auth = getAuth(firebaseApp)
    const { username, email, password } = req.body

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const { user } = userCredential
      const { uid } = user

      const userData = { username, uid }

      sendEmailVerification(user)

      this.sendCreateUpdateSuccessResponse(userData, 200, res)
    } catch (error) {
    this.sendCreateUpdateErrorResponse(res, error)
    }
  }

  public async login(req: Request, res: Response) {
    const auth = getAuth(firebaseApp)
    const { email, password } = req.body

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const { user } = userCredential
      const { uid } = user

      const userData = { uid }

      this.sendCreateUpdateSuccessResponse(userData, 200, res)
    } catch (error) {
      this.sendCreateUpdateErrorResponse(res, error)
    }
  }

  public async resetPassword(req: Request, res: Response) {
    const auth = getAuth(firebaseApp)
    const { email } = req.body

    try {
      sendPasswordResetEmail(auth, email)
    } catch (error) {
      res.json(error)
    }
  }
}