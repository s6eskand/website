import React from "react";
import Typical from 'react-typical';
import vid from '../media/header.gif';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="myheader" style={{position: 'relative', zIndex: '10'}}>
                    <img src={vid} alt="my coding setup" style={{minHeight: '100%'}}/>
                    <h1 className="header-text">
                        Sam Eskandar,
                        <br/>
                        Dedicated{' '}
                        <Typical style={{position: 'absolute'}}
                            steps={[
                                'Software Developer',
                                2000,
                                'Designer',
                                2000,
                                'Web Developer',
                                2000,
                                'Student',
                                1000,
                                'Worker',
                                1000,
                                'Friend',
                                1000,
                            ]}
                            loop={Infinity}
                            wrapper='i'
                        />
                    </h1>
                </div>
            </header>
        )
    }
}

export default Header;