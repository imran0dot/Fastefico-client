import React from 'react';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const App = () => {
    return (
        <>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </>
    );
};

export default App;