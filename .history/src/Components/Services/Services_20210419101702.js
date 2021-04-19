import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';


const Services = () => {
    return (
        <div className="services">
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Web developer</h3>
                                <p>
                                    My websites will be build with an new proven technologies.
                                    </p>
                                    
                            </div>
                        </div>
                        {/*- */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Facebook and Social Media</h3>
                                <p>
                                    My websites will be build with an new proven technologies.
                                    </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Google Ads</h3>
                                <p>
                                    My websites will be build with an new proven technologies.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
