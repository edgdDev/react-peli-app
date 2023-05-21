import { AppBar, Link, Toolbar } from '@mui/material';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <Toolbar>

          {/* Icon */}
          <LiveTvOutlinedIcon sx={{ mr: 1 }} />
          <Link underline='none' href='/' variant='h6' color='inherit'>
            ReactTV App
          </Link>

        </Toolbar>
    </AppBar>
  )
}
