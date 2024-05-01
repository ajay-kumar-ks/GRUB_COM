import React from 'react'
import { navigationMenu } from './SideBarNavigation'
import { Avatar, Button, Card, Divider, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

function Sidebar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {auth}=useSelector(store=>store);
  const navigate=useNavigate();
  const hanldeNavigate=(item)=>{
    if(item.title==="Profile"){
      navigate(`/profile/${auth.user?.id}`)
    }else if(item.title==="Home"){
      navigate(`/`)
    }else
      {
      navigate(`/${item.title}`)
    }
  }



  return (
    <Card className='card h-screen flex flex-col justify-between py-5'>
      
      <div className='space-y-8 pl-5'>

        <div className=''>
                
                <span className='logo font-bold text-xl'>Grub Beta</span>


        </div>

        <div className='space-y-8'>
           {navigationMenu.map((item)=> <div onClick={()=>hanldeNavigate(item)} className='cursor-pointer flex space-x-3 items-center'>
            {item.icon}
            <p className='text-xl'>{item.title}</p>
            </div>)}
        </div>
      </div>

        <div>
          <Divider/>
            <div className='pl-5 flex items-center justify-between pt-5'>

              <div className='flex items-center space-x-3'>

                  <Avatar src='https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_640.png'/>
                      <div>
                        <p className='fomt-bold'>{auth.user?.firstname+" "+auth.user?.lastname}</p>
                        <p className='opacity-70'>@{auth.user?.firstname+"_"+auth.user?.lastname}</p>
                      </div>

              </div>
                   
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <MoreVertIcon/>
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
              
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                          </div>
        </div>
    </Card> 
  )
}

export default Sidebar
