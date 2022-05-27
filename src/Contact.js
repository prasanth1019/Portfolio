import React from "react";

const Contact = () => {
    const[name, setName] = React.useState('Prasanth R');
    
    const handleSubmit = (event) => {

        const name = event.target[0].value;
        const emailID = event.target[1].value;
        const message = event.target[2].value;

        window.location = "mailto:prasanthram1019@ymail.com?subject=Message from " + name + "&body= My message is " + message +"%0D%0A%0D%0A%0D%0A Regards, %0D%0A" + name + ", %0D%0A " + emailID
    }

    return (
        <>
        <section id="contactus" className="" >
            <form onSubmit={ e => handleSubmit(e) } id="contact-us-form" >
                <table width="100%">
                    <thead> Feel free to contact me! </thead>
                    <tbody>
                        <tr>
                                <td>
                                    <p id="name-span-container" >
                                        <label>Your name</label>
                                    </p>
                                    <input name='name' type='text' ></input>
                                </td>
                        </tr>
                        
                        <tr>
                            <td> 
                                <p id="email-span-container">
                                    <label>Your email address</label>
                                </p>
                                    <input name='email' type='text' ></input>
                            </td>
                        </tr>

                        <tr>
                            <td> 
                                <p id="usermessage-span-container">
                                    <label>Your email address</label>
                                </p>
                                    <input name='email' type='text' ></input>
                            </td>
                        </tr>

                        <tr>
                            <input type="submit" name="contactSubmit" value="Submit" id="submit-btn" />
                        </tr>

                    </tbody>
                </table>
            </form>
        </section>
        </>
    )
}

export default Contact