import Navbar from '../components/navbar/Navbar'
import './home.scss'
import { AcUnit} from '@mui/icons-material'
import Featured from '../components/featured/featured'
import List from '../components/list/List'



const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home
