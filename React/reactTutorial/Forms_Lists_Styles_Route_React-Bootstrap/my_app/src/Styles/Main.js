import React, { Component } from 'react';
import './Style.css'
import style from './Main.scss'
import './Main.scss'

class Main extends Component {
    render() {
        // Using JavaScript Objects
        const styles = {
            fontFamily: 'Chilanka',
            color: 'white',
            backgroundColor: "green",
            height: '100vh',
            width: '100vw',
            display: 'grid',
            placeItems: 'center'
        }
        return (
            <div className='main'>
                {/* Inline CSS */}
                <h1 style={{ backgroundColor: "red", color: "white", padding:'30px', textAlign:'center'}}>I a from INLINE style component</h1>

                {/* Using Js Object */}
                <h2 style={styles}>Using JavaScript Object</h2>

                {/* External File */}
                <h3 id='header__image'>I wanna be the very best like no one ever was</h3>

                {/* CSS Module */}
                <div className={style.myStyle}>
                    <h1>I am from CSS Module Operators</h1>
                    <p>Catch me if you can...</p>
                </div>

                {/* SASS */}
                <select className='sass__marai'>
                    <option className='sass__marai'>Rajuk</option>
                    <option className='sass__marai'>NotreDame</option>
                    <option className='sass__marai'>Ideal</option>
                    <option className='sass__marai'>Adamjee</option>
                    <option className='sass__marai'>Faizur</option>
                </select>
            </div>
        );
    }
}

export default Main;