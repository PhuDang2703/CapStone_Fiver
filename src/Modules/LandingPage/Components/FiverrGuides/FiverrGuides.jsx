import React from 'react'
import { Col, Row } from 'antd';

const categories = [
    {
        id: 1,
        href: "",
        src: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png",
        h6: "Start an online business and work from home",
        para: "A complete guide to starting a small business online",
    },
    {
        id: 2,
        href: '',
        src: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png',
        h6: 'Digital marketing made easy',
        para: 'A practical guide to understand what is digital marketing',
    },
    {
        id: 3,
        href: '',
        src: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png',
        h6: 'Create a logo for your business',
        para: 'A step-by-step guide to create a memorable business logo',
    }
]

export default function FiverrGuides() {
    return (
        <>
        <div style={{paddingBottom: 120}} className='container'>
            <div style={{ marginBottom: 96 }} className='fiverr-guides lohp-row'>

                <h2>Fiverr guides</h2>

                <Row>
                    {/* {categories && categories.map((item) => {
                  <Col key={item.id}
                  xs={{
                      span: 5,
                      offset: 1,
                  }}
                  lg={{
                      span: 6,
                      offset: 2,
                  }}
              >
                  <a href=''>
                      <img alt="Start an online business and work from home" src={item.src} loading="lazy" />
                      <h6>{item.h6}</h6>
                      <p>{item.p}</p>
                  </a>
              </Col>
            })} */}

                    <Col
                        xs={{
                            span: 5,
                            offset: 1,
                        }}
                        lg={{
                            span: 6,
                            offset: 2,
                        }}
                    >
                        <a href=''>
                            <img alt="Start an online business and work from home" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png" loading="lazy" />
                            <h6>Start an online business and work from home</h6>
                            <p>A complete guide to starting a small business online</p>
                        </a>
                    </Col>

                    <Col
                        xs={{
                            span: 5,
                            offset: 1,
                        }}
                        lg={{
                            span: 6,
                            offset: 2,
                        }}
                    >
                        <a href=''>
                            <img alt="Start an online business and work from home" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png" loading="lazy" />
                            <h6>Start an online business and work from home</h6>
                            <p>A complete guide to starting a small business online</p>
                        </a>
                    </Col>

                    <Col
                        xs={{
                            span: 5,
                            offset: 1,
                        }}
                        lg={{
                            span: 6,
                            offset: 2,
                        }}
                    >
                        <a href=''>
                            <img alt="Start an online business and work from home" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png" loading="lazy" />
                            <h6>Start an online business and work from home</h6>
                            <p>A complete guide to starting a small business online</p>
                        </a>
                    </Col>
                </Row>
            </div>

            <div classname="signup m-b-0 lohp-row">
                <img alt="The talent you need" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" loading="lazy" />

                <div className="signup-text"><h2 className="text-display-1 font-domaine"><span>Find the <i>talent</i> needed to get your business <i>growing</i>.</span></h2><a className="ZQi_S8t AOOSxop co-white btn-signup js-open-popup-join bg-co-green-700" href="/join?source=hplo_get_started">Get Started</a></div>
            </div>
        </div>
        <hr/>
        </>
    )
}

