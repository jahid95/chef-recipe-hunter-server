import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../ReciepeDetails/RecipeCard';


const ChefDetails = () => {
    const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);


    const chefDetail = useLoaderData()

    function handleFavoriteClick() {
        setIsFavorite(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      }
    


    const {chefName,chefPicture,yearsOfExperience,numberOfRecipes, likes,recipes} = chefDetail;
    console.log(chefDetail);
    return (
        <Container>
        <h4 className='text-center text-success my-3'>Chef Details</h4>
           <div className='d-flex'>
           <img style={{ height: '200px', width: '300px' }}src={chefPicture} alt="" />
            <div className='mx-3'>
            <h4>{chefName}</h4>
            
            <h6>Experience: {yearsOfExperience} Years</h6>
            <p>Number of Recipe: {numberOfRecipes}</p>
            <p>Likes: {likes}</p>
            </div>
           </div>
           <h4 className='text-center my-4'>Top Recipe</h4>
           <div className='custom-grid'>
            <div className='custom-grid'>
              {
                recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.recipeId}></RecipeCard>)
              }
            </div>         
           </div>
           <div>

           </div>
        </Container>
    );
};

export default ChefDetails;