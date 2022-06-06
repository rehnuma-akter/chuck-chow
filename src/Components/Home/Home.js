import React from 'react';
import { Carousel } from 'react-bootstrap';
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
                <p>Ensuring the meals are cooked and seasoned properly and that they are pleasing to the eye. </p>
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
                        before leaving in 1999. During my time in San Francisco, I was also a line cook at Zuni Café and the pastry chef at 
                        several other San Francisco restaurants. Having been a professional cook and baker for most of my life, I launched this 
                        davidlebovitz.com in 1999 to coincide with the release of my first book, Room for Dessert, which was updated and those 
                        recipes were incorporated into Ready for Dessert, a compendium of my all-time favorite baking recipes. The website was 
                        intended as a place to share recipes and stories. At the time, the word “blog” hadn’t been invented nor had the concept,
                        but the blog hasn’t stopped, and recently celebrated its twentieth anniversary. In 2019, I was honored by Saveur magazine with
                        their first-ever Blog of the Decade award.
                    </p>
                </div>
                <div className='chef-photo'>
                    <img src='https://i.ibb.co/SRMpvqS/welcome.jpg' alt='chef'></img>
                </div>
            </div>
        </div>
    );
};

export default Home;