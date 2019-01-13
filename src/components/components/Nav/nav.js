import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Header from "../Header/Header";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link } from 'react-router-dom'
import navbarsStyle from "../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle";
import CustomDropdown from "../CustomDropdown/CustomDropdown";


class Nav extends React.Component{
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    brand="Amalia"
                    rightLinks={
                        <List className={classes.list}>
                            <ListItem className={classes.listItem}>
                                <Link
                                    to={"/home"}
                                    className={classes.navLink + " " + classes.navLinkActive}
                                    color="transparent"
                                    value={'home'}
                                >
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Link
                                    name={"about"}
                                    to={"/about"}
                                    className={classes.navLink}
                                    color="transparent"
                                >
                                    About
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Link
                                    name={"about"}
                                    to={"/brands"}
                                    className={classes.navLink}
                                    color="transparent"
                                >
                                    Brands and Designers
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Link
                                    to="/contact"
                                    className={classes.navLink}
                                    // onClick={this.update}
                                    color="transparent"
                                >
                                    Contact
                                </Link>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <CustomDropdown
                                    buttonText="Language"
                                    buttonProps={{
                                        className: classes.navLink,
                                        color: "transparent"
                                    }}
                                    dropdownList={[
                                        "EN",
                                        "AM",
                                        "RU",

                                    ]}
                                    hoverColor={"info"}
                                />
                            </ListItem>
                        </List>
                    }
                    fixed
                    color="white"
                    {...rest}
                />
            </div>
        )
    }
}


export default withStyles(navbarsStyle)(Nav);
