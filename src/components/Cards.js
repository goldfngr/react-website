import React, { Component } from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Check Out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items"> 
                        <CardItem
                        src='images/img-9.jpg'
                        text='Explore hidden waterfall deep inside Amazon jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-2.jpg'
                        text='Ride through islands of advetures in Bali in a private cruise'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items"> 
                        <CardItem
                        src='images/img-3.jpg'
                        text='Cillum dolore eu fugiat nulla pariatur ipsum dolor sit'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-4.jpg'
                        text='Duis aute irure dolor in reprehenderit in voluptate velit esse'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-8.jpg'
                        text='Lorem ipsum dolor sit amet dolor in reprehenderit in voluptate'
                        label='Thrills'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Cards
