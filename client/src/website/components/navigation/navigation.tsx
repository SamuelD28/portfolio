import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <nav id="colorlib-main-nav" role="navigation">
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
                <div className="js-fullheight colorlib-table">
                    <div className="colorlib-table-cell js-fullheight">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="search" placeholder="Enter any key to search..." />
                                    <button type="submit" className="btn btn-primary"><i className="icon-search3"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul>
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="services.html">Services</a></li>
                                    <li><a href="work.html">Work</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="head-title">Works</h2>
                                <a href="images/work-1.jpg" className="gallery image-popup-link text-center" style={{ backgroundImage: 'url(images/work-1.jpg)' }}>
                                    <span><i className="icon-search3"></i></span>
                                </a>
                                <a href="images/work-2.jpg" className="gallery image-popup-link text-center" style={{ backgroundImage: 'url(images/work-2.jpg)' }}>
                                    <span><i className="icon-search3"></i></span>
                                </a>
                                <a href="images/work-3.jpg" className="gallery image-popup-link text-center" style={{ backgroundImage: 'url(images/work-3.jpg)' }}>
                                    <span><i className="icon-search3"></i></span>
                                </a>
                                <a href="images/work-4.jpg" className="gallery image-popup-link text-center" style={{ backgroundImage: 'url(images/work-4.jpg)' }}>
                                    <span><i className="icon-search3"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}