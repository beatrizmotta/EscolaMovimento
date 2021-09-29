import './App.css';
import React, {useEffect, useState} from 'react'
import {AuthContext} from './contexts/AuthContext'
import {BrowserRouter as Router, Route, Link, Switch, useHistory} from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import '../node_modules/font-awesome/css/font-awesome.css'
import axios from 'axios';
import Admin from './pages/Admin';
import AdminProfile from './pages/AdminProfile';

function App() {
    
    const [auth, setAuth] = useState()
    const [userData, setUserData] = useState() 

    axios.defaults.withCredentials = true 

    useEffect(() => {
        axios.get('http://localhost:9091/login')
            .then((res) => {
                console.log(res.data)
                setUserData(res.data)
            })
    }, [])

    return (
        <AuthContext.Provider value={{authConfig: [auth, setAuth], user: [userData, setUserData]}}>
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/cadastro" component={Signup}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/admin/profile" component={AdminProfile} />
                </Switch>
            </Router>
        </div>
        </AuthContext.Provider>
    );
}

export default App;
