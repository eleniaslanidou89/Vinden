import React, { Component } from 'react';
import { Grid } from 'react-mdl';
//import { render } from '@testing-library/react';

class landingpage extends Component {
    render() {
        return(
            
            <div >
                <Grid className="landing-grid">
                            <h1>Simple, cheap & smart
                                 storage in Stockholm & Oslo! </h1>
                            <h2>Do you need to rent storage space for furniture or something else? We pick-up, store and return - whenever you want. Order right here, through our app - or call customer service.</h2>  
                 </Grid> 
                 <Grid className="landing-grid">
                 <div className="social-links">
                                {/*linkedIn*/}
                                <a href="https://www.linkedin.com/company/vinden/"  rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/*facebook*/}
                                <a href=""  rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-facebook-square"></i>
                                </a>
                                {/*instagram*/}
                                <a href="https://www.instagram.com/vinden_storage/"  rel="noopener noreferrer" target="_blank">
                                <i class="fab fa-instagram"></i>
                                </a>
                            </div>  
                 </Grid> 
            </div>  
        )
    }
}

export default landingpage;

