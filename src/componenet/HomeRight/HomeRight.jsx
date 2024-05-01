import React from 'react'
import SearchUser from './SearchUser'
import PopularUserCard from './PopularUserCard'
import { Card } from '@mui/material'

const popularUser=[1,1,1,1,1]
function HomeRight() {
  return (
    <div className='pr-5'>
         
           <SearchUser/>

           <Card className='p-5'>

           <div className='flex justify-between py-5 items-center'>
              <p className='font-semibold opacity-70'>Suggessions for you</p>
              <p className='text-xs font-semibold opacity-95'>View All</p>
           </div>

           <div className=''>
           {popularUser.map((item)=><PopularUserCard/>)}

           </div>

           </Card>

          

    </div>
  )
}

export default HomeRight
