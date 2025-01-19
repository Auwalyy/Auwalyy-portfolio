import './Intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
     <div className="introContent">
      <span className="hello">Hello,</span>
      <span className="introText">I&apos;m <span className='introName'>Auwalu</span><br /> Frontend developer</span>
      <p className="introPara">Im a skilled frontend developer with experience in creating visually appealing and user friendly websites.</p>
      <Link><button className="btn"><img src={btnImg} className='btnImg' alt="" />Hire me</button></Link>
     </div>
     <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro
