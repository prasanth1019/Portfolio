// import {Testimonialsw} from '../public/Testimonials.webp';

const Testimonials = () => {
    return (
        <>
        <section id="testimonials-section" className="" >
            <article id="testimonials-main-container" >
                <h3 style={{"text-align":"left", "margin-left": "3%", "color": "#ff0000" }} >My customers</h3>
                <p style={{"text-align":"left", "margin-left": "3%", "color": "#333", "font-size": "35px", "font-weight": "bolder" }} > Testimonials </p>
                <div id="testimonials-explaination-container">
                    <div id="testimonials-explaination-left-container" >
                        My core values are at the heart of all that I do. They are integrated into my daily work lives and help me to remember my customers
                        always comes first, the last thank you should always come from me.
                    </div>
                    <div>

                    </div>
                </div>

                <div id="user-recommendation-container" >
                    <div className="card">
                        <div className="card-info">
                            <p className="text-body">
                                As a frontend developer, Prasanth has worked with us and developed many webpages. 
                                    For the chatbot application, Prasanth has provided a nice dashboard with all the micro service status, usage metrics, graphs in single page using React js.
                                    One personal trait i liked a lot with Prasanth is his keen observation of requirement and exceeding the expectation in delivery. 
                                I strongly recommend Prasanth for web development.
                            </p>
                            <p className="text-title">Vignesh Muthu.S</p>
                        </div>
                    </div>
                
                    <div className="card">
                        <div className="card-info">
                            <p className="text-body">
                                Prasanth is a great developer who has the passion it requires to work in Front-end Development. 
                                He is someone who manages time effectively and sets a productivity clock within himself and always does more than the expectation. 
                                He really inspires those around him, and having him is not just about work, but he brings the fun element which is much needed. 
                                He is everything that a great company can hope for in an employee, being quick to learn, easy to deal with and a dedicated person, 
                                I would highly recommend Prasanth. It was a great experience working with him!
                            </p>
                            <p className="text-title">Stephen Marshall</p>
                        </div>
                    </div>
                
                    <div className="card">
                        <div className="card-info">
                            <p className="text-body">
                                Comming Soon!
                            </p>
                            <p className="text-title">Author</p>
                        </div>
                    </div>

                </div>
            </article>
        </section>
        </>
    )
}

export default Testimonials