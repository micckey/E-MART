import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Index = () => {

    const imageList = [
        'https://www.appleprice.co.ke/img/products/32/1666880524_1.jpg',
        'https://www.everythingreps.org/wp-content/uploads/2022/11/Air-Jordan-1-Retro-Low-OG-Zion-Williamson-Voodoo-Product.jpg',
        'https://api.priceinkenya.com/media/122794/conversions/infinix-tv-s1-43-inch-full-hd-smart-UOZipv6v5C-original.webp',
        'https://nairobiultrabooks.odoo.com/web/image/product.template/1419/image_1024?unique=f506020'
    ]


    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((activeIndex - 1 + imageList.length) % imageList.length);
    };

    const handleNext = () => {
        setActiveIndex((activeIndex + 1) % imageList.length);
    };

    return (
        <div>
            <div className="navBar containerCust">
                <h1>E-MART</h1>
                <div className="navIcons">
                    <h2 className="navIcon">ACCOUNT</h2>
                    <h2 className="navIcon">MENU</h2>
                </div>
            </div>


            <div className='containerCust'>
                <div className="owl-2-style">
                    <h2 className="hotDeals">HOT DEALS!!!</h2>
                    <div className="owl-carousel owl-2">
                        {imageList.map((image, index) => (
                            <div className="media-29101" key={index}>
                                <a href="#"><img src={image} alt={`Slide ${index + 1}`} className="img-fluid" /></a>
                                <h3><a href="#">IMAGE</a></h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="containerCust">
                <div className="owl-2-style">
                    <h2 className="hotDeals">NEW ARRIVALS</h2>
                    <div className="owl-carousel owl-2">
                        {imageList.map((image, index) => (
                            <div className="media-29101" key={index}>
                                <a href="#"><img src={image} alt={`Slide ${index + 1}`} className="img-fluid" /></a>
                                <h3><a href="#">IMAGE</a></h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="containerCust">
                <h2 className="hotDeals">CATEGORIES</h2>
                <div className="card-container">
                    {imageList.map((image, index) => (
                        <div className="card" key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} />
                            <h4>IMAGE</h4>
                            <a href="/login" className="btnBook mx-auto mt-auto" >ORDER NOW</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="homeButton">
                <a href="#">Back to tthe top</a>
            </div>

            <div className="containerCust contactsContainer">
                <div className="contacts">
                    <div className="desc">
                        <h3>EMART</h3>
                        <h5>The Convenient place for online shopping</h5>
                    </div>
                    <div className="socials mx-auto">
                        <a><i className="bi bi-twitter"></i></a> <br />
                        <a><i className="bi bi-instagram"></i></a> <br />
                        <a><i className="bi bi-facebook"></i></a>
                    </div>
                    <div className="payment">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        <i className="far fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>



    )
}


export default Index