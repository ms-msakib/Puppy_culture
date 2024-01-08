import React from 'react';
import { Link } from 'react-router-dom';
import './bluenavbar.styles.css';


const BlueNavBar = () => {
  return (

    <nav>
      <section className='header'>
        <div className='header-left'>
          <div className='header-item'>
            <a className='nav-item-links' href="https://madcapuniversity.com/">MADCAP UNIVERSITY</a>
          </div>
          <div className='header-item'>
            <a className='nav-item-links' href="https://shoppuppyculture.com/">PUPPY CULTURE</a>
          </div>
          <div className='header-item'>
            <a className='nav-item-links' href="https://www.madcapradio.com.">MADCAP RADIO</a>
          </div>
        </div>
        <div className='header-right'>
        <div className='nav-item-icons'> <Link to="/login">Login</Link> </div>
          <div className='nav-item-icons'> <Link to="/login">Login</Link></div>
        </div>
      </section>
      {/* <div className='website_links'>
        <div className="test1">
          <div className='madcap_link'>
            <a className='nav-item-text' href="https://madcapuniversity.com/">MADCAP UNIVERSITY</a>
          </div>
          <div className='puppy_link'>

            <a href="https://shoppuppyculture.com/">PUPPY CULTURE</a>
          </div>
          <div className='radio_link'>
            <a href="https://www.madcapradio.com.">MADCAP RADIO </a>
          </div>
        </div>
      </div>
      <div className='header_icons'>
        <div className="test2">
          <div className='icon1'> <br /> <Link to="/login">Login</Link> </div>
          <div className='icon2'> <br /> <Link to="/login">Login</Link></div>
        </div>
      </div> */}
    </nav>

  )
}

export default BlueNavBar
