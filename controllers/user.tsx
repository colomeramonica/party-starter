import { Response, Request } from 'express'
import connectToDatabase from '../utils/database';

export class UserController {
  async createUser(req: Request, res: Response) {
    let connection = connectToDatabase();
    const { username, email, password } = req.body;

    try {

    }
    return res.send('User created')
  }

  async updateUserProfile(req: Request, res: Response) {
    return res.send('User profile updated')
  }

  async resetPassword(req: Request, res: Response) {
    return res.send('Password reset')
  }

  async getUserProfile(req: Request, res: Response) {
    return res.send('User profile')
  }
}