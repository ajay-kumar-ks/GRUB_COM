import { Card, Grid } from '@mui/material'
import React from 'react'
import Login from './Login'
import Register from './Register'
import { Route, Routes } from 'react-router-dom'

function Authentication() {
  return (
    <div>
        <Grid container>
          <Grid className='h-screen overflow-hidden' item xs={7}>
            <img className='h-full w-full' src="https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </Grid>

          <Grid item xs={5}>

              
              <div className='px-20 flex flex-col justify-center h-full'>

                   <Card className='card p-8'>
                        <div className='flex flex-col items-center mb-5 space-y-1'>
                          <h1 className='logoo test-center'>Grub Beta vertion</h1>
                          <p className='test-center text-sm w-[70%]'>Find your fav food ,New dishes with Grub</p>
                        </div>

                          <Routes>
                             <Route path='/' element={<Login/>} />
                             <Route path='/login' element={<Login/>} />
                             <Route path='/register' element={<Register/>} />
                          </Routes> 
                      

                   </Card>
              </div>
          </Grid>
        </Grid>
    </div>
  )
}

export default Authentication
