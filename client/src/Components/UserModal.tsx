import React from 'react';
import { Box, Typography, Button, Drawer } from '@mui/material';

type ModalProps = {
  close: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  yesFunction: any;
  noFunction: any;
};
const UserModal = ({ close, onClose, yesFunction, noFunction }: ModalProps) => {
  return (
    <Drawer
      open={close}
      onClose={() => onClose(false)}
      anchor='left'
    >
      <Box
        sx={{
          backgroundColor: '#FEFAE0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '500px',
          minWidth: { xs: '90vw', sm: '500px' },
          padding: '40px',
          position:'fixed',
          left:'50%',
          translate:'-50% -50%',
          top: '50%',
          borderRadius:'10px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height:'150px',
            flexDirection:'column'
          }}
        >
          <Typography
            component={'h3'}
            sx={{
              fontSize: '2rem',
              color: 'green.darker',
            }}
          >
            Are you already an user?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width:'100%'
            }}
          >
            <Button
              sx={{
                backgroundColor: 'green.darker',
                minHeight: '40px',
                minWidth: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color:'#FEFAE0',
                '&:hover': {
                  backgroundColor: 'green.darker',
                },
              }}
              onClick={() => {
                onClose(false)
                yesFunction('/shipping')
              }}
            >
              Yes
            </Button>
            <Button
              sx={{
                backgroundColor: 'green.darker',
                minHeight: '40px',
                minWidth: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color:'#FEFAE0',
                '&:hover': {
                  backgroundColor: 'green.darker',
                },
              }}
              onClick={() => {
                onClose(false)
                noFunction('/checkout')
              }}
            >
              No
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default UserModal;
