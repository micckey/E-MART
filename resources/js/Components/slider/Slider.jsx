import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get('/api/get_products');
            setProducts(response.data.products);
            localStorage.setItem('products', JSON.stringify(response.data.products));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (



        <div className="containerCust owl-2-style">
            <h2 className="hotDeals">HOT DEALS!!!</h2>

            <OwlCarousel className="owl-carousel owl-2" items={3} margin={10}
                loop
                autoplay
                autoplayTimeout={3000}
                autoplayHoverPause
                smartSpeed={1000}>
                {products.map((product, index) => (
                    <div className="media-29101" key={index}>
                        <a href="#">
                            <img src={`/upload/${product.Products_image}`} alt="Image" className="img-fluid" />
                        </a>
                        <h3>
                            <a href="#">{product.Products_name}</a>
                        </h3>
                    </div>
                ))}
            </OwlCarousel>


            <h2 className="hotDeals">NEW ARRIVALS!!!</h2>

            <OwlCarousel className="owl-carousel owl-2" items={3} margin={10}
                loop
                autoplay
                autoplayTimeout={3000}
                autoplayHoverPause
                smartSpeed={1000}>
                {products.map((product, index) => (
                    <div className="media-29101" key={index}>
                        <a href="#">
                            <img src={`/upload/${product.Products_image}`} alt="Image" className="img-fluid" />
                        </a>
                        <h3>
                            <a href="#">{product.Products_name}</a>
                        </h3>
                    </div>
                ))}
            </OwlCarousel>
        </div>


    );
};

export default Slider;
