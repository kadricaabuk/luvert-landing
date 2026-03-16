import { LuvertLogo } from '../(assets)/logo/LuvertLogo'
import JoinButton from "./join-button"

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto px-6 py-5 md:py-8 flex items-center justify-between">

      <LuvertLogo animated />

      <div className="flex items-center gap-2">
        <JoinButton type="header" />
      </div>

    </header>
  )
}

export default Header