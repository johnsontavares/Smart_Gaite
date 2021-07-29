import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'

// import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

const Routes = () => {

    return(
        <BrowserRouter>

            <Sidebar />
            <Route component={CreatePoint} path="/create-point" />

        </BrowserRouter>
     );
}

export default Routes