import React from 'react'
import './FiverrBusiness.css'
import { CheckCircleOutlined } from '@ant-design/icons/lib/icons'

export default function FiverrBusiness() {
    return (
        <div className='fib-banner-wrapper lohp-row'>
            <div classname="fib-banner lohp-inner-row">
                <div className="grid grid-cols-2 gap-4 container">
                    <div className='business-text'>
                        
                            <p style={{color: '#fff'}}> <b>fiverr</b> business.</p>
                            <h2 className="font-domaine text-white"><span>A business solution designed for <i>teams</i></span></h2>
                            <p className="tbody-4">Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                        <ul>
                            <li> <span><CheckCircleOutlined /></span> Connect to freelancers with proven business experience</li>
                            <li><span><CheckCircleOutlined /></span>Get matched with the perfect talent by a customer success manager</li>
                            <li><span><CheckCircleOutlined /></span>Manage teamwork and boost productivity with one powerful workspace</li>
                        </ul>
                        <a class="ZQi_S8t AOOSxop co-white bg-co-green-700" target="_blank" href="https://business.fiverr.com/business?source=LOHP_business_banner">Explore Fiverr Business</a>

                    </div>
                    <div>
                        <img alt="Fiverr Business freelancers" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}
