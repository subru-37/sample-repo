import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Link as NavLink } from '@mui/material';
import Cart from '../utils/Cart';
import useNavbar from '../hooks/useNavbar';
import SignIcon from '../utils/SignIcon';
import { Link } from 'react-router-dom';
import logo from '../assets/SNDark Green@4x.png'
type props = {
  cartopen: boolean;
  setCartOpen: (open: boolean) => void;
};
export default function Navbar({ cartopen, setCartOpen }: props) {
  const navlinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/' },
    { name: 'Shop', link: '/products' },
    // { name: 'Blog', link: '/' },
    // { name: 'Contact Us', link: '/' },
  ];
  const [value, open, setValue, width900] = useNavbar();

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          borderBottomLeftRadius: '35px',
          borderBottomRightRadius: '35px',
          background: 'rgba(217, 217, 217, 0.25)',
          boxShadow: ' 0px 4px 48px -13px rgba(46, 84, 37, 0.54)',
          filter: ' blur(0.25px)',
          backdropFilter: 'blur(7.5px)',
          height: '75px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          left: '0px',
          flexGrow: 1,
          transition: value ? 'visibility 0.2s, opacity 0.2s linear' : '0.2s',
          visibility: value === true ? 'hidden' : 'visible',
          opacity: value ? '0' : '1',
        }}
      >
        <Toolbar
          sx={{
            width: { xs: '90vw', md: '75vw' },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding:'0px !important'
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
            onClick={() => setValue(true)}
          >
            <MenuIcon sx={{ color: 'green.darker' }} />
          </IconButton>
          {/* 3263 1102 */}
          {/*      60 */}
          <Typography component="img" src={logo} alt={''} sx={{height:'60px', width:'177px'}}>
          </Typography>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
                flexDirection: 'row',
                width: '20vw',
                justifyContent: 'space-between',
                marginRight:'100px'
              },
            }}
          >
            {navlinks.map((value, index) => {
              return (
                <Link to={value.link} style={{ textDecoration: 'none' }}>
                  <Typography
                    key={index}
                    sx={{
                      color: '#00584A',
                      fontfamily: 'Plus Jakarta Sans',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: 'normal',
                    }}
                  >
                    {value.name}
                  </Typography>
                </Link>
              );
            })}
          </Box>
          <Box>
            {/* <Button color="inherit">
              <SignIcon />
            </Button> */}
            <Button onClick={() => setCartOpen(true)}>
              <Cart />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setValue(false)}>
        <Box
          sx={{
            minWidth: '50vw',
            minHeight: '100dvh',
            background: '#F5FCE7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {navlinks.map((value, index) => {
            return (
              <Link to={value.link} style={{ textDecoration: 'none' }} onClick={()=> setValue(false)}>
                <Typography
                  sx={{
                    color: 'green.darker',
                    fontfamily: 'Plus Jakarta Sans',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    margin: '20px 0',
                  }}
                >
                  {value.name}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Drawer>
    </Box>
  );
}
