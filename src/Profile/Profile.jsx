import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../componenet/Post/PostCard";
import UserReelCard from "../componenet/Reels/UserReelCard";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";
import { getAllPostAction, getUsersPostAction } from "../Redux/post/post.action";

const tabs=[
  {
    value:"post",
    name:"Post"
  },
  {
    value:"reels",
    name:"Reels"
  },
  {
    value:"saved",
    name:"Saved"
  },
  {
    value:"repost",
    name:"RePost"
  }
];

const posts=[1,1,1,1,1];
const reels=[1,1,1,1,1,1];
const savedpost=[1,1,1,1,1];

function Profile() {
  const dispatch=useDispatch();
  const {post}=useSelector(store=>store);

  

  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const handleOpenProfileModal = ()=> setOpen(true);
  const handleClose =()=> setOpen(false);

  const [value, setValue] = React.useState('post');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {auth}=useSelector(store=>store);
  console.log("auth --------",auth);

  useEffect(()=>{
    dispatch(getUsersPostAction(auth.user.id));
  },[post.newComment,post.userposts])

  console.log("commet --",post.comment);
  console.log("post ----",post.userpost);

  return (
    <Card className="py-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://cdn.pixabay.com/photo/2024/01/08/15/54/defile-8495836_640.jpg"
            alt=""
          />
        </div>
            
            <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">

              <Avatar className="transform -translate-y-24" sx={{width:"10rem",height:"10rem"}} src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"/>

                {true?<Button onClick={handleOpenProfileModal} sx={{borderRadius:"20px"}} variant="outlined">Edit Profile</Button>:<Button variant="outlined">Follow</Button>}
                 
            </div>

            <div className="p-5">

              <div>
                 <h1 className="py-1 font-bold text-xl">{auth.user?.firstname+" "+auth.user?.lastname}</h1>
                 <p>@{auth.user?.firstname+"_"+auth.user?.lastname}</p>
              </div>

              <div className="flex gap-5 items-center py-3">

                <span>2 post</span>
                <span>2.5M followers</span>
                <span>5 followings</span>

              </div>

                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  </p>
                </div>

            </div>

            <section>
            <Box sx={{ width: '100%',borderBottom:1,borderColor:"divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="wrapped label tabs example"
                >
                 
                  {tabs.map((item)=> <Tab value={item.value} label={item.name} wrapped/>)}
                </Tabs>
           </Box>

           <div className="flex justify-center">

              {value==="post"? (<div className="space-y-5 w-[70%] my-10">

                  {post.userposts.map((item)=><div className="border border-slate-500">
                                   <PostCard item={item}/>

                  </div>)}

              </div>
              ):value==="reels"?<div className="flex justify-center flex-wrap gap-2 my-10">

               {reels.map((item)=><UserReelCard/>)}


              </div>: value==="saved"?(<div className="space-y-5 w-[70%] my-10">

                 <div className="border border-slate-500">
                {post.userposts.map((item) =><PostCard item={item}/>)}
                 </div>
                 
                 </div>
                 ):<div>
                  Repost
                 </div>
              }

           </div>
            </section>
      </div>

      <section>
        <ProfileModal open={open} handleClose={handleClose}/>
      </section>
    </Card>
  );
}

export default Profile;
