import React from 'react'
import TankContainer from './water tank/TankContainer'
import TapContainer from './tap repair/TapContainer'
import BasinContainer from './basin and sink/BasinContainer'
import ToiletContainer from './toilet/ToiletContainer'
import BathContainer from './bath fitting/BathContainer'


const FrequentlyContainer = () => {
  return (
  <div>
  
     <div className='mx-6 mt-2 md:mr-4 '>
           <img src="./image/plumber.png"  className=" lg:mr-20 xl:mr-8 xl:w-[700px] xl:h-[500px] lg:h-[400px] lg:w-[650px] md:h-[400px] md:w-[650px] sm:w-[400px] sm:h-[300px] sm:ml-20 sm:mt-4 rounded-xl  -mt-2 "/>
             </div> 
    <div className='justify-center items-center mr-70'>
    <TankContainer/>
    <TapContainer/>
    <BasinContainer/>
    <ToiletContainer/>
    <BathContainer/>
    </div>
    </div>
  )
}

export default FrequentlyContainer