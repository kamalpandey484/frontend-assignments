import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import HotDeals from "./Components/HotDeals";
import BrandsInFocus from "./Components/BrandsInFocus";
import OfferSlider from "./Components/OfferSlider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Slider/>
        <HotDeals/>
        <OfferSlider/>
        <BrandsInFocus/>
      </div>
    );
  }
}

export default App;

{/*<Navbar bg="white" variant="light" className={"shadow p-3 mb-5 bg-white rounded fixed-top"}>*/}
{/*    <div className={"container col-11 d-flex justify-content-center"}>*/}
{/*        <Navbar.Brand href="#home">*/}
{/*            <img*/}
{/*                alt="myntra Logo"*/}
{/*                src="https://www.logotaglines.com/wp-content/uploads/2016/08/26-1443262056-myntra-logo-image.jpg"*/}
{/*                width="50"*/}
{/*                height="40"*/}
{/*                className="d-inline-block align-top"*/}
{/*            />*/}
{/*        </Navbar.Brand>*/}
{/*        <Nav className="mr-auto font-weight-bold text-uppercase ml-4">*/}
{/*            <Nav.Link href="#home">Men</Nav.Link>*/}
{/*            <Nav.Link href="#features">Women</Nav.Link>*/}
{/*            <Nav.Link href="#pricing">Kids</Nav.Link>*/}
{/*            <Nav.Link href="#features">Home & Living</Nav.Link>*/}
{/*            <Nav.Link href="#pricing">Discover</Nav.Link>*/}
{/*        </Nav>*/}
{/*        <InputGroup className="w-25 mr-5">*/}
{/*            <InputGroup.Prepend >*/}
{/*                <InputGroup.Text id="inputGroup-sizing-default"*/}
{/*                                 className={"bg-white"}>*/}
{/*                    <i className="fa fa-search"></i>*/}
{/*                </InputGroup.Text>*/}
{/*            </InputGroup.Prepend>*/}
{/*            <FormControl*/}
{/*                placeholder="search"*/}
{/*                aria-label="Default"*/}
{/*                aria-describedby="inputGroup-sizing-default"*/}
{/*            />*/}
{/*        </InputGroup>*/}
{/*        <Nav className=" ml-5 font-weight-bold text-uppercase">*/}
{/*            <Nav.Link href="#home" className={"mr-3"}><i className="fa fa-user"></i></Nav.Link>*/}
{/*            <Nav.Link href="#features" className={"mr-3"}><i className="fa fa-bookmark"></i></Nav.Link>*/}
{/*            <Nav.Link href="#pricing"><i className="fa fa-shopping-bag"></i></Nav.Link>*/}
{/*        </Nav>*/}
{/*    </div>*/}
{/*</Navbar>*/}

