import React from 'react';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';
import data from '../../Data/data';
import {withStyles} from '@material-ui/core/styles';
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/Footer";
import {Link} from "react-router-dom";

const sss = {
    maxHeight: '60px',
    overflow: 'hidden',
};
const styles = theme => ({
    bgpic: {
// backgroundImage: URL('./logo.svg')
    },
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});


class Brands extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.match.params.brand);
    }


    render() {
        const {classes} = this.props;

        return (
            <div>
                <Nav/>
                <main className={'mt-5 "d-flex justify-content-center"'}>
                    <div className={classNames(classes.layout, classes.cardGrid)} >
                        <Grid container spacing={40}>
                            <ul className={"list-group list-group-flush"}>
                            {data.map(data => (
                                <li className={"list-group-item"} key={data.id} sm={6} md={4} lg={3}>
                                    <Link to={"/brand/" + data.brend.toLowerCase()}>
                                        {data.brend}
                                    </Link>
                                </li>))}
                            </ul>
                        </Grid>
                    </div>
                </main>
                <Footer/>
            </div>

        );
    }
}


export default withStyles(styles)(Brands);