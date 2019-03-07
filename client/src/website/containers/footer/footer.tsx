import React from 'react'

export default () => {
    return (
        <footer>
            <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-pb-sm">
                            <div className="row">
                                <div className="col-md-10">
                                    <h2>Let's Talk</h2>
                                    <p>A small river named Duden flows by their place and supplies.</p>
                                    <p><a href="#">noah@info.com</a></p>
                                    <p className="social-icons">
                                        <a href="#"><i className="icon-facebook4"></i></a>
                                        <a href="#"><i className="icon-twitter3"></i></a>
                                        <a href="#"><i className="icon-googleplus"></i></a>
                                        <a href="#"><i className="icon-dribbble2"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-pb-sm">
                            <h2>Latest Blog</h2>
                            <div className="f-entry">
                                <a href="#" className="featured-img" style={{ backgroundImage: 'url(images/img-1.jpg)' }}></a>
                                <div className="desc">
                                    <span>February 15, 2018</span>
                                    <h3><a href="#">Art Gallery in Japan</a></h3>
                                </div>
                            </div>
                            <div className="f-entry">
                                <a href="#" className="featured-img" style={{ backgroundImage: 'url(images/img-2.jpg)' }}></a>
                                <div className="desc">
                                    <span>February 9, 2018</span>
                                    <h3><a href="#">A Japanese Constellation</a></h3>
                                </div>
                            </div>
                            <div className="f-entry">
                                <a href="#" className="featured-img" style={{ backgroundImage: 'url(images/img-3.jpg)' }}></a>
                                <div className="desc">
                                    <span>February 15, 2018</span>
                                    <h3><a href="#">Road Trip</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-pb-sm">
                            <h2>Newsletter</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                            <div className="subscribe text-center">
                                <div className="form-group">
                                    <input type="text" className="form-control text-center" placeholder="Enter Email address" />
                                    <input type="submit" value="Subscribe" className="btn btn-primary btn-custom" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
