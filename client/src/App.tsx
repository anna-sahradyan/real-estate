import React from 'react';
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App: React.FC = () => {
    return (
        <div className={'wrapper'}>
            <Header/>
                <Home/>
            <Footer/>
        </div>
    );
};

export default App;
