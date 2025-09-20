import { useAuth } from "@/contexts/AuthContext"
import ProfileLogo from "./ProfileLogo"
import { ClassesProps } from "@/types/ClassesProps"

const ProfileInfo = ({ classes }: ClassesProps) => {
  const auth = useAuth()
  const profile = auth.authInfo?.profile

  return (
    <div
      id="profile-info-container"
      className={`flex flex-row items-center ${classes}`}
    >
      <ProfileLogo profile={profile} />
      <h4 id="profile-name" className="m-0 h-fit">
        {profile?.username}
      </h4>
    </div>
  )
}
export default ProfileInfo
