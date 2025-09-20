import AbsoluteContainer from "./AbsoluteContainer"
import LogoutButton from "./LogoutButton"
import ProfileInfo from "./ProfileInfo"

const UserHeader = () => {
  return (
    <AbsoluteContainer id="user-header-container" classes="top-0 left-0 w-100">
      <div className="flex flex-row justify-between">
        <ProfileInfo />
        <LogoutButton />
      </div>
    </AbsoluteContainer>
  )
}
export default UserHeader
