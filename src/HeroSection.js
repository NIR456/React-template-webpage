import React from "react";
const HeroSection = () =>{
    return(
    <div>
       <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                
                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />
                
                <h1 className="masthead-heading text-dark text-uppercase mb-0">shopping with amazon/special discount</h1>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
        
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row">
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/cake.png" alt="" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/circus.png" alt="" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/game.png" alt="" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/safe.png" alt="" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/portfolio/submarine.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
    
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div classname="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 ml-auto"><p className="lead">  Online payments are swift and convenient. They allow you to buy products and services from all over the world. If you are a seller, you can sell to anyone in the world with a decent internet connection. Your customer doesn't even need to have a computer; a smartphone is enough.   </p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                </div>
        
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-danger" href=" http://wwww.amazon.com">
                    <i className="fas fa-download mr-2"></i>
                        SHOPPING VIA AMAZON
                    </a>
                </div>
            </div>
        </section>
        
        <section className="page-section" id="contact">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

                <div Name="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>
    );
};
export default HeroSection;