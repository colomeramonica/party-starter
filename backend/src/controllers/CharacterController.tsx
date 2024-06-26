import { Response, Request } from 'express'
import { BaseController } from '@controllers/BaseController'
import { CharacterRepository } from '@/repositories/CharacterRepository';

const characterRepository = new CharacterRepository()

export class CharacterController extends BaseController {
  constructor() {
    super()
  }

  public async createCharacter(req: Request, res: Response) {
    const {userId, name, summary, characterClass, race, images, hasParty} = req.body;
     try {
      const character = await characterRepository.createCharacter(
        userId, name, summary, characterClass, race, hasParty
      )

      const characterData = { character }
      this.sendCreateUpdateSuccessResponse(characterData, 200, res)
     } catch (error) {
      this.sendCreateUpdateErrorResponse(res, error)
     }
  }
}