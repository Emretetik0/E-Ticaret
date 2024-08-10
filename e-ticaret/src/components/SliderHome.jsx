import React from 'react';
import Slider from 'react-slick';

const SliderHome = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                <div className="relative group">
                    <img 
                        className="w-full h-auto object-cover"
                        src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f5b4bb403db421696085d92a821d730_9366/Samoa_Ayakkabi_Mavi_JH9076_01_standard.jpg" 
                        alt="Samoa Shoe" 
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-2xl font-bold mb-2">SAMOA</div>
                        <div className="mb-4 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos molestiae asperiores! Neque quibusdam consequatur mollitia, quas distinctio animi consequuntur! Dolorum, vel rerum ad quas pariatur aspernatur a dolore deserunt!
                        </div>
                        <a href="#" className="text-lg font-semibold underline">incele...</a>
                    </div>
                </div>
                <div className="relative group">
                    <img 
                        className="w-full h-auto object-cover"
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1fa18f47b66e4f4980ba74d48de04ecc_9366/HANDBALL_SPEZIAL_Mavi_IF7087_01_standard.jpg" 
                        alt="HANDBALL SPEZIAL" 
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-2xl font-bold mb-2">HANDBALL SPEZIAL</div>
                        <div className="mb-4 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos molestiae asperiores! Neque quibusdam consequatur mollitia, quas distinctio animi consequuntur! Dolorum, vel rerum ad quas pariatur aspernatur a dolore deserunt!
                        </div>
                        <a href="#" className="text-lg font-semibold underline">incele...</a>
                    </div>
                </div>
                <div className="relative group">
                <img 
                        className="w-full h-auto object-cover"
                        src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/778d1c14b94648c18a79e4db3915b78d_9366/Ultraboost_5_Ayakkabi_Siyah_JH9633_01_standard.jpg" 
                        alt="ULTRABOOST 5" 
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-2xl font-bold mb-2">ULTRABOOST 5</div>
                        <div className="mb-4 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos molestiae asperiores! Neque quibusdam consequatur mollitia, quas distinctio animi consequuntur! Dolorum, vel rerum ad quas pariatur aspernatur a dolore deserunt!
                        </div>
                        <a href="#" className="text-lg font-semibold underline">incele...</a>
                    </div>
                </div>
                {/* <div className="relative group">
                    <h3>4</h3>
                </div>
                <div className="relative group">
                    <h3>5</h3>
                </div>
                <div className="relative group">
                    <h3>6</h3>
                </div> */}
            </Slider>
        </div>
    );
};

export default SliderHome;
