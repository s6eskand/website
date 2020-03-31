import React from "react";
import Typical from 'react-typical';

class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <h1 style={{position: 'absolute', top: '200px', left: '100px',color: '#f9f9f9', fontSize: '3rem', textShadow: '1px 1px 10px #000'}}>
                    Sam Eskandar,
                    <br/>
                    Dedicated{' '}
                    <Typical
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
            </section>
        )
    }
}

export default Header;