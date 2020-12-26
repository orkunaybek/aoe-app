import React from 'react';
import HomeImg from "../assets/images/home-img.png"

const Home = () => {
        return (
            <div className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">A Basic App To Filter AOE Units</h1>
                    <p className="hero-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo magnam quaerat dolorem autem fugiat id sed, corrupti deleniti esse. Culpa soluta nostrum dignissimos voluptas optio enim nulla porro omnis quo.</p>
                </div>
                <img className="hero-img" src={HomeImg} alt="" />
            </div>
        );
}

export default Home;
