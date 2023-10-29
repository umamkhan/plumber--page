import React from 'react'
import CostumerSupport from './costumer support/CostumerSupport'
import FrequentlyContainer from './frequentlybooked/FrequentlyContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ServicePage from './service/ServicePage'
// import ServiceContainer from './ServiceContainer'



const PlumberService = () => {
  return (
    <div>
    <div className='flex justify-center items-center p-2'>
      <h1 className='font-bold text-3xl '>Plumber</h1>
      
    </div>
    <div className='flex justify-center items-center'>
    
    <FontAwesomeIcon className='text-2xl' icon={faStar} />
    <h1 className='text-2xl'>4.1 (4.3M bookings)</h1>
    </div>
   
   {/* <ServicePage/> */}
   
    {/* <CostumerSupport/> */}
  
  
    <div className='xl:flex  xl:flex-wrap lg:flex-wrap md:flex-wrap sm:flex-wrap  justify-between   mt-10   '>
   <div>
   <ServicePage />
   
   </div>
    
   
    
    < FrequentlyContainer />
   
    </div>
   
      <CostumerSupport/> 
    </div>
  )
}

export default PlumberService