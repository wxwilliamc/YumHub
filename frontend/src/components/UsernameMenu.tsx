import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react"
import { CircleUserRound } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const UsernameMenu = () => {

    const { user, logout } = useAuth0();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-4 py-2 font-bold hover:text-orange-500 gap-2 transition-all hover:bg-black rounded-lg">
                <CircleUserRound className="hover:text-orange-500" />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:min-w-[200px]">
                <DropdownMenuItem className="">
                    <Link to="/user-profile" className="font-bold hover:text-orange-500">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button className="flex flex-1 font-bold bg-orange-500" onClick={() => logout()}>
                        Logout
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu