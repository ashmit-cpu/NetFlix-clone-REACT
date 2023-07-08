import React, { useContext, useState } from 'react'
import "../../styles/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';
import { AuthContext, FirebaseContext } from '../../Store/FirebaseContext';
import { useNavigate } from 'react-router-dom';



function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }


  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);

    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);


  const displayUsername = user ? user.displayName || "Username" : "Username";
  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <img className='avatar' onClick={toggleDropdown} src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      <div className={isOpen ? 'dropdown' : 'dropdown active'}>
        <div className="dropdown-content">
          <a href="#/">{displayUsername}</a>
          <a href="#/" onClick={() => { firebase.auth().signOut(); navigate("/") }}>Logout</a>
        </div>

      </div>

      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      {/* <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" /> */}

      <div>
        <a href="#">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='searchicon' />
        </a>
        <a href="#"><FontAwesomeIcon icon={faBell} className='bellicon' /></a>

      </div>
    </div>
  )
}

export default NavBar