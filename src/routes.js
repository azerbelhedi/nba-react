import React , { Component } from 'react'
import { Route , Switch } from 'react-router-dom'

import Home from './components/home/home'

class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route exact path = "/" component = {Home} />
            </Switch>   
        )
    }
}

export default Routes