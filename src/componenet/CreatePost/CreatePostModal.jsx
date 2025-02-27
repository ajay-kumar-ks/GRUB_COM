import { Avatar, Backdrop, Box, Button, CircularProgress, IconButton, Modal } from '@mui/material'
import { useFormik } from 'formik';
import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { uploadToCloudinary } from '../../utils/uploadToCloudniry';
import { useDispatch } from 'react-redux';
import { createCommentAction, createPostAction } from '../../Redux/post/post.action';



function CreatePostModal({handleClose, open}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius:".6rem",
        outline:"none"
      };

      
      const [selectedImage,setSelectedImage]=useState();
      const [selectedVideo,setSelectedVideo]=useState();
      const [isLoading, setLoading]=useState(false);
      const dispatch=useDispatch();

      const handleSelectImage= async(event)=>{
           setLoading(true);
           const imageUrl = await uploadToCloudinary(event.target.files[0],"image")
           setSelectedImage(imageUrl);
           setLoading(false);
           formik.setFieldValue("image", imageUrl);
      };
      const handleSelectVideo= async (event)=>{
        setLoading(true);
           const videoUrl = await uploadToCloudinary(event.target.files[0],"video")
           setSelectedImage(videoUrl);
           setLoading(false);
           formik.setFieldValue("video", videoUrl);

      };

    const formik = useFormik({
        initialValues:{
            caption:"",
            image:"",
            video:""
        },
        onSubmit:(values)=>{
            console.log("formik value ",values);
            dispatch(createPostAction(values));
            handleClose();
        }
    });

  
  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            <form onSubmit={formik.handleSubmit}>

                <div>
                    <div className='flex space-x-4 items-center'>

                         <Avatar/>
                           <div>
                                <p className='font-bold text-lg'>code with ajay</p>
                                <p className='text-sm'>@codewithajay</p>
                           </div>

                    </div>
                       <textarea className='outline-none w-full mt-5 p-5 bg-transparent border border-[#3b4054] rounded-sm' 
                       placeholder='Write caption...' name="caption" id="" type="text" rows="4"
                        value={formik.values.caption} 
                        onChange={formik.handleChange}
                        ></textarea>

                        <div className='flex space-x-5 items-center mt-5'>
                            <div>
                            <input type="file" accept='image/*' onChange={handleSelectImage} style={{display:"none"}} 
                            id='image-input' />
                            <label htmlFor="image-input">
                                <IconButton color='primary' component="span">
                                    <ImageIcon/>
                                </IconButton>
                            </label>

                             <span>Image</span>
                             </div>

                             <div>
                            <input type="file" accept='video/*' onChange={handleSelectVideo} style={{display:"none"}} 
                            id='video-input' />
                            <label htmlFor="video-input">
                                <IconButton color='primary'>
                                    <VideoCallIcon/>
                                </IconButton>
                            </label>

                             <span>Video</span>
                             </div>
                        </div>

                        {selectedImage && <div>
                            <img className='h-[10rem]' src={selectedImage} alt="" />
                        </div>}

                        <div className='flex w-full justify-end'>
                            <Button variant='contained' type='submit'  sx={{borderRadius:"1.5rem"}}>Post</Button>
                        </div>
                </div>

            </form>

            <Backdrop
                   sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                   open={isLoading}
                   onClick={handleClose}
                 >
                   <CircularProgress color="inherit" />
                 </Backdrop>
       
        </Box>
      </Modal>

    </div>
  )
}

export default CreatePostModal
