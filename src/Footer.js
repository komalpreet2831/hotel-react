import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer id='footer'>
            <div className="footer-background">
                <div className="footer1">
                    <div className="logo-background">
                        <img src="./images/hotelamricafooter.png.png" alt=""/>
                    </div>
                    <div className="footer1_cont">
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>  123, Main Street,NY 456789</p>
                        <p><i className="fa fa-mobile" aria-hidden="true"></i>  +1234567890</p>
                        <p><i className="fa fa-envelope" aria-hidden="true"></i>  free@psdfreebies.com</p>
                    </div>
                </div>
                <div className="footer2">
                        <a href="#">HOME</a>
                        <a href="#activities">PORTFOLIO</a>
                        <a href="#">ABOUT US </a>
                        <a href="/login">LOGIN</a>
                        <a href="#awards">PARTNERSHIP</a>
                </div>
                <div className="footer3">
                    <p>We are in social network</p>
                    <div className='socials'>
                    <a href="https://www.instagram.com/" target='_blank'><i className="fa fa-instagram" aria-hidden="true" ></i></a>
                    <a href="https://www.facebook.com" target='_blank'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="https://www.twitter.com" target='_blank'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://www.youtube.com" target='_blank'><i className="fa fa-youtube" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
            <h2 className="footer-cont">Copyright 2017 PSDfreebles.com All Right Reserved</h2>
        </footer>
    </div>
  )
}

export default Footer