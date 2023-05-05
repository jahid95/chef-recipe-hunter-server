import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import companyLogo from '../../assets/images/logo.png';
import profileLogo from '../../assets/images/user-profile.png';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(error => console.log(error))
  }
    return (
       <Container>
         <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img src={companyLogo} alt="Company Logo" className="company-logo w-25" style={{ height: '50px', width: '50px' }} />
            American Chef
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/" active>Home</Nav.Link>
              <Nav.Link href="/blogs" active>Blogs</Nav.Link>
              
            </Nav>
            {
              user && <img src={user.photoURL} alt="Profile Logo" className="profile-logo m-2" style={{height: '40px', width: '40px' }} />
            }
           {
            user?  <button onClick={handleLogOut} className="btn btn-primary login-logout-btn">Logout</button>:
            <Link to='/login'><button className="btn btn-primary login-logout-btn">Login</button></Link>
           }
          </Navbar.Collapse>
        </Navbar>
       </Container>
      );
};

export default Header;