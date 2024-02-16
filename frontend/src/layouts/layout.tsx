import Header from "@/components/Header"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />

        <div className="container mx-auto flex-1 py-10">
            {children}
        </div>


    </div>
  )
}

export default Layout