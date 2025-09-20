import { memo } from "react"
import { Profile } from "@/types/Profile"

interface Props {
  profile?: Profile
}
const ProfileLogo = ({ profile }: Props) => {
  return (
    <button id="profile-logo" className="flex justify-center items-center">
      <h3 className="margin-0">{profile?.username[0].toUpperCase()}</h3>
    </button>
  )
}
export default memo(ProfileLogo)
