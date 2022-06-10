import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <Carousel className='banner'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/jgCBBkd/slide3.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>A home chef bringing the world to your plate</h3>
                <p>A trained professional cook who is proficient in all aspects of food preparation, often focusing on a particular cuisine.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/V97Wc3d/slide2.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Best food for your taste</h3>
                <p>Ensuring the meals are cooked and seasoned properly and are pleasing to the eye. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/MPdLd7Y/slide1.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>There is no love more sincere than the love of food</h3>
                <p>Responsible for preparing and cooking food and providing leadership for the kitchen staff.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            {/* welcome section */}
            <div className='about-the-chef'>
                <div className='chef-info'>
                    <h2 className='welcome-text'>Welcome</h2>
                    <p>
                        I began working in restaurants at the age of sixteen, washing dishes in a steakhouse at our local strip mall, 
                        then somehow, ending up at Chez Panisse in Berkeley, California, working with Alice Waters and co-owner, Executive
                        Pastry Chef Lindsey Shere, who I consider my pastry mentor. I spent thirteen years in the kitchens at Chez Panisse 
                        before pursuing my goals. I was a highly skilled person who was in charge of food production in a commercial kitchen. My duties were very diverse.
                        Apart from managing the kitchen and overseeing its staff, I had to plan menus, work out the costing of each dish, 
                        and manage inventories and raw material procurement. Now I am a full time home chef, ready to share my food and experiences with 
                        as many people as I can reach.
                    </p>
                </div>
                <div className='chef-photo'>
                    <img src='https://i.ibb.co/SRMpvqS/welcome.jpg' alt='chef'></img>
                </div>
            </div>
            {/* services section */}
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;