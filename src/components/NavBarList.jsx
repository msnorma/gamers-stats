import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';

const NavBarList = [
  {
    icon: <HomeRoundedIcon />,
    name: 'Home',
    route: '/'
  },{
    icon: <SportsEsportsRoundedIcon/>,
    name: 'Community',
    route: '/community'
  },
  {
    icon: <ArticleRoundedIcon/>,
    name: 'News',
    route: '/news'
  },
  {
    icon: <QuizRoundedIcon/>,
    name: 'FAQ',
    route: '/faq'
  },
]

export default NavBarList;