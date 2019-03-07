import React from 'react'

export default () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="row text-center">
                    <h2 className="bold">Contact</h2>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-0 text-center intro-heading">
                        <span>Contact</span>
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="rotate">
                            <h2 className="heading">Contact</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-0">
                        <div className="row">
                            <div className="col-md-4">
                                <h3>My Address</h3>
                                <ul className="contact-info">
                                    <li><span><i className="icon-map5"></i></span>88 West 21th Street, Suite 721 New York NY 10016</li>
                                    <li><span><i className="icon-phone4"></i></span>+ 1235 2355 98</li>
                                    <li><span><i className="icon-envelope2"></i></span><a href="#">info@yoursite.com</a></li>
                                    <li><span><i className="icon-globe3"></i></span><a href="#">www.yoursite.com</a></li>
                                </ul>
                            </div>
                            <div className="col-md-7 col-md-push-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="" className="form-control" id="" cols={30} rows={7} placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="submit" value="Send Message" className="btn btn-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
