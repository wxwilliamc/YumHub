import hero from '@/assets/hero.jpg'

const Hero = () => {
  return (
    <div className='px-8 py-8'>
        <img src={hero} className='w-full max-h-[600px] object-cover rounded-md '/>
    </div>
  )
}

export default Hero