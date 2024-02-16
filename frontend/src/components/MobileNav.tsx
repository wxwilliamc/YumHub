import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLinks from "./MobileNavLinks"
import { Menu } from "lucide-react"
  
const MobileNav = () => {

    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
        <SheetTrigger className="rounded-full hover:bg-black p-2 transition-all">
            <Menu className="text-orange-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-2">
            <SheetHeader className="py-6">
                <SheetTitle className="text-center">
                    {isAuthenticated ? <p className="flex items-center font-bold gap-2 ">
                        Welcome back <span className="text-orange-500">{user?.name}</span>  </p> : (
                        <span>Welcome to YumHub</span>
                    )}
                </SheetTitle>
                <Separator />
            </SheetHeader>
            <SheetDescription className="flex flex-col gap-4">
                {isAuthenticated ? <MobileNavLinks /> : (
                <Button className="flex-1 font-bold bg-orange-500" onClick={() => loginWithRedirect()}>
                    Sign In
                </Button>
                )}
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav