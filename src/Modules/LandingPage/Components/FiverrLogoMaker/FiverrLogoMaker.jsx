import React from 'react'
import './FiverrLogoMaker.css'

export default function FiverrLogoMaker() {
    return (
        <div className='logo-maker-banner container'>
            <div className='descriptions-wrapper'>
                <p><b>fiverr</b> logo maker</p>
                <h2 className="title font-domaine"><b>Make an incredible logo</b> 
                    <br />
                    <i>in minutes</i></h2>
                <div class="description">Pre-designed by top talent. Just add your touch.</div>
                <a class="ZQi_S8t nxZbHom co-blue-700 logo-maker-cta BgvT2R7 bg-co-white" href="https://www.fiverr.com/logo-maker?source=LOHP_banner">Try Fiverr Logo Maker</a>
            </div>

            <picture className="desktop-image"><source media="(min-width: 1160px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png" /> <img alt="fiverr logo maker" loading="lazy" /></picture>

        </div>
    )
}
