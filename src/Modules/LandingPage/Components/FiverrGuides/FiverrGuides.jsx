import React from 'react'
import { Col, Row } from 'antd';
import style from './FiverrGuides.module.scss'
import './FiverrGuides.css'

const categories = [
    {
        id: 1,
        href: "https://www.fiverr.com/resources/guides/business/start-online-business-and-work-from-home",
        src: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png",
        h6: "Start an online business and work from home",
        para: "A complete guide to starting a small business online",
    },
    {
        id: 2,
        href: 'https://www.fiverr.com/resources/guides/digital-marketing/what-is-digital-marketing',
        src: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png',
        h6: 'Digital marketing made easy',
        para: 'A practical guide to understand what is digital marketing',
    },
    {
        id: 3,
        href: 'https://www.fiverr.com/resources/guides/graphic-design/how-to-create-business-logo',
        src: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png',
        h6: 'Create a logo for your business',
        para: 'A step-by-step guide to create a memorable business logo',
    }
]

const renderCol = () => {
    return (
        categories.map((item) => {
            return (<Col key={item.id} span={8} style={{padding: '0px 16px'}}
                // xs={{
                //     span: 12,
                //     offset  : 1,
                // }}
            >
                <a href={item.href}>
                    <img alt="Start an online business and work from home" src={item.src} loading="lazy" />
                    <h3>{item.h6}</h3>
                    <p>{item.para}</p>
                </a>
            </Col>)
        })
    )
}

export default function FiverrGuides() {
    return (
        <>
            <div style={{ paddingBottom: 120 }} className='container'>
                <div style={{ marginBottom: 96 }} className={style.fiverrGuidesHeader}>
                    <header>
                        <h2>Fiverr guides</h2>
                    </header>
                    <Row gutter={[16, 16]}>
                        {renderCol()}
                    </Row>
                </div>

                <div classname="signup m-b-0 lohp-row">
                    <img alt="The talent you need" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" loading="lazy" />

                    <div className="signup-text">
                        <h2 className="text-display-1 font-domaine">
                            <span>Find the <i style={{fontWeight: 400}}>talent</i> needed to get your business <i style={{fontWeight: 400}}>growing</i>.</span>
                        </h2>
                        <a className="ZQi_S8t AOOSxop co-white btn-signup js-open-popup-join bg-co-green-700" href="/join?source=hplo_get_started">Get Started</a>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

