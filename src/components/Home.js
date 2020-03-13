import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { MDBIcon } from "mdbreact";
import Travel from './images/NatureBackground.mp4';
import Logo from './images/wanderlust.svg';
import Lily from './images/lily-colins.jpg';
import Emma from './images/emma.jpg';
import Gal from './images/gal-gadot.jpg';
import Keira from './images/pirates.jpg';
import Selena from './images/selena.jpg';
import Norway from './images/norway.jpg';
import Swedan from './images/swedan.jpg';
import Finland from './images/finland.jpg';
import Paris from './images/paris.jpg';
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import About from './images/about.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="smooth">
                    <section id="home">
                        <header className="v-header container">
                            <div className="fullscreen-video-wrap">
                                <video src={Travel} autoPlay={true} loop={true} muted={true}></video>
                            </div>

                            <div className="header-overlay"></div>

                            <div className="header-content">
                                <h1 className="hometext"><b>Not all those who wander are lost</b></h1>
                                <Link to="/packages" className="btn btn-white btn-animated" data-testid="bookButton">Book Now</Link>
                                
                                <Link to="/ownTrip" className="btn btn-white btn-animated">Create Your own Trip</Link>
                                
                                
                            </div>
                            <div className="smallBox">
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={Norway} className="d-block w-100" alt="Norway" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={Swedan} className="d-block w-100" alt="Swedan" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={Finland} className="d-block w-100" alt="Finland" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={Paris} className="d-block w-100" alt="Paris" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>

                    </section>
                    <section id="about" className="section-2">
                        

                        {/* <header className="App-header">

                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#home"><img id="logoImg" alt="Logo of our company" src={Logo}></img></a></li>
                                <li><a href="#price">Price</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#social">Social</a></li>
                            </ul>
                        </header> */}
                        <div className="container text-center">
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="pray">
                                        <img src={About} alt="About Picture" className="about-pic"></img>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="panel text-left">
                                        <h1><b>About Our Company</b></h1>
                                        <p>Wanderlust.com is a travel metasearch engine for lodging reservations. 
                                            It is owned and operated by and is the primary revenue source of United States-based 
                                            Booking Holdings and is headquartered in Amsterdam. The website has over 28 million 
                                            listings. The site is available in 43 languages</p>
                                        <p>Wanderlust.com was formed when bookings.nl, founded in 1996 by Geert-Jan Bruinsma, merged in 
                                            2000 with Bookings Online, founded by Sicco and Alec Behrens, Marijn Muyser and Bas Lemmens, 
                                            which operated as Bookings.org. The name and URL were changed to Booking.com and Stef Noorden 
                                            was appointed as its CEO. In 1997, Bruinsma wanted to post an ad in De Telegraaf, the Dutch 
                                            newspaper with the highest circulation. The ad was rejected since De Telegraaf only accepted 
                                            ads with the phone number, not with a website. In 2002, Expedia refused to buy bookings
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section id="price">
                        <div className="text-center priceHead">
                            <h1 className="text-light">Discover Our Packages</h1>
                        </div>
{/*                     <div className="header-overlay"></div> */}
                        {/* Predefined Tour Packages */}
                        <div className="team row">
                            <div className="tourcard">
                                <div className="card-image1"></div>
                                <div className="card-text">
                                    <span className="date">4 days trip</span>
                                    <h2>Swizerland Tour</h2>
                                    <p>Dear Travellers, Live Spring on this alpine adventure to Interlaken, Chamonix Mont-Blanc and Geneva, as well as one of the highest mountains in Europe! The scenery and nature during this entire trip.</p>
                                </div>
                                <div className="card-stats">
                                    {/* <div className="stat">
                                        <div className="value">4<sup>m</sup></div>
                                        <div className="type">read</div>
                                    </div> */}
                                    {/* <div className="stat border">
                                        <div className="value">5123</div>
                                        <div className="type">views</div>
                                    </div> */}
                                    <div className="stat">
                                        <div className="value">Price : 100$</div>
                                    </div>
                                </div>
                            </div>

                            <div className="tourcard">
                                <div className="card-image2"></div>
                                <div className="card-text">
                                    <span className="date">2 days trip</span>
                                    <h2>Russia Tour</h2>
                                    <p>Breathtaking views, unforgettable memories and awesome experiences - these are what you are about to get when you join our best-selling 5-day Cruise trip to Stockholm, Helsinki.</p>
                                </div>
                                <div className="card-stats">
                                    <div className="stat">
                                        <div className="value">Price : 150$</div>
                                    </div>
                                </div>
                            </div>

                            <div className="tourcard">
                                <div className="card-image3"></div>
                                <div className="card-text">
                                    <span className="date">1 day trip</span>
                                    <h2>Norway Tour</h2>
                                    <p>Oslo is the world's biggest and most famous flower gardens in the whole world. Have you ever seen more than 7 million tulips, daffodils, and hyacinths, all in bloom? </p>
                                </div>
                                <div className="card-stats">
                                    <div className="stat">
                                        <div className="value">Price : 400$</div>
                                    </div>
                                </div>
                            </div>

                            <div className="tourcard">
                                <div className="card-image4"></div>
                                <div className="card-text">
                                    <span className="date">2 days trip</span>
                                    <h2>Austria Tour</h2>
                                    <p>Hallstatt is a village on Lake Hallstatt's western shore in Austria's mountainous Salzkammergut region. Its 16th-century Alpine houses and alleyways are home to cafes and shops. A funicular railway connects to Salzwelten</p>
                                </div>
                                <div className="card-stats">
                                    <div className="stat">
                                        <div className="value">Price : 40$</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="contact">


                        <div className="header-content text-center reviewHead">
                            <h1 className="reviewText">Don't take our word for it</h1>
                            <p className="reviewText">Don't just take our word for it; hear it staright from the horse's mouth and read what other sailors had to say</p>
                        </div>

                        <div className="team row">

                            <div className="col-md-4 col-12 text-center">
                                <div className="card mr-2 d-inline-block shadow-lg">
                                    <div className="card-img-top">
                                        <img src={Lily} alt="Lily Colins" className="img-fluid"></img>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title">Lily Colins</h3>
                                        <p className="card-text">I got to know about Wanderlust from one of my friends who went for a trip and recommended it to me. Then, my girlfriend and I decided to join. I have chosen Switzerland because when I travel I try to discover the places I have never been before. The trip was really awesome, we managed to visit 3 cities in one day, it’s a great adventure. We will definitely come back and explore new destinations with Wanderlust.</p>
                                        <a href="#" className="text-secondary text-decoration-none"></a>
                                        <p className="text-black-50">Heidelberg, Germany</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="header-overlay"></div> */}
                            <div className="col-md-4 col-12">
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="card mr-2 d-inline-block shadow-lg">
                                                <div className="card-img-top">
                                                    <img src={Emma} alt="Lily Colins" className="img-fluid"></img>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">Emma Watson</h3>
                                                    <p className="card-text">I joined pm2am, because I’ve always wanted to go to Italy. My tandem partner told me about the company and assured about your safety and value. Even though I went on my own, I enjoyed the trip, because I met some really nice people and got to know about their culture and traditions. It was amazing to explore the cities with them!</p>
                                                    <a href="#" className="text-secondary text-decoration-none"></a>
                                                    <p className="text-black-50">Budapest, Hungry</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="card mr-2 d-inline-block shadow-lg">
                                                <div className="card-img-top">
                                                    <img src={Gal} alt="Gal Gadot" className="img-fluid"></img>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">Gal Gadot</h3>
                                                    <p className="card-text">After our exams, my friends and I decided that it was the best possibility to join pm2am, get to know other people and have fun. We’ve only seen Switzerland on the pictures. Starting from the Rhine Falls, through Lucerne up to Zurich, what we thought as a fantasy, it all came true. We really enjoyed hiking in the mountain and meeting new people, it was fun! I will definitely join more trips and I’m looking forward for the next trips to come! </p>
                                                    <a href="#" className="text-secondary text-decoration-none"></a>
                                                    <p className="text-black-50">Oslo, Norway</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="card mr-2 d-inline-block shadow-lg">
                                                <div className="card-img-top">
                                                    <img src={Keira} alt="Keira" className="img-fluid"></img>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">Keira Knightley</h3>
                                                    <p className="card-text">My friends and I enjoyed the trip. The bus ride was really comfortable, we departed and arrived on time. The choice of cities was really good, we had plenty of time to explore each of them. Due to international atmosphere we were able to meet many new people and make new friends. Last but not least, our guide was really friendly and helpful. I will join pm2am for future trips for sure!</p>
                                                    <a href="#" className="text-secondary text-decoration-none"></a>
                                                    <p className="text-black-50">Delhi, India</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 text-center">
                                <div className="card mr-2 d-inline-block shadow-lg">
                                    <div className="card-img-top">
                                        <img src={Selena} alt="Lily Colins" className="img-fluid"></img>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title">Selena Gomez</h3>
                                        <p className="card-text">I always wanted to see Budapest (love it!) and Bratislava, it was a perfect trip for a long weekend. I really enjoyed it, especially Budapest was a very very fascinating city to explore and to go out at night! I had a nice company, a very good tour guide and traveling was also really nice</p>
                                        <a href="#" className="text-secondary text-decoration-none"></a>
                                        <p className="text-black-50">London, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </div>
                
            </div>
        )
    }
}
