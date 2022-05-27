import Typewriter from 'typewriter-effect';

const Typewriters = props => {

    // var tww = document.getElementById('tw');

    // var typewriter = new Typewriter(tww, {
    //     loop: true,
    //     delay: 100,
    // });

    // typewriter
    // .typeString('<strong> Prasanth Ramanathan </strong>')
    // .start();

        return (
            <>
            {/* <div style={{"fontSize": "4em"}} id="tw"></div>
             */}
                <div style={{"fontSize": "6em", "paddingTop": "2em", "color": "#ffffff"}} >
                <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('I\'m Prasanth Ramanathan')
                            .start();
                        }}
                        />
                </div>

            <h3 style={{"color": "#ffffff"}} >Working as a senior front-end engineer. Experienced in client side technologies. <br/> Exposure to server side technologies.</h3>
            </>
        )
}

export default Typewriters