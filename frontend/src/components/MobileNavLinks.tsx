import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

const MobileNavLinks = () => {

    const { logout } = useAuth0();

  return (
    <>
        <Link to="/user-profile" className="flex bg-white items-center font-bold hover:text-orange-500 transition-all">
            User Profile
        </Link>
        
        <Button className="flex items-center px-3 font-bold" onClick={() => logout()}>
            Logout
        </Button>
       
    </>
  )
}

export default MobileNavLinks