import React from "react";

const AboutPage = () => {

    return (
        <div className="aboutpage-block">
            <h2 className="font-h1">Let's get acquainted</h2>
            <div className="aboutpage-content">
                <div className="aboutpage-img"/>
                <div className="aboutpage-text">
                    <h2 className="font-h2">I am cool frontend developer</h2>
                    <p className="font-p">We will evaluate how clean your approach to writing CSS and Javascript code
                        is. You can use any CSS
                        and
                        Javascript 3rd party libraries without any restriction.</p>
                    <p className="font-p">If 3rd party css/javascript libraries are added to the project via
                        bower/npm/yarn you will get bonus
                        points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice
                        service
                        directory page P​SD mockup​ into HTML5/CSS3. </p>
                </div>
            </div>
            <a href="#" className="font-p">Sign up now</a>
        </div>
    );
};

export default AboutPage;
