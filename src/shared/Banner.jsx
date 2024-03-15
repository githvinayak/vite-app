
const Banner = ({banner,heading,subheading,btn1,btn2}) => {
  return (
      <div className='gradientBg rounded-br-[6rem] rounded-xl md:p-9 px-4 py-9'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
          <div>
            <img src={banner} alt=''  className=' lg: h-[386px]' />
          </div>
          <div className='md:w-3/5'>
            <h2 class='md:text-7xl text-4xl font-bold font-palanquin text-white mb-6 leading-relaxed'>
              {heading}
            </h2>
            <p className=" text-white text-xl mb-8 leading-normal font-montserrat">
              {subheading}
            </p>
            <div className=" space-x-5 space-y-4">
              <button className="py-3 px-8 bg-secondary text-white rounded-lg font-semibold hover:bg-primary transition-all duration-300">{btn1}</button>
              <button className="py-3 px-8 bg-secondary text-white rounded-lg font-semibold hover:bg-primary transition-all duration-300">{btn2}</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Banner;
