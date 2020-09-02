import React from 'react';
import './styles.sass';
import Section from "../../components/Section";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function App() {
    return (
        <div className="container-fluid">
            <div className="container">
                <Header />
                <Section />
                {/*<Footer />*/}
            </div>
        </div>
    );
}

export default App;
