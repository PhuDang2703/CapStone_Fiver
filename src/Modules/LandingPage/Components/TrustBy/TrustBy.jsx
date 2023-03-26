import React from 'react'
import style from './TrustBy.module.scss';

const categories = [
    {
        id: 1,
        src: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png',
        alt: 'facebook'
    },
    {
        id: 2,
        src: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png',
        alt: 'google'
    },
    {
        id: 3,
        src: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png',
        alt: 'netflix'
    },
    {
        id: 4,
        src: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png',
        alt: 'p&g'
    },
    {
        id: 5,
        src: 'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png',
        alt: 'paypal'
    },
    
]

const renderLogo = () => {
    return (categories.map(item => {
        return (
            <li style={{paddingRight: 60}}>
                <img src={item.src} alt={item.alt}/>
            </li>
        )
    }))
}

export default function TrustBy() {
    return (
        <div>
            <ul className={style.logoTrustBy}>
                <p style={{fontWeight: 600, color: '#b5b6ba', paddingRight: 44, paddingTop: 15, fontSize: 18}}>Trusted by: </p>
                {renderLogo()}
            </ul>
           
        </div>
    )
}
