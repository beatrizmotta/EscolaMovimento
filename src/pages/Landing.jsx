import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import Logo from '../static/logo.svg'
import './Landing.css'
import $ from 'jquery'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import photo1 from '../static/pexels-lukas-296302.jpg'
import photo2 from '../static/pexels-max-fischer-5212338.jpg'
import photo3 from '../static/pexels-pragyan-bezbaruah-1720186.jpg'
import bg from '../static/bg.png'

// import Carousel from '../carousels/landingpage/LandingPageCarousel'

function Landing(props) {
    const fadeImages = [
        photo1, photo2, photo3
    ]

    const {authConfig, user} = useContext(AuthContext)
    const [userData, setUserData] = user
    const [buttons, setButtons] = useState()
    
    useEffect(() => {
        let credentials = {...userData}
        if (credentials.loggedIn) {
            setButtons(logged)
        } else {
            setButtons(notLogged)
        }
    }, [])

    const notLogged = <>
        <Link to="/login" className="bg-warning p-2 text-dark mx-1 w-20">Login</Link>
        <Link to="/cadastro" className="bg-warning p-2 text-dark mx-1 w-20">Cadastrar</Link>
    </>

    const logged = <>
        <Link to="/profile" className="bg-warning p-2 text-dark w-20">Entrar no meu perfil</Link>
    </>

    useEffect(() => {

        $('.arrow').hide()
        $('.logo').css('top', '0px')
        $('.information').hide()

        setTimeout(() => {
            $('.arrow').toggle(700)
            setTimeout(() => {
                $('.information').slideDown(1000)
            }, 3000)
        }, 500)
    }, [])


    return (
        <div className="container landing" style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: "relative",
            top: '0px'
        }}>
            <img src={Logo} style={{ maxWidth: '500px' }} />

            <img style={
                { cursor: 'pointer' }
            }
                className="arrow mt-2" width="30" height="30" src="https://img.icons8.com/ios/50/000000/down-squared--v1.png"
                onClick={() => {
                    $('.information').slideToggle(1000)
                }} />


            <div className="information container shadow mt-1 p-0 w-100 flex-column-reverse">
                <div className="text px-3 pt-3">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                    <p style={{ textAlign: 'left' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Impedit enim autem aperiam asperiores ex libero adipisci laborum
                        fugiat cupiditate et distinctio sit, facilis, earum mollitia nulla
                        iste, eum nostrum. Ratione?
                    </p>
                    <h3 style={{ textAlign: 'center' }}><i>"Lorem ipsum dolor sit amet consectetur"</i></h3>
                </div>
                <div className="slide-container landingcarousel">
                    <Fade duration="3000" arrows={false}>
                        <div className="each-fade">
                            <img src={fadeImages[0]} alt="" />
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[1]} alt="" />
                        </div>
                        <div className="each-fade">
                            <img src={fadeImages[2]} alt="" />
                        </div>
                    </Fade>
                </div>

            </div>
            <div className="navbar">
                {buttons}
            </div>
            <img src={bg} style={{ position: 'absolute', zIndex: '-1', bottom: '0', width: '100vw' }} />
            <footer style={{ textAlign: 'center' }}>
                Rua Theodolino Martins Jacques, 626, Tamoio <br />
                Cruz Alta, RS <hr />
                <i className="fa fa-phone mx-1"></i>(55) 2773-5429
            </footer>
        </div>
    );
}

export default Landing;