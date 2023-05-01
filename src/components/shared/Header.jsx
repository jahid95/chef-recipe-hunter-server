import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <div>
            <h2 className='bg-danger'>Header</h2>
            <Button className='bg-warning'>Hello world</Button>
        </div>
    );
};

export default Header;