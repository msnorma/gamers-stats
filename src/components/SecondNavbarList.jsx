import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const NavBarList = [
  {
    icon: <HomeRoundedIcon fontSize="small" />,
    name: 'Home',
    route: '/gamers-dashboard'
  },{
    icon: <SportsEsportsOutlinedIcon fontSize="small"/>,
    name: 'Community',
    route: '/community'
  },
  {
    icon: <FeedOutlinedIcon fontSize="small"/>,
    name: 'News',
    route: '/news'
  },
  {
    icon: <HelpOutlineOutlinedIcon fontSize="small"/>,
    name: 'FAQ',
    route: '/faq'
  },
]

export default NavBarList;