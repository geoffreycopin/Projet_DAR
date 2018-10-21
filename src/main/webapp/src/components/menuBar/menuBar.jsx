import React from 'react';
import {withRouter} from 'react-router-dom'

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import {AppContext} from '../../pages/app';
import {USER_TOKEN} from '../../globals'

class MenuBar extends React.Component {
    render() {
        let menuButtonStyle = {
            marginRight: 16
        };

        let labelStyle = {
            flexGrow: 1
        }

        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography style={labelStyle} variant="h6">
                        SuperSeries
                    </Typography>
                    <AppContext.Consumer>
                        {(context) => <RoutedUserArea {...context}/>}
                    </AppContext.Consumer>
                </Toolbar>
            </AppBar>
        );
    }
}

class UserArea extends React.Component {
    render() {
        if (this.props[USER_TOKEN] === "") {
            return ([
                <Button onClick={() => this.props.history.push('/login')}>
                    Login
                </Button>,
                <Button>
                    Sign up
                </Button>
            ]);
        } else {
            return (
                <IconButton onClick={() => this.props.setUserToken("")}>
                    <AccountCircle/>
                </IconButton>
            );
        }
    }
}

const RoutedUserArea = withRouter(UserArea);

export default MenuBar;