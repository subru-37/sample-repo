import { Box, Typography } from '@mui/material'
import React from 'react'
import RightArrow from './RightArrow'

const ExploreMore = () => {
  return (
    <Box
        sx={{
          width: '90vw',
          marginTop: '20px',
          display: { sm: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
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