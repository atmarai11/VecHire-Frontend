import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Register from '../body/register';
import Login from '../body/login';
import Home from '../home/home';
import Admin from '../admin/admin';
import ProfessionalReq from '../professional/professionalReq'
import Professionals from '../professional/professionals'
import HireRequest from '../hireRequest/hireRequest';
import ShowPro from '../professional/showPro'
import MyRequest from '../myRequest/myRequest'
import Work from '../categories/work';

const WorkRoute = (props)=>{
    return (
        <React.Fragment>
            <Switch>
                <Route path = "/" component={Home} exact></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/admin" component={Admin}></Route>
                <Route path="/category" component={Work}></Route>
                <Route path="/requestForProfessional" component={ProfessionalReq}></Route>
                <Route path="/professional/:pid" component={Professionals}></Route>
                <Route path="/showPro/:pid" component={ShowPro}></Route>
                <Route path="/myHireRequest" component={HireRequest}></Route>
                <Route path="/showMyRequest" component={MyRequest}></Route>
            
                {/* <Route path='/update/:id' component={}></Route> */}
            </Switch>
        </React.Fragment>
    )
}

export {WorkRoute};