import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function PhoneDetails({ phonesList }) {
   const [phoneDetails, setPhoneDetails] = useState(null);
   const [fetchingDetails, setFetchingDetails] = useState(true);

   const { phoneId } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      getPhoneDetails();
   }, [phoneId]);

   const getPhoneDetails = async () => {
      setFetchingDetails(true);

      const phoneToRender = phonesList.find((elm) => elm.id === Number(phoneId));

      setTimeout(() => {
         if (!phoneToRender) {
            navigate('/not-found');
            return;
         }
         setPhoneDetails(phoneToRender);
         setFetchingDetails(false);
      }, 500);
   };

   if (fetchingDetails) {
      return <Spinner animation="border" variant="info" />;
   }

   const { name, manufacturer, description, color, screen, processor, ram, price, imageFileName } =
      phoneDetails;

   return (
      <div className="PhoneDetails">
         <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/images/${imageFileName}`} />
            <Card.Body>
               <Card.Title>
                  {name} by {manufacturer}
               </Card.Title>
               <Card.Text>{description}</Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
               <ListGroupItem>Color: {color}</ListGroupItem>
               <ListGroupItem>{screen}</ListGroupItem>
               <ListGroupItem>Processor: {processor}</ListGroupItem>
               <ListGroupItem>Ram: {ram}</ListGroupItem>
               <ListGroupItem>Price starting from: {price}</ListGroupItem>
            </ListGroup>
         </Card>
      </div>
   );
}
