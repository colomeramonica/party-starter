import { Response } from 'express'
import ApiError, {APIError} from '@utils/errors/APIError'
import { FirebaseError } from '@firebase/util'

export abstract class BaseController {
  protected sendCreateUpdateErrorResponse(res: Response, error: unknown): void {
    if (error instanceof FirebaseError) {
      const firebaseError = this.handleFirebaseErrors(error)
      res.status(firebaseError.code).send(
        ApiError.format({
          code: firebaseError.code || 400,
          message: firebaseError.error,
        }),
      )
    }
    res.status(500).send(ApiError.format({ code: 500, message: 'Something went wrong!' }))
  }

  protected sendCreateUpdateSuccessResponse(data: object, code: number, res: Response): void {
    const successResponse = {
      code: code,
      message: code == 200 ? 'Created' : 'Updated',
      data: data,
    }

    res.status(200).json(successResponse)
  }

  private handleFirebaseErrors(error: FirebaseError): {
    code: number
    error: string
  } {
    return { code: 400, error: error.message }
  }

  protected sendErrorResponse(res: Response, apiError: APIError): Response {
    return res.status(apiError.code).send(ApiError.format(apiError))
  }
}