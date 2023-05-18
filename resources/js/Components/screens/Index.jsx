import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../slider/Slider";





const Index = () => {

    const imageList = [
        // 'https://www.appleprice.co.ke/img/products/32/1666880524_1.jpg',
        // 'https://www.everythingreps.org/wp-content/uploads/2022/11/Air-Jordan-1-Retro-Low-OG-Zion-Williamson-Voodoo-Product.jpg',
        // 'https://api.priceinkenya.com/media/122794/conversions/infinix-tv-s1-43-inch-full-hd-smart-UOZipv6v5C-original.webp',
        // 'https://nairobiultrabooks.odoo.com/web/image/product.template/1419/image_1024?unique=f506020',    
        "upload/1684348971.jpeg",
        "upload/1684348863.jpeg",
        "upload/1684343367.jpeg",
        "upload/1684343121.jpeg",
    ]

    const [products, setproducts] = useState([]);
    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = async () => {
        await axios.get('/api/get_products')
            .then(({ data }) => {
                setproducts(data.products)
                localStorage.setItem('products', JSON.stringify(data.products))
            })
    }

    // useEffect(() => {
    //     const fetchImages = async () => {
    //         try {
    //             const response = await fetch('/api/get_products');
    //             const data = await response.json();
    //             setproducts(data.products);
    //         } catch (error) {
    //             console.error('Error fetching images:', error);
    //         }
    //     };

    //     fetchImages();
    // }, []);




    const useToggleMenu = (initialState = false) => {
        const [showMenu, setShowMenu] = useState(initialState);
        const toggleMenu = () => {
            setShowMenu(!showMenu);
        };
        return [showMenu, toggleMenu];
    };
    const [showMenu, toggleMenu] = useToggleMenu(false);
    const [showMenu2, toggleMenu2] = useToggleMenu(false);
    const [showMenu3, toggleMenu3] = useToggleMenu(false);


    const navigate = useNavigate()
    const login = () => {
        navigate('/dashboard')
    }

    const register = () => {
        navigate('/register')
    }

    return (
        <div>
            <div className="navBar containerCust">
                <div className="logoCont">
                    <div className="my-auto mainMenuButton">
                        <h2 onClick={toggleMenu3} >
                            <i className="bi bi-three-dots-vertical"></i>
                        </h2>
                        {showMenu3 && (
                            <div className="dropdownMenu">
                                <button >Be a seller</button>
                                <button >Be a rider</button>
                                <button >Get in touch</button>
                            </div>
                        )}
                    </div>

                    <div className="navIcon"><h1>E-MART</h1></div>
                </div>

                <div className="navIcons">
                    <div className="navIcon mainMenuButton">
                        <h2 onClick={toggleMenu} >
                            <i className="bi bi-person-fill"></i>
                        </h2>
                        {showMenu && (
                            <div className="dropdownMenu">
                                <button onClick={() => { login() }}>Sign In</button>
                                <button onClick={() => { register() }}>Sign Up</button>
                            </div>
                        )}
                    </div>

                    <div className="navIcon mainMenuButton">
                        <h2 onClick={toggleMenu2} >
                            <i className="bi bi-list"></i>
                        </h2>
                        {showMenu2 && (
                            <div className="dropdownMenu">
                                <button >Appliances</button>
                                <button >Computing</button>
                                <button >Fashion</button>
                                <button >Health and Beauty</button>
                                <button >Phones and Tablets</button>
                                <button >Supermarkets</button>
                                <button >TV and Audio</button>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            <Slider />

            <div className="containerCust">
                <h2 className="hotDeals">CATEGORIES</h2>
                <div className="card-container">
                    {products.length > 0 && (
                        products.map((image, index) => (
                            <div className="cardItem" key={index}>
                                <h4>{image.Products_category}</h4>
                                <img src={`/upload/${image.Products_image}`} alt={`Slide ${index + 1}`} />
                                <h4>{image.Products_name}</h4>
                                <a href="/login" className="btnBook mx-auto mt-auto" >ORDER NOW</a>
                            </div>
                        ))
                    )}
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
                        <h5 >Accepted payment methods</h5>


                    </div>
                </div>
            </div>
        </div>



    )
}


export default Index