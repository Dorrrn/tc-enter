import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function MyNavbar({ phonesList }) {
   const renderPhonesList = (phonesList) => {
      return phonesList.map((elm) => {
         return (
            <Link to={`/phone-details/${elm.id}`} key={elm.id}>
               {elm.name}
            </Link>
         );
      });
   };

   return (
      <div className="Navbar">
         <Navbar bg="light" expand="lg">
            <Container>
               <Link to={'/'}>Home</Link>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">{renderPhonesList(phonesList)}</Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
}
