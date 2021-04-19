import React from 'react'

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Web developer</h3>
                            </div>
                        </div>
                        {/*- */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Web designer</h3>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Developer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </h1>
        </div>
    )
}

export default Services
