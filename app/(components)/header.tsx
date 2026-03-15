import { LuvertLogo } from '../(assets)/logo/LuvertLogo'
import JoinButton from "./join-button"

const header = () => {
  return (
    <header className="flex justify-between items-center p-6 md:p-8">
      <LuvertLogo animated />
      <div className="flex gap-2">
        <JoinButton type="header" />
      </div>
    </header>
  )
}

export default header
