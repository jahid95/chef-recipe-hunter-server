import React, { useState } from 'react';
import { Container } from 'react-bootstrap';


const RecipeCard = ({ recipe }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [showToast, setShowToast] = useState(false);


    

    function handleFavoriteClick() {
        setIsFavorite(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
    }

    const { recipeName, ingredients, methodOfCooking, rating, recipePicture } = recipe;
    return (
        <Container className='shadow-lg mb-5'>
            <img className='text-center' style={{ width: '250px', height: '200px' }} src={recipePicture} alt="" />
            <div className=''>
                <h4>{recipeName}</h4>
                <h6>Ingredients</h6>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
                <p className='mt-2'>Method of Cooking: <br /> <small>
                    {methodOfCooking}</small></p>
                <p>Rating: {rating}</p>
                <div className='py-4'> 
                <button onClick={handleFavoriteClick} disabled={isFavorite}
        className={isFavorite ? 'disabled border-2 text-secondary px-4 py-2 rounded-2' : 'bg-danger border-0 text-white px-4 py-2 rounded-2'}>{isFavorite ? 'Added to favorites!' : 'Add to favorites'}</button> </div>  
        {showToast && (
        <div className="toast">Added to favorites!</div>
      )} 
            </div>
        </Container>
    );
};

export default RecipeCard;