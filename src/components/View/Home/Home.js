import React from 'react';
import Nav from '../../components/Nav/nav';
import Footer from "../../components/Footer/Footer";
// import  bImage from "/img/Amalia_final_internet.jpg";

const style = {
    backgroundImage: "url(/img/Amalia_final_internet.jpg)",
    height: "1400px",
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    width: "1300px",
    // backgroundImage: url( bImage ),
    // backgroundSize: 'cover',
    // overflow: 'hidden',
};


export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <main className={'mt-5 pt-4 d-flex justify-content-center'}>
                    <div   style={style}>

                    </div>
                </main>
                <Footer />
            </div>
        )
    }

}