import React from 'react';
import './App.css';
import Login from "./pages/LoginPage/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" Component={Login}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
