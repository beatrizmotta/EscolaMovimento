import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Alert from '../components/Alert'
import axios from 'axios'
import logo from '../static/logo.svg'
import './Login.css'

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [msg, setMsg] = useState('')

    let history = useHistory()

    axios.defaults.withCredentials = true

    function handleSubmit() {
        axios.post('http://localhost:9091/login', {
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response.data)
            console.log(Object.entries(response.data).length)
            if (Object.entries(response.data).length == 2) {
                history.push('/profile')
            } else {
                switch (response.data.code) {
                    case 401:
                        setMsg('Usuário não cadastrado.')
                        break
                    case 400:
                        setMsg('Senha está incorreta.')
                        break
                    default:
                        setMsg('Algo ocorreu de errado.')
                }
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container login d-flex flex-column align-items-center h-100">
            <div className="row logo m-0 p-0">
                <Link to="/" className="m-0 p-0">
                        <img src={logo} alt="Logo" className="w-100" height="60" />
                </Link>
            </div>
            <div className="row credentials px-5 shadow rounded">
                <div className="container">
                    <Link to="/"><i className="fa fa-arrow-left fa-lg goBack"></i></Link>
                    <div className="row" style={{fontSize: '1.4em'}}>
                        Email
                    </div>
                    <div className="row">
                        <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="email" className="py-2" />
                    </div>
                    <div className="row" style={{fontSize: '1.4em'}}>
                        Senha
                    </div>
                    <div className="row">
                        <input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="senha" className="py-2" />
                    </div>
                    <Alert message={msg}/>
                    <div className="row mt-3">
                        <button onClick={() => {handleSubmit()}} className="py-2 text-white shadow-sm">Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;