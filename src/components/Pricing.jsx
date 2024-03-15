import {useState} from 'react'
import { packages } from '../constants';

const Pricing = () => {
    const [isYearly , setIsYearly] = useState(false);
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto py-10'>
        <div className='text-center'>
        <h2 className='md:text-5xl text-3xl font-palanquin font-extrabold text-primary mb-2'>Here are all our plans</h2>
        <p className=' text-tertialry md:w-1/3 mx-auto px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptate voluptas dignissimos illum fugiat, earum magni.</p>
        <div className='mt-16'>
        <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
            <span className='mr-8 text-2xl font-montserrat font-semibold'>Mothly</span>
            <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
            <div className={` w-6 h-6 rounded-full transition duration-200 ease-in-out ${ isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>    
            </div>
            <span className='ml-8 text-2xl font-montserrat font-semibold'>Yearly</span>
        </label>
        <input type="checkbox" id="toggle" className='hidden'  checked={isYearly} onChange={()=>{
           setIsYearly(!isYearly);
        }}/>
        </div>
        </div>
        <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
        {
            packages.map(({name,monthlyPrice,yearlyPrice,description})=>(
                <div key={name} className=' border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
                <h3 className='text-3xl text-center font-bold text-primary'>{name}</h3> 
                <p className=' text-tertialry text-center my-8'> {description}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Pricing;