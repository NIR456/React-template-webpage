import React from "react";

const Footer = () =>{
    return(
      <div>
         <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            village-Parsrma , Raghopur (Supaul)
                            <br />
                            Bihar ,PIN-852111
                        </p>
                    </div>
                    
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About shoopimg</h4>
                        <p class="lead mb-0">
                            if you purchase any product from amazon and payment with my payment apps then you will get extra discount !!!
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            
                        </p>
                    </div>
                </div>
            </div>
        </footer>
          
      </div>
    );
};
export default Footer;