import React from "react";

import EmailValidation from "./Validation";

const Contact = () => {

    const[name, setName] = React.useState('Prasanth R');
    const[notValidEmail, setNotValidEmail] = React.useState(false);
    
    const handleSubmit = (event) => {
            const emailID = document.getElementById('email').value;
        if (EmailValidation(emailID)) {
            setNotValidEmail(false);
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            window.location = "mailto:prasanthram1019@ymail.com?subject=Message from " + name + "&body= My message is " + message +"%0D%0A%0D%0A%0D%0A Regards, %0D%0A" + name + ", %0D%0A " + emailID;
        } else {
            setNotValidEmail(true);
            return false;
        }
    }

    return (
        <>
        <section id="contactus" className="" >
            <form id="contact-us-form" >
                <table width="100%">
                    <thead> Feel free to contact me! </thead>
                    <tbody>
                        <tr>
                                <td>
                                    <p id="name-span-container" >
                                        <label>Your name</label>
                                    </p>
                                    <input name='name' type='text' id="name" ></input>
                                </td>
                        </tr>
                        
                        <tr>
                            <td> 
                                <p id="email-span-container">
                                    <label>Your email address</label>
                                </p>
                                    <input name='email' type='text' id="email" ></input>
                                    <p className={`errorMsg ${notValidEmail ? 'showError' : 'hideError'}`} id="email-span-container" >
                                        Please enter a valid email address
                                    </p>
                                    {/* className={`errorMsg round-lg ${this.state.valid ? '' : 'error'}`} */}
                            </td>
                        </tr>

                        <tr>
                            <td> 
                                <p id="usermessage-span-container">
                                    <label>Your message</label>
                                </p>
                                    <input name='message' type='text' id="message" ></input>
                            </td>
                        </tr>

                        <tr>
                            <input type="button" name="contactSubmit" value="Submit" id="submit-btn" onClick={ e => handleSubmit(e) }/>
                        </tr>

                    </tbody>
                </table>
            </form>
        </section>
        </>
    )
}

export default Contact