import about from "../images/about.svg";

const About = () => {
  return (
    <>
      <div className='md:px-14 p-4 max-w-s mx-auto space-y-6'>
        <div className=' flex flex-col justify-between items-center md:flex-row  '>
          <div className="md:w-1/2">
          <img src={about} alt='' width={650}
          height={650}  />
          </div>
          <div className='md:w-2/5'>
            <h2 class='md:text-5xl text-3xl font-bold font-palanquin text-primary mb-5 leading-normal'>
              We have been improving our product
              <span className=' text-secondary'> for many years.</span>
            </h2>
            <p className=' text-tertialry text-lg mb-7 font-montserrat'>
              Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Tenetur cum veritatis
              expedita ea neque in! Exercitationem.
            </p>
            <button className='py-3 px-8 bg-secondary text-white rounded-lg font-semibold hover:bg-primary transition-all duration-300'>
              Get Started
            </button>
          </div>
        </div>

        <div className=' flex flex-col justify-between items-center md:flex-row-reverse '>
          <div className="md:w-1/2">
            <img src={about} alt='' width={650}
          height={650}  />
          </div>
          <div className='md:w-2/5'>
            <h2 class='md:text-5xl text-3xl font-bold font-palanquin text-primary mb-5 leading-relaxed'>
              You can Practice at any
              <span className=' text-secondary'> time convenient fot you.</span>
            </h2>
            <p className=' text-tertialry text-lg mb-7 font-montserrat'>
              Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Tenetur cum veritatis
              expedita ea neque in! Exercitationem.
            </p>
            <button className='py-3 px-8 bg-secondary text-white rounded-lg font-semibold hover:bg-primary transition-all duration-300'>
              Get Started
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
