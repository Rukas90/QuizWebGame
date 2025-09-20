import { AuthStatus } from "./AuthStatus"
import { Profile } from "./Profile"

export interface AuthInfo {
  status: AuthStatus
  profile?: Profile
}