import landingImage from '@/assets/landing.jpg'
import stores from '@/assets/apple_android.svg'

const Homepage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-xl drop-shadow-lg py-8 flex flex-col gap-5 text-center -mt-40">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Tuck into a takeaway today
            </h1>
            <span className="text-xl">
                Food is just a click away!
            </span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} className='rounded-xl drop-shadow-lg'/>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold text-3xl tracking-tighter'>
                    Order takeaway even faster!
                </span>
                <span>
                    Download the YumHub App for faster ordering and personalized recommendations.
                </span>
                <img src={stores} className='w-[150px] py-2'/>
            </div>
        </div>
    </div>
  )
}

export default Homepage