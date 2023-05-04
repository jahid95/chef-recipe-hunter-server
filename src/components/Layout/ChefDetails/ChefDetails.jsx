import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ReciepeDetails from '../ReciepeDetails/ReciepeDetails';

const ChefDetails = () => {
    const chefDetail = useLoaderData()
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
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px', alignItems: 'center'}}>
            
            <div>
               <div className='bg-bg-secondary p-4 border-2 m-4' style={{boxShadow:' 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}}>
                <img className='text-center' style={{width: '250px', height: '200px'}} src={recipes[1].recipePicture} alt="" />
            <div className=''>
                <h4>{recipes[1].recipeName}</h4>
                <h6>Ingredients</h6>
                <li>{recipes[0].ingredients[0]}</li>
                <li>{recipes[0].ingredients[1]}</li>
                <li>{recipes[0].ingredients[2]}</li>
                <li>{recipes[0].ingredients[3]}</li>
                <li>{recipes[0].ingredients[4]}</li>
                <p className='mt-2'>Method of Cooking: <br /> <small>
                {recipes[0].methodOfCooking}</small></p>
                <p>Rating: {recipes[0].rating}</p>
                <button className='text-center bg-danger text-white border-0 px-4 py-2 rounded-2'>Favorite</button>               
            </div>
               </div>
            </div>

            <div>
               <div className='bg-bg-secondary  p-4 border-2 m-4' style={{boxShadow:' 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}}>
                <img className='text-center' style={{width: '250px', height: '200px'}} src={recipes[0].recipePicture} alt="" />
            <div className=''>
                <h4>{recipes[0].recipeName}</h4>
                <h6>Ingredients</h6>
                <li>{recipes[0].ingredients[0]}</li>
                <li>{recipes[0].ingredients[1]}</li>
                <li>{recipes[0].ingredients[2]}</li>
                <li>{recipes[0].ingredients[3]}</li>
                <li>{recipes[0].ingredients[4]}</li>
                <p className='mt-2'>Method of Cooking: <br /> <small>
                {recipes[0].methodOfCooking}</small></p>
                <p>Rating: {recipes[0].rating}</p>
                <button className='text-center bg-danger text-white border-0 px-4 py-2 rounded-2'>Favorite</button>               
            </div>
               </div>
            </div>

            <div>
               <div className='bg-bg-secondary  p-4 border-2 m-4' style={{boxShadow:' 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}}>
                <img className='text-center' style={{width: '250px', height: '200px'}} src={recipes[2].recipePicture} alt="" />
            <div className=''>
                <h4>{recipes[2].recipeName}</h4>
                <h6>Ingredients</h6>
                <li>{recipes[0].ingredients[0]}</li>
                <li>{recipes[0].ingredients[1]}</li>
                <li>{recipes[0].ingredients[2]}</li>
                <li>{recipes[0].ingredients[3]}</li>
                <li>{recipes[0].ingredients[4]}</li>
                <p className='mt-2'>Method of Cooking: <br /> <small>
                {recipes[0].methodOfCooking}</small></p>
                <p>Rating: {recipes[0].rating}</p>
                <button className='text-center bg-danger text-white border-0 px-4 py-2 rounded-2'>Favorite</button>               
            </div>
               </div>
            </div>


           </div>
           <div>

           </div>
        </Container>
    );
};

export default ChefDetails;