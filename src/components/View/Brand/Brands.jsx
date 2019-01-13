import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';



import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import data from '../../Data/data';




import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/Footer";

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


class BrandsAndDesigners extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props.match.params.brand);
    }
    brend(data) {
        return data.brand === this.props.match.params.brand;
    }


    render() {
        const {classes} = this.props;
        const brand = data.filter(item => item.brend.toLowerCase()===this.props.match.params.brand);
        console.log(brand[0].data);
        console.log(data[0].brend);

        return (
            <div>
                <Nav/>
                <main className={'mt-5'}>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        <Grid container spacing={40}>
                            {brand[0].data.map(data => (
                                <Grid item key={data.id} sm={6} md={4} lg={3}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                // src={require(data.url)}
                                                image={data.url} // eslint-disable-line max-len

                                            />

                                            <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {data.name}
                                                </Typography>
                                                <Typography type={"subtitle1"}>
                                                    <div className={"dddd"} style={sss}>
                                                        {data.href ?
                                                            <a href={data.description}>Description
                                                                here</a> : data.description}
                                                    </div>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </main>
                <Footer />
            </div>

        );
    }
}

BrandsAndDesigners.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrandsAndDesigners);