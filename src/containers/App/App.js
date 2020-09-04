import React, {useEffect, useState} from 'react';
import './styles.sass';
import Section from "../../components/Section";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {getToken} from "../../services/token.service";
import {Context} from "../../context";

function App() {
    const [token, setToken] = useState(null);

    const initToken = () => {
        getToken()
            .then(result => result.data)
            .then(data => {
                    if (data.success) {
                        setToken(data.token);
                    }
                }
            )
    };

    useEffect(initToken, []);

    return (
        <Context.Provider value={{token, setToken}}>
            <div className="container-fluid">
                <div className="container">
                    <Header/>
                    <Section/>
                    <Footer />
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
