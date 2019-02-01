import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuAppBar extends React.Component {
    state = {
        anchorEl: null,
        selectedRole: null
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    handleProfessor = () => {
        localStorage.setItem("staffLogged", "Professor");
        this.setState({ selectedRole: "Professor" });
    };
    handleMentor = () => {
        localStorage.setItem("staffLogged", "Mentor");
        this.setState({ selectedRole: "Mentor" });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl, selectedRole } = this.state;
        const open = Boolean(anchorEl);
        const menuLabel = (selectedRole === null ) ? "stranger" : selectedRole;
        const staffMember = (localStorage.getItem("staffLogged"));
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Odin
                        </Typography>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                Hi, { (staffMember) ? staffMember : menuLabel }!
                            </Typography>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleProfessor}>Professor</MenuItem>
                                <MenuItem onClick={this.handleMentor}>Mentor</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);