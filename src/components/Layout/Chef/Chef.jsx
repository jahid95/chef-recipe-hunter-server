import React, { useEffect, useState } from 'react';
import ChefCard from '../Features/Chef/ChefCard';
import './Chef.css'

const Chef = () => {
    const [chef, setChef] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])
    return (
        <div>
            <h2>
                Top Chef
            </h2>
            <div className='mx-4 custom-grid'>
                {
                    chef.map(ch => <ChefCard ch={ch} key={ch.id}></ChefCard>)
                }
            </div>

        </div>
    );
};

export default Chef;