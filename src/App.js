// -----nike......App...
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import jordan from './jordan.png';
import logoo from './logoo.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import nike from './nike.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import card1 from './card1.webp';
import card2 from './card2.webp';
import card3 from './card3.webp';
import card4 from './card4.webp';
import card5 from './card5.webp';
import card6 from './card6.webp';
import card7 from './card7.webp';
import screen1 from './screen1.png';
import screen2 from './screen2.png';
import screen3 from './screen3.png';
import shoes1 from './shoes1.png';
import shoes2 from './shoes2.png';
import shoes3 from './shoes3.png';
import shoes4 from './shoes4.png';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.png';
import pic5 from './pic5.png';
import photo1 from './photo1.png';
import photo2 from './photo2.jpeg';
import photo3 from './photo3.png';
import photo4 from './photo4.png';
import photo5 from './photo5.png';
import photo6 from './photo6.png';
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';










function App() {
  return (
    <div className="App">
       <Navbar bg="bright" data-bs-theme="light" style={{height: '30px'}}>
        <Container style={{marginLeft:'30px'}}>
          <Navbar.Brand href="#home"><img src={jordan} alt='jordan' width='30px' height='30px' ></img> </Navbar.Brand>
          </Container>
          <Container style={{marginRight:'30px'}}>
          <Nav className="ms-auto" style={{fontSize:'12px',fontFamily:'Helvetica'}}>
            <Nav.Link href="#home" style={{ color:'black'}}>Find a store&nbsp;&nbsp; |</Nav.Link>
            <Nav.Link href="#features" style={{ color:'black'}} >Help&nbsp;&nbsp; |</Nav.Link>
            <Nav.Link href="#pricing" style={{ color:'black'}}>Join Us&nbsp;&nbsp; |</Nav.Link>
            <Nav.Link href="#pricing" style={{ color:'black'}}>Sign In&nbsp;&nbsp; |</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
       <Navbar bg="light" data-bs-theme="light" style={{height: '30px'}}>
        <Container style={{marginLeft:'30px'}}>
          <Navbar.Brand href="#home"><img src={logoo} alt='logoo' width='30px' height='30px' ></img> </Navbar.Brand>
          </Container>
          <Container style={{marginRight:'300px'}}>
          <Nav className="ms-auto" style={{fontSize:'12px',fontFamily:'Helvetica'}}>
            <Nav.Link href="#home" style={{ color:'black'}}>New&Featured&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#features" style={{ color:'black'}} >Men&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#pricing" style={{ color:'black'}}>Women&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#pricing" style={{ color:'black'}}>Kids&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#pricing" style={{ color:'black'}}>Sale&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#pricing" style={{ color:'black'}}>Customise&nbsp;&nbsp;|</Nav.Link>
            <Nav.Link href="#pricing" style={{ color:'black'}}>SNKRS&nbsp;&nbsp;|</Nav.Link>
             </Nav>
        </Container>
         <Container style={{marginRight:''}}>
         <Form bg='bright' style={{ marginLeft: '50px' }}>
              <input class="search" type="search" placeholder="  Search" style={{ borderRadius: '50px' }}></input>
            </Form>
            <Nav.Link href="#pricing" style={{ color: 'black', marginRight: '50px' }}><i class="fa-regular fa-heart"></i></Nav.Link>
            <Nav.Link href="#pricing" style={{ color: 'black', marginRight: '50px' }}><i class="fa-solid fa-bag-shopping" ></i></Nav.Link>
          
        
        </Container> 
      </Navbar>
      <div style={{ width: '100%', overflow: 'hidden',background:'#F5F5F5',height:'78px'}}>
        <Carousel style={{ width: '100vw', marginLeft: '0', marginRight: '0' }}>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
              <Container >
                <h3 className="text-center" style={{fontSize:'15px'}} >Save Up to 40%</h3>
                <p className="text-center" style={{fontSize:'15px'}}><u>Shop All Our New Markdowns.</u></p>
              </Container>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
              <Container>
                <h3 className="text-center" style={{fontSize:'15px'}}>Move, Shop, Customise & Celebrate With Us.</h3>
                <p className="text-center" style={{fontSize:'15px'}}>No matter what you feel like doing today.Its better as a Member</p>
                <p className="text-center" style={{fontSize:'15px'}}><u>Join Us</u></p>
              </Container>
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Item for additional slides */}
        </Carousel>
      </div>
      <div>
      <img src={nike} alt='ni' width='100%' height='100%' style={{marginLeft:'30px'}}></img>
      </div>
      <div className="text-center" style={{marginTop:'25px'}}>
        <p><h6>Feel the Unreal</h6></p>
        <p><h1 style={{fontFamily:"revert-layer"}}><b>AIR MAX DN</b></h1></p>
        <p><h6>The next generation of Air technology is here.</h6></p>
        <Button variant="dark" style={{borderRadius:'500px'}}>Shop Now</Button>

      </div>
      <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>New Arrivals Just Landed.</h3>
  <div style={{display:'flex'}}><h5>Shop</h5>
  <button variant="light" disabled style={{borderRadius:"500px",border:'none',width:'40px'}}>{"<"}</button>
  <button variant="light"  active style={{borderRadius:"500px",border:'none',width:'40px'}}>{">"}</button>
  </div>
  </div>
  <CardGroup>
  <div className='row'>
  <div className='col'>
 
    
    <Container>
    <Card >
        <Card.Img variant="top" src={card1} alt='card1' />
        <Card.Body>
          <Card.Title>Nike Dunk LOw</Card.Title>
          <Card.Text>
            Men's Shoes
          </Card.Text>
          <Card.Text>
            MRP:$142.67
          </Card.Text>

        </Card.Body>
        </Card>
        </Container>
        </div>
        
    
        <div className='col'>
        <Container>
     
      <Card>
        <Card.Img variant="top" src={card2} alt='card2' />
        <Card.Body>
          <Card.Title>Nike Dunk LOw</Card.Title>
          <Card.Text>
           Women's Shoes
          </Card.Text>
          <Card.Text>
            MRP:$100.67
          </Card.Text>
        </Card.Body>
       
      </Card>
      </Container>
      </div>
      <div className='col'>
      <Container>
      
      <Card>
        <Card.Img variant="top" src={card3} alt='card3' />
        <Card.Body>
          <Card.Title>Nike Killshot 2Leather</Card.Title>
          <Card.Text>
            Men's Shoes
          </Card.Text>
          <Card.Text>
            MRP:$90.67
          </Card.Text>
        </Card.Body>
       
      </Card>
      </Container>
      </div>
      <div className='col'>
      <Card>
        <Card.Img variant="top" src={card4} alt='card4' />
        <Card.Body>
          <Card.Title>Nike Court Vision Low Next Nature</Card.Title>
          <Card.Text>
            Men's Shoes
          </Card.Text>
          <Card.Text>
            MRP:$85.67
          </Card.Text>
        </Card.Body>
        </Card>
        </div>
       
        <div className='col'>
        <Container>
        <Card>
        <Card.Img variant="top" src={card5} alt='card5' />
        <Card.Body>
          <Card.Title>NikeSports Wear</Card.Title>
          <Card.Text>
            Men's TShirt
          </Card.Text>
          <Card.Text>
            MRP:$35.67
          </Card.Text>
        </Card.Body>
        </Card>
        </Container>
        </div>
        <div className='col'>
        <Container>

        <Card>
        <Card.Img variant="top" src={card6} alt='card6' />
        <Card.Body>
          <Card.Title>Nike Air</Card.Title>
          <Card.Text>
            Women's TShirt
          </Card.Text>
          <Card.Text>
            MRP:$35.67
          </Card.Text>
        </Card.Body>
        </Card>
        </Container>
        
        </div>
        <div className='col'>
        <Container>
        <Card>
        <Card.Img variant="top" src={card7} alt='card7' />
        <Card.Body>
          <Card.Title>Jordan</Card.Title>
          <Card.Text>
            Women's Utility Skirt
          </Card.Text>
          <Card.Text>
            MRP:$35.67
          </Card.Text>
        </Card.Body>
        </Card>
        </Container>
        </div>
        </div>
       
    </CardGroup>
    {/* <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>Trend Alert.</h3>
  <div style={{ display: 'flex' }}>
        <div style={{ position: 'relative', marginRight: '20px' ,marginLeft:'85px'}}>
          <img src={shoe7} style={{ height: '500px' ,width:'22rem',marginLeft:'-30px'}} alt="shoe7" />
          <div style={{ position: 'absolute', top: '80%', left: '20%', transform: 'translateX(-50%)', textAlign: 'center', color: 'black', width: '100%' }}>
            Retro Styles
          </div>
          <button
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20%',
              transform: 'translateX(-50%)',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '500px',
              padding: '10px 20px',
              border: 'none'
            }}
          >
            Shop Now
          </button>
        </div>
        <div style={{ position: 'relative', marginRight: '20px' }}>
          <img src={shoe6} style={{ height: '500px',width:'22rem' }} alt="shoe6" />
          <div style={{ position: 'absolute', top: '80%', left: '20%', transform: 'translateX(-50%)', textAlign: 'center', color: 'black', width: '100%' }}>
            Nike Dunk
          </div>
          <button
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '20%',
              transform: 'translateX(-50%)',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '500px',
              padding: '10px 20px',
              border: 'none'
            }}
          >
            Shop Now
          </button>
        </div>
        </div>
  </div>
   */}
   <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>Featured</h3>
  </div>
  <div>
      <img src={screen1} alt='screen1' width='100%' height='100%' style={{marginLeft:'30px'}}></img>
      </div>
      <div className="text-center" style={{marginTop:'25px'}}>
        <p><h6>Just In</h6></p>
        <p><h1 style={{fontFamily:"revert-layer"}}><b>SPIZIKE LOW 'TEAMRED'</b></h1></p>
        <p><h5>The icon returns in rare form. Paying homage to the creativity and community that shaped </h5>
        <h5>Spike Lee’s legacy, the Spizike brings together the most coveted elements of legendary AJs</h5>
        <h5>for an unheard-of mash-up. Curated by the culture and elevated for today, this rare low-top </h5>
        <h5>edition features a fresh colorway and premium materials across the silhouette. </h5></p>
        <Button variant="dark" style={{borderRadius:'500px'}}>Shop Now</Button>

      </div>
      <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>Trending.</h3>
  {/* <div style={{display:'flex'}}><h5>Shop</h5>
  <button variant="light" disabled style={{borderRadius:"500px",border:'none',width:'40px'}}>{"<"}</button>
  <button variant="light"  active style={{borderRadius:"500px",border:'none',width:'40px'}}>{">"}</button>
  </div> */}

  </div>
  <div>
      <img src={screen2} alt='screen2' width='100%' height='100%' style={{marginLeft:'30px'}}></img>
      </div>
      <div className="text-center" style={{marginTop:'25px'}}>
        <p><h1 style={{fontFamily:"unset",fontSize:'100px'}}><b>NIKE SB DAY ONE</b></h1></p>
        <p><h5>The icon returns in rare form. Paying homage to the creativity and community that shaped </h5>
        <h5>Spike Lee’s legacy, the Spizike brings together the most coveted elements of legendary AJs</h5>
        <h5>for an unheard-of mash-up. Curated by the culture and elevated for today, this rare low-top </h5>
        <h5>edition features a fresh colorway and premium materials across the silhouette. </h5></p>
        <Button variant="dark" style={{borderRadius:'500px'}}>Shop Now</Button>

      </div>
      <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>The Latest</h3>
  </div>
  <div>
      <img src={screen3} alt='screen3' width='100%' height='100%' style={{marginLeft:'30px'}}></img>
      </div>
      <div className="text-center" style={{marginTop:'25px'}}>
        <p><h1 style={{fontFamily:"unset",fontSize:'100px'}}><b>CLASSIC REFRESH</b></h1></p>
        <p><h5>Featuring a modern interpretation of classic pieces, this collection introduces refined  </h5>
        <h5>streetwear styles in a clean, minimal palette.</h5>
        </p>
        <Button variant="dark" style={{borderRadius:'500px'}}>Shop </Button>

      </div>
      <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>Classics Spotlight</h3>
  <div style={{display:'flex'}}><h5></h5>
  <button variant="light" disabled style={{borderRadius:"500px",border:'none',width:'40px'}}>{"<"}</button>
  <button variant="light"  active style={{borderRadius:"500px",border:'none',width:'40px'}}>{">"}</button>
  </div>
  </div>
  <Container fluid >
      <Row className='scroll-row'>
      <Col xs={12} sm={6} md={4} lg={4}>
      <Card style={{ width: '25rem'}}>
      <Card.Img variant="top" src={shoes1} />
      
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={shoes2} />
      
    </Card>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4}>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={shoes3} />
      
    </Card>
    </Col>
     <Col xs={12} sm={6} md={4} lg={4}>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={shoes4} />
      
    </Card>
    </Col>
   
    
   
    </Row>
    </Container>
    <div style={{ marginLeft: '20px', marginTop: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h3>Shop by Sport</h3>
  </div>
  <Row className='scroll-row'>
  <CardGroup>
  
  <div className='row'>
  
 
  <div className='col'>
  <Container >
 
    
   
    <Card >
        <Card.Img variant="top" src={pic1} alt='pic1' />
        <Card.Body>
          <Card.Title>Nike Basketball</Card.Title>
          <Card.Text>
           styles made for your dream
          </Card.Text>
          <Card.Text>
          <Button variant="light" style={{borderRadius:'500px'}}><u>Shop</u> </Button>

          </Card.Text>

        </Card.Body>
        </Card>
        </Container>
        
        </div>
        
       
      

       <div className='col'>
       <Container >
        
     
      <Card>
        <Card.Img variant="top" src={pic2} alt='pic2' />
        <Card.Body>
          <Card.Title>Nike Golf</Card.Title>
          <Card.Text>
           Conquer any course in style
          </Card.Text>
          <Card.Text>
          <Button variant="light" style={{borderRadius:'500px'}}><u>Shop</u> </Button>

          </Card.Text>
        </Card.Body>
       
      </Card>
      </Container>
      
      </div>
      
      
      <div className='col'>
      <Container >
     
      <Card>
        <Card.Img variant="top" src={pic3} alt='pic3' />
        <Card.Body>
          <Card.Title>Nike trails</Card.Title>
          <Card.Text>
           Gear that leads to wild places
          </Card.Text>
          <Card.Text>
          <Button variant="light" style={{borderRadius:'500px'}}><u>Shop</u> </Button>

          </Card.Text>
        </Card.Body>
       
      </Card>
      </Container>
      
      </div>
      
      
      <div className='col'>
      <Container >
       
     
      <Card>
        <Card.Img variant="top" src={pic4} alt='pic4' />
        <Card.Body>
          <Card.Title>Nike Tennis</Card.Title>
          <Card.Text>
           Serve up in style
          </Card.Text>
          <Card.Text>
          <Button variant="light" style={{borderRadius:'500px'}}><u>Shop </u></Button>

          </Card.Text>
        </Card.Body>
       
      </Card>
      </Container>
     
      </div>
      
      
      <div className='col'>
      <Container >
        
     
      <Card>
        <Card.Img variant="top" src={pic5} alt='pic5' />
        <Card.Body>
          <Card.Title>Nike football</Card.Title>
          <Card.Text>
          Bring made style to the pitch with the latest gear
          </Card.Text>
          <Card.Text>
          <Button variant="light" style={{borderRadius:'500px'}}><u>Shop </u></Button>

          </Card.Text>
        </Card.Body>
       
      </Card>
      </Container>
     
      </div>
      </div>
      </CardGroup>
    </Row>
    
    
      <div className='row'>
  <div className='col'></div>
  <h3 style={{marginBottom:'50px',marginLeft:'20px',marginTop:'80px'}}>Member Benefits</h3>
  <div className='scroll-row' style={{ display: 'flex' }}>
    <div style={{ position: 'relative', marginRight: '20px', marginLeft:'85px'}}>
      <img src={photo1} style={{ height: '500px' ,width:'22rem', marginLeft:'-30px'}} alt="photo1" />
      <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <h5>Member Product</h5> 
        <h6>Your Exclusive Access</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
        >
          Shop 
        </button>
      </div>
    </div>
    <div style={{ position: 'relative', marginRight: '20px' }}>
      <img src={photo2} style={{ height: '500px', width:'22rem' }} alt="photo2" />
      <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <h5>Nike By you</h5>
        <h6>Your customisation Service</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
        >
          Customise
        </button>
      </div>
    </div>
    <div style={{ position: 'relative', marginRight: '20px' }}>
      <img src={photo3} style={{ height: '500px', width:'22rem' }} alt="photo3" />
      <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <h5>Member Rewards</h5>
        <h6>How We Say Thank You</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
        >
          Celebrate
        </button>
      </div>
    </div>
    <div style={{ position: 'relative', marginRight: '20px' }}>
      <img src={photo4} style={{ height: '500px', width:'22rem' }} alt="photo4" />
      <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <h5>Member Days</h5>
        <h6>A celebration of You</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
        >
          Learn More
        </button>
      </div>
    </div>
    <div style={{ position: 'relative' }}>
      <img src={photo5} style={{ height: '500px', width:'22rem' }} alt="photo5" />
      <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
       <h5>Sport & Wellness App</h5>
        <h6>Movement Where You Are</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
          
        >
          Move
        </button>
      </div>
    </div>
    <div style={{ position: 'relative' }}>
    <img src={photo6} style={{ height: '500px', width:'22rem' }} alt="photo6" />
    <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <h5>SNKRS</h5>
        <h6>Your Ultimate Sneaker Community</h6>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px', position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <button
          style={{
            backgroundColor: 'white',
            color: 'Black',
            borderRadius: '500px',
            padding: '10px 20px',
            border: 'none'
          }}
          
        >
          Explore
        </button>
      </div>
    </div>
  </div>
</div>
<container>
  <div style={{marginTop:'50px', display: 'flex',marginLeft:'30px'}}>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Icons</b>
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Shoes</b>
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Clothing</b>
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>
    <div style={{flex: '1'}}>
      <ul style={{listStyleType: 'none'}}>
        <b>Kids'</b>
        <li>Infant & Toddler Shoes</li>
        <li>Kids' Shoes</li>
        <li>Kids' Jordan Shoes</li>
        <li>Kids' Basketball Shoes</li>
      </ul>
    </div>
  </div>
</container>
----------------------------
 {/* <MDBFooter bgColor='dark' className='text-center text-lg-start text-white' >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                
                FIND A STORE
                <div>BECOME A MEMBER</div>
                
              
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter> */}
      
       
     
    
     
      
      

        
        
       
  




   
    
 </div>
      
      
      

      
    
  );
}

export default App;
