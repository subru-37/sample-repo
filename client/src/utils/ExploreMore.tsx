import { Box, Typography } from '@mui/material'
import React, { RefObject } from 'react'
import RightArrow from './RightArrow'
type props = {
  ref1?: RefObject<HTMLDivElement>
}
const ExploreMore = (props: props ) => {
  return (
    <Box
        sx={{
          width: '90vw',
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
        ref={props.ref1}
      >
        <Typography
          component="h5"
          sx={{
            color: 'green.darker',
            marginRight: '20px',
            fontSize: '20px',
            fontWeight: '600',
          }}
        >
          Explore{' '}
          <Typography
            component="span"
            sx={{
              fontStyle: 'italic',
              color: 'green.darker',
              marginRight: '2px',
              fontSize: '20px',
              fontWeight: '600',
            }}
          >
            M
          </Typography>
          ore
        </Typography>
        <RightArrow />
      </Box>
  )
}

export default ExploreMore