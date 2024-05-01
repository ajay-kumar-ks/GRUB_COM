import { Avatar } from '@mui/material'
import React from 'react'

function StoryCircle() {
  return (
    <div>
      <div  className='flex flex-col items-center mr-4 cursor-pointer'>
             
             <Avatar sx={{width:"5rem",height:"5rem"}} src='https://cdn.pixabay.com/photo/2016/09/22/16/38/avatar-1687700_640.jpg'/>
              <p>ajay kumar</p>
     
           </div>
    </div>
  )
}

export default StoryCircle
