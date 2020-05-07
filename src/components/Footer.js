import React from 'react';

class Footer extends React.Component{
    render() {
        return(
            <footer className="mojFooter" style={{textAlign: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                <div className="container">
                    <div style={{padding: '10px 0 0 0', textAlign: 'center'}}>
                        <p> &copy; Copyright Sam Eskandar 2020</p>
                    </div>
                    <div className="bottom-footer">
                        <div className="col-md-12">
                            <ul className="footer-nav">
                                <li>s6eskand@uwaterloo.ca</li>
                                <li>sam.eskandar00@hotmail.com</li>
                                <li>University of Waterloo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;