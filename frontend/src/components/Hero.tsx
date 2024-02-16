import hero from '@/assets/hero.jpg'

const Hero = () => {
  return (
    <div className='px-32 py-8'>
        <img src={hero} className='w-full max-h-[500px] object-cover rounded-lg '/>
    </div>
  )
}

export default Hero