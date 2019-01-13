import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import data from '../Data/data';
import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from 'react-share';


import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

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
        this.state = {
            home: true,
            about: false,
            brands: false,
            contact: false,

        }
    }


    render() {
        const {classes} = this.props;

        return (
            <main className={'mt-5'}>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                        {data.map(data => (
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
                                                    <a href={data.description}>Description here</a> : data.description}
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

                            );
                        }
                        }

                        BrandsAndDesigners.propTypes = {
                        classes: PropTypes.object.isRequired,
                    };

                        export default withStyles(styles)(BrandsAndDesigners);