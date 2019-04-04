import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, CardColumns} from 'react-bootstrap';

const HotDeals = () => {
    const cardItem = {
        width: '250px',
    }
        return (
            <div className={"container col-md-11 d-flex justify-content-center mt-5"}>
                <CardColumns className={"container d-flex justify-content-between"}>
                        <Card style={cardItem}>
                            <Card.Img variant="top" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/22/9475220a-6c1f-489d-bbc1-94513293b94c1553250769785-Uber-Offer.jpg" />
                        </Card>
                        <Card style={cardItem}>
                            <Card.Img variant="top" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/26/0750dbe6-e2b6-494b-af51-125fbc5ba6de1553582963773-Deal-Strip_Extra-20--Off.jpg" />
                        </Card>
                        <Card style={cardItem}>
                            <Card.Img variant="top" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/12/fc18570d-5170-4c27-91f0-b10924e989201528778863097-17731eb0-063b-4e48-926c-c2771a19fc241527676512681-deal1.jpg" />
                        </Card>
                        <Card style={cardItem}>
                            <Card.Img variant="top" src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/12/26/e4c85b7f-aa40-4195-abcb-942e734bbba81545795449887-ext-500-deal-strip.jpg" />
                        </Card>
                </CardColumns>
            </div>
        );
    }

export default HotDeals;