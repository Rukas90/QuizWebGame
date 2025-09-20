import { LoginRequest } from "@/types/LoginRequest"
import { RegisterRequest } from "@/types/RegisterRequest"
import { GET, IDENTITY_API, MAKE_REQUEST, POST } from "./Requests"
import { Response } from "./Response"

export const RefreshCsrfToken = async () => {
    const response = await MAKE_REQUEST(GET, IDENTITY_API, '/v1/csrf/token')

    if (response.success) {
        window.csrfToken = response.data.csrfToken
    }
    else {
        console.error(response.error)
    }
    return response
}
export const GetAuthInfo = async (includeProfile: boolean) : Promise<Response> => {
    return await MAKE_REQUEST(GET, IDENTITY_API, '/v1/auth/info', null, { params: { includeProfile } })
}
export const Login = async (request: LoginRequest) : Promise<Response> => {
    return await MAKE_REQUEST(POST, IDENTITY_API, '/v1/auth/login', request)
}
export const Register = async (request: RegisterRequest) : Promise<Response> => {
    return await MAKE_REQUEST(POST, IDENTITY_API, '/v1/auth/register', request)
}
export const Refresh = async () : Promise<Response> => {
    return await MAKE_REQUEST(POST, IDENTITY_API, '/v1/auth/session/refresh')
}
export const Logout = async () : Promise<Response> => {
    return await MAKE_REQUEST(POST, IDENTITY_API, '/v1/auth/logout')
} 