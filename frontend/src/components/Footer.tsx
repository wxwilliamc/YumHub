
const Footer = () => {
  return (
    <div className="bg-orange-500 py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <span className="text-3xl text-white font-bold tracking-tight px-4 py-2 hover:bg-white rounded-xl transition-all cursor-default hover:text-orange-500">
                YamHub
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <span className="px-4 py-2 hover:bg-white rounded-xl transition-all cursor-default hover:text-orange-500">
                    Privacy Policy
                </span>
                <span className="px-4 py-2 hover:bg-white rounded-xl transition-all cursor-default hover:text-orange-500">
                    Terms of Service
                </span>
            </span>
        </div>
    </div>
  )
}

export default Footer