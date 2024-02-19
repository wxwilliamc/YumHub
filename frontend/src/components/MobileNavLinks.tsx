import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

const MobileNavLinks = () => {

    const { logout, user } = useAuth0();

  return (
    <>
        <Link to="/user-profile" className="flex bg-white items-center font-bold hover:text-orange-500 transition-all">
            User Profile | <span className="ml-2 text-orange-500">{user?.email}</span>
        </Link>
        
        <Button className="flex items-center px-3 font-bold" onClick={() => logout()}>
            Logout
        </Button>
       
    </>
  )
}

export default MobileNavLinks