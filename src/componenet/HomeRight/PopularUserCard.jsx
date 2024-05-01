import { Avatar, Button, CardHeader } from '@mui/material'
import React from 'react'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

function PopularUserCard() {
  return (
    <div>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
            <Button size='small'>
                Follow
            </Button>
        }
        title="ajaykumar ks"
        subheader="@ajaykumar5454"
      />
    </div>
  )
}

export default PopularUserCard
