import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MiddlePart from '../componenet/MiddlePart/MiddlePart';
import Reels from '../componenet/Reels/Reels';
import CreateReelsForm from '../componenet/Reels/CreateReelsForm';
import Profile from '../Profile/Profile';
import HomeRight from '../componenet/HomeRight/HomeRight';
import Sidebar from '../componenet/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../Redux/Auth/auth.action';

const HomePage = ()=> {
  const dispatch=useDispatch();
    const location=useLocation();
    const jwt= localStorage.getItem("jwt");
    const {auth}=useSelector(store=>store);

    useEffect(()=>{
      dispatch(getProfileAction(jwt))
    },[])
  return (
    <div className='px-20'>

        <Grid container spacing={0}>

           <Grid item xs={0} lg={3}>
               
               <div className='sticky top-0'>
                     
                     <Sidebar/>
               </div>
           </Grid>

           <Grid lg={location.pathname==="/"?6:9} item className='px-5 flex justify-center' xs={12}>
                 
                 <Routes>
                    <Route path="/" element={<MiddlePart/>}></Route>
                    <Route path="/reels" element={<Reels/>}></Route>
                    <Route path="/create-reels" element={<CreateReelsForm/>}></Route>
                    <Route path="/profile/:id" element={<Profile />}></Route>
                 </Routes>

           </Grid>

          {location.pathname==="/" && <Grid item lg={3} className='relative'>

                <div className='sticky top-0 w-full'>
                     
                     <HomeRight />

                </div>
           </Grid>}

        </Grid>
      
    </div>
  )
}

export default HomePage











// import { Grid } from '@mui/material';
// import React, { useEffect } from 'react';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import MiddlePart from '../componenet/MiddlePart/MiddlePart';
// import Reels from '../componenet/Reels/Reels';
// import CreateReelsForm from '../componenet/Reels/CreateReelsForm';
// import Profile from '../Profile/Profile';
// import HomeRight from '../componenet/HomeRight/HomeRight';
// import Sidebar from '../componenet/Sidebar/Sidebar';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProfileAction } from '../Redux/Auth/auth.action';

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const jwt = localStorage.getItem('jwt');
//   const { auth } = useSelector((store) => store);

//   useEffect(() => {
//     if (jwt) {
//       dispatch(getProfileAction(jwt));
//     }
//   }, [dispatch, jwt]);

//   return (
//     <div className='px-20'>
//       <Grid container spacing={0}>
//         <Grid item xs={0} lg={3}>
//           <div className='sticky top-0'>
//             <Sidebar />
//           </div>
//         </Grid>

//         <Grid lg={location.pathname === '/' ? 6 : 9} item className='px-5 flex justify-center' xs={12}>
//           <Routes>
//             <Route path="/" element={<MiddlePart />} />
//             <Route path="/reels" element={<Reels />} />
//             <Route path="/create-reels" element={<CreateReelsForm />} />
//             <Route path="/profile/:id" element={<Profile />} />
//           </Routes>
//         </Grid>

//         {location.pathname === '/' && (
//           <Grid item lg={3} className='relative'>
//             <div className='sticky top-0 w-full'>
//               <HomeRight />
//             </div>
//           </Grid>
//         )}
//       </Grid>
//     </div>
//   );
// };

// export default HomePage;

