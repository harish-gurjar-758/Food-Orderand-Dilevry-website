import React from 'react'

export default function Home() {
    return (
        <div className='Home'>
            <div className='hero'>
                <div className='container'>
                    <div className='hero-pizza'>
                        <img src="https://demo.hasthemes.com/aahar-preview/aahar/images/shape/slider-pizza.png" alt="" />
                    </div>
                    <div className="hero-text-imgs">
                        <img src="https://demo.hasthemes.com/aahar-preview/aahar/images/slider/text/2.png" alt="" />
                        <img src="https://demo.hasthemes.com/aahar-preview/aahar/images/slider/text/1.png" alt="" />
                    </div>
                </div>
                <div className="hero-input">
                    <input type="text" placeholder="Type Place, City.Division" />
                    <input class="res__search" type="text" placeholder="Restaurant" />
                    <div className="btn-red">Search</div>
                </div>
            </div>
        </div>
    )
}
