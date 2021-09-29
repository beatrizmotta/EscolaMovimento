import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import logo from '../static/logo-white.svg'
import axios from 'axios';
import {AuthContext} from '../contexts/AuthContext'
import './Profile.css'

import Table from '../components/Table';
import MobileTable from '../components/MobileTable';

function Profile(props) {
    const {authConfig, user} = useContext(AuthContext)
    const [auth] = authConfig

    const [credentials, setCredentials] = useState('')

    
    useEffect(() => {
        axios.get('http://localhost:9091/login')
            .then((res) => {
                console.log(res.data)
                setCredentials({...res.data})
            }) 
        axios.get('http://localhost:9091/classes')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const colors = ['#BBFDA4', '#7BE7FF', '#FF8F77', '#C8ACF5', '#FDCF58']

    if (1 + 1 == 2) {
        return (
            <div className="w-100">
                <div className="nav-bar container-fluid py-2">
                    <div className="row p-0 my-0">
                        <span className="col-4 p-0 col-md-4 align-self-center">
                            <img src={logo} className="img" width="240" alt="Logo" />
                        </span>
                        <i className="fa fa-ellipsis-v align-self-center col-1 d-md-none" />
                        <ul className="d-none d-md-flex col-md-4">
                            <li>Contato</li>
                            <li>Configurações</li>
                        </ul>
                    </div>
                </div>
                <div className="dashboard container py-3 px-3 shadow-sm">
                    <div className="row first-row mx-lg-auto">
                        <div className="col-lg-7 col-12 calendar shadow-sm">
                            <h6 className="pt-2" style={{fontSize: '1.2em'}}><b>SETEMBRO</b></h6>
                            <Table />
                            <MobileTable />
                        </div>
                        <div className="col-lg-1 col-0 space p-0 m-0"></div> 
                        <div className="col-lg-4 week-calendar shadow-sm">
                            <h6 className="pt-2" style={{fontSize: '1.2em'}}><b>ESSA SEMANA</b></h6>
                            <div className="comp">
                                <p>Seg - <b>(22/09)</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div>
                <h1>404 - Não autorizado</h1>
                <Link to="/">Voltar</Link>
            </div>
        )
    }
}

export default Profile;