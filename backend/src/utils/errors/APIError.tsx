export interface APIError {
  code: number,
  message: string
  codeAsString?: string
}

export interface APIErrorResponse extends Omit<APIError, 'codeAsString'> {
  error: string | undefined
}

export default class ApiError {
  public static format(error: APIError): APIErrorResponse {
    return {
      ...{
        message: error.message,
        code: error.code,
        error: error.codeAsString,
      },
    }
  }
}