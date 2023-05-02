import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container className='d-flex justify-content-around bg-danger text-white py-2'>
            <h4>TheAmericanChef</h4>
            <div>
                <Link className='px-3 py-2 text-decoration-none text-white'>Home</Link>
                <Link className='px-3 text-decoration-none py-2 text-white'>Blogs</Link>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <p>User Profile</p>
                <Button className='ms-2 bg-secondary'>Login</Button>
            </div>

        </Container>
    );
};

export default Header;