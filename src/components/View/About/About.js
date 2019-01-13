import React from 'react';
import Nav from '../../components/Nav/nav';
import Footer from "../../components/Footer/Footer";

export default class About extends React.Component {

    render() {
        return (
            <div className={"container"}>
                <Nav/>
                <main className={'mt-5 p-5'}>
                    <div className={'p-5 text-center'}>
                        <p >Amalia Jewelry Magazine was created in 2016. The purpose of the magazine is to present
                            jewelry companies, as well as author&#39;s, handmade and vintage works. The magazine contains a
                            lot of photos and videos of great jewelry from around the world. Companies and designers have
                            a unique opportunity to publish their works on the pages of the magazine.
                            <br/><br/><br/>
                            Журнал ювелирных изделий Амалия создан в 2016 году. Целью журнала является
                            представление ювелирных компаний, а также авторских, хэндмейд и винтажных работ. В
                            журнале приводится множество фотографий и видеороликов великолепных ювелирных
                            изделий со всего мира. Компании и дизайнеры имеют уникальную возможность
                            опубликовать свои работы на страницах журнала.</p>
                    </div>
                </main>
                <Footer />
            </div>

        )
    }

}