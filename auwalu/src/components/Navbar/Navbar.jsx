import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  return (
    <nav className="navbar">
     <img src={logo} alt="" className='logo' />
     <div className="desktopMenu">
     <Link className='desktopMenuListItem'>Home</Link>
     <Link className="desktopMenuListItem">Clients</Link> 
     <Link className="desktopMenuListItem">About</Link>
     <Link className="desktopMenuListItem">Portfolio</Link>
     </div>
     <button className="desktopMenuBtn">
      <img src={contactImg} className='desktopMenuImg' alt="" />
      contact me
     </button>
    </nav>
  )
}

export default Navbar
