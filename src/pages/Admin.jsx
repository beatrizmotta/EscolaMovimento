import React, {useState, useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css'
import logo from '../static/logo.svg'
import Alert from '../components/Alert'

function Admin(props) {

    const [rg, setRG] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const {authConfig} = useContext(AuthContext)
    const [auth, setAuth] = authConfig

    let history = useHistory()

    function handleSubmit() {
        axios.post('http://localhost:9091/admin/login', {
            rg: rg,
            password: password
        })
        .then(response => {
            if (response.data.status === 'OK') {
                setMsg('Tudo certo!')
                setAuth({status: true, user_data: response.data.user_data})
                setTimeout(() => {
                    history.push('/admin/profile')
                })
            } else {
                setMsg('Algo de errado.')
                setAuth({status: false})
            }
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
                        RG
                    </div>
                    <div className="row">
                        <input onChange={(e) => {setRG(Number(e.target.value))}} type="text" name="" id="" placeholder="RG" className="py-2"/>
                    </div>
                    <div className="row" style={{fontSize: '1.4em'}}>
                        Senha
                    </div>
                    <div className="row">
                        <input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Senha" className="py-2" />
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

export default Admin;