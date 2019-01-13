import React from 'react';
import Nav from '../../components/Nav/nav';
import Footer from "../../components/Footer/Footer";

export default class Contact extends React.Component {

    render() {
        return (
            <div className={"container"}>
                <Nav/>
                <main className={'mt-5'}>
                    <div className={'pt-5'}>
                        <h2>Contact</h2>
                        <br/>
                        Email:  <a href={"mailto:jewelry.amalia@gmail.com"}>  jewelry.amalia@gmail.com</a>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

}