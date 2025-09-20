import { GAME_API, GET, IDENTITY_API, MAKE_REQUEST, POST } from "./Requests"
import { Response } from "./Response"

export const GetProfile = async () : Promise<Response> => {
    return await MAKE_REQUEST(GET, IDENTITY_API, '/v1/users/profile')
} 
export const UpdateScore = async (amount: number) : Promise<Response> => {
    return await MAKE_REQUEST(POST, GAME_API, '/v1/profile/score', { 'amount': amount })
}