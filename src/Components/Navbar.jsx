import React, {useState} from 'react';
import './Styles/Navbar.css';
import { Link } from 'react-scroll'; 
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <div className='navbar'>
        <h1 className='logo'>
          <span>M</span>itch
        </h1>

        <div className='menuList'>
        
          <Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='navbarLink'
          >
            Home
          </Link>
          <Link
            activeClass='active'
            to='About'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='navbarLink'
          >
            About
          </Link>
          <Link
          activeClass='active'
          to='works'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className='navbarLink'
          >
            Projects
          </Link>
          <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className='navbarLink'
          >
            Contact
          </Link>
          </div>
          
          <div className='mobMenu' onClick={()=>setShowMenu(!showMenu)}>
          <IoMenu className='ioMenu'/>
          </div>

          <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
          <Link
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='navbarMenu' onClick={()=>setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass='active'
            to='About'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='navbarMenu' onClick={()=>setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass='active'
            to='works'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='navbarMenu' onClick={()=>setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='navbarMenu' onClick={()=>setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      
      </div>
    </header>
  );
};

export default Navbar;
