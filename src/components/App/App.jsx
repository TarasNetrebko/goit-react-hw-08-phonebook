import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HomePage } from 'Pages/HomePage/HomePage';
import { ContactPage } from 'Pages/ContactPage/ContactPage';
import { RegisterPage } from "../../Pages/RegisterPage/RegisterPage"
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { userCurrent } from 'redux/auth/auth-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';


export const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(userCurrent())
    dispatch(fetchContacts())
    }, [dispatch]);

  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<HomePage />}>
        <Route path="contacts" element={<ContactPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      {/* <Route path="*" element={<PageNotFound/>} /> */}
    </Routes>
    );
  }
