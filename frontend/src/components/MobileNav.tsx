import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
  
const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger className="rounded-full hover:bg-black p-2 transition-all">
            <Menu className="text-orange-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetHeader className="py-6">
                <SheetTitle className="text-center">
                    <span>Welcome to YumHub</span>
                </SheetTitle>
                <Separator />
            </SheetHeader>
            <SheetDescription className="flex">
                <Button className="flex-1 font-bold bg-orange-500">
                    Sign In
                </Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav