import React from 'react'
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom';
import {Main} from "@/pages/main";

class Router extends React.PureComponent {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default Router;
