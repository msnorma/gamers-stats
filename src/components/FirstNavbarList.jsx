import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

const TopNavList = [
  {
    icon: <HomeRoundedIcon fontSize="small" />,
    name: 'Home',
    route: '/'
  },
  {
    icon: <SportsEsportsOutlinedIcon fontSize="small"/>,
    name: 'News',
    route: '/news'
  },
  {
    icon: <SportsEsportsOutlinedIcon fontSize="small"/>,
    name: 'FAQ',
    route: '/faq'
  }
  
]

export default TopNavList;