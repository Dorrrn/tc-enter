import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import MyNavbar from './components/MyNavbar';
import HomePage from './pages/HomePage';
import PhoneDetails from './pages/PhoneDetails';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';

import Spinner from 'react-bootstrap/Spinner';

function App() {
   const [phonesList, setPhonesList] = useState([]);
   const [fetchingPhones, setFetchingPhones] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      getPhonesList();
   }, []);

   const getPhonesList = async () => {
      try {
         const response = await axios.get(`${process.env.REACT_APP_API_URL}/phones`);

         setTimeout(() => {
            setPhonesList(response.data);
            setFetchingPhones(false);
         }, 500);
      } catch (err) {
         navigate('/error');
      }
   };

   if (fetchingPhones) {
      return (
         <div className="App">
            <Spinner animation="border" variant="info" />
         </div>
      );
   }

   return (
      <div className="App">
         <MyNavbar phonesList={phonesList} />

         <div id="page">
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route
                  path="/phone-details/:phoneId"
                  element={<PhoneDetails phonesList={phonesList} />}
               />
               <Route path="/error" element={<ErrorPage />} />
               <Route path="/*" element={<NotFoundPage />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
