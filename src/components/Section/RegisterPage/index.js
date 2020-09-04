import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../context";
import {createUser} from "../../../services/user.service";
import {getPositions} from "../../../services/position.service";
import isValid from "../../../services/validation.service";

const RegisterPage = () => {
    // {name: "", email: "", phone: "", position_id: 0, photo: null}
    let formData = new FormData();
        formData.append("name", "")
        .append("email", "")
        .append("phone", "")
        .append("position_id", "")
        .append("photo", null);
    const [positions, setPositions] = useState(0);
    const [fileName, setFileName] = useState("Upload your photo");

    const [validForm, setValidForm] = useState({name: true, email: true, phone: true, position_id: true, photo: true});

    const {token, setToken} = useContext(Context);

    useEffect(() => {
        getPositions().then(res => res.data)
            .then(data => {
                if (data.success) {
                    setPositions([...data.positions]);
                }
            })
            .catch(err => err.response);
    }, [])

    const confirmCreating = () => {
        const [valid, validInputs] = isValid(formData);
        if (valid) {
            createUser({token, body: formData}).then(res => res.response)
                .then(resp => console.log(resp.data))
                .catch(err => err.response)
                .then(resp => console.log(resp.data));
        } else {
            setValidForm(validInputs);
            console.log(validInputs);
        }
    }

    const createPositions = () =>
        (positions && positions.map((item, index) =>
            <div className="form-block-radio"
                 key={index}>
                <input className="custom-radio"
                       type="radio"
                       id={item.id}
                       name="position_id"
                       value={+item.id}
                       onChange={(event) => changeForm(event)}/>
                <label className="custom-label"
                       htmlFor={item.id}>{item.name}</label>
            </div>
        ));

    const showFile = (event) => {
        setFileName(event.target.value);
        let obj = event.target;
        formData.set("photo", obj.files[0]);
    };

    const changeForm = (event) => {
        formData.set(event.target.name, event.target.value);
    };

    return (
        <div className="registerpage-block">
            <h2 className="font-h1">Register to get a work</h2>
            <div className="register-content">
                <p className="font-p">Attention! After successful registration and alert, update the list of users in
                    the block from the
                    top</p>
                <form action="">
                    <div className="form-block">
                        <label className="register-label font-p"
                               htmlFor="name">Name</label><br/>
                        <input className="register-input font-p"
                               type="text"
                               name="name"
                               placeholder="Your name"
                               onChange={(event) => changeForm(event)}/>
                    </div>
                    <div className="form-block">
                        <label className="register-label font-p"
                               htmlFor="email">Email</label><br/>
                        <input className="register-input font-p"
                               type="email"
                               name="email"
                               placeholder="Your email"
                               onChange={(event) => changeForm(event)}/>
                    </div>
                    <div className="form-block">
                        <label className="register-label font-p"
                               htmlFor="phone">Phone number</label><br/>
                        <input className="register-input font-p"
                               type="text"
                               name="phone"
                               placeholder="+380 XX XXX XX XX"
                               onChange={(event) => changeForm(event)}/><br/>
                        <span>Enter phone number in open format</span>
                    </div>
                    <div className="form-block">
                        <label className="font-p">Select your position</label>
                        {createPositions()}
                    </div>
                    <div className="form-block">
                        <label className="file">
                            <input type="file"
                                   name="file"
                                   className="input-file"
                                   id="file"
                                   aria-label="File browser example"
                                   onChange={(event) => showFile(event)}/>
                            <span className="file-custom">{fileName}</span>
                        </label>
                    </div>
                </form>
                <button className="btn register-btn"
                        onClick={confirmCreating}>Sing up now
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;
