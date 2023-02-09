import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const NavBarList = [
  {
    icon: <HomeRoundedIcon fontSize="small" />,
    name: 'Home',
    route: '/dashboard'
  },{
    icon: <SportsEsportsOutlinedIcon fontSize="small"/>,
    name: 'Community',
    route: '/community'
  },
  {
    icon: <HelpOutlineOutlinedIcon fontSize="small"/>,
    name: 'FAQ',
    route: '/faq'
  },
]

export default NavBarList;