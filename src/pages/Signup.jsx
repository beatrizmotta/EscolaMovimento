import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'
import Alert from '../components/Alert';
import Input from '../components/Input';
import logo from '../static/logo.svg'
import './Signup.css'

function Signup(props) {

    const [classes_options, setClassesOptions] = useState('')
    useEffect(() => {
        axios.get('http://localhost:9091/classes')
            .then(response => {
                let classes_options_data = response.data.classes
                console.log(classes_options_data)
                let cl = classes_options_data.map(classe => <option value={classe.name}>{classe.name}</option>)
                setClassesOptions(cl)
            })
    }, [])



    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    
    const [profId, setProfId] = useState('')
    const [professor, setProf] = useState(false)

    const [classe, setClasse] = useState('')
    
    //Checking
    const [msg, setMsg] = useState('')

    function handleSubmit() {
        if (professor) {
            if (profId <= 0) {
                setMsg('Por favor, insira um ID.')
            } else {

                axios.post('http://localhost:9091/professor/signup', {
                    name: `${firstName} ${secondName}`,
                    email: email,
                    password: password,
                    professorId: profId,
                    classes: classe
                })
                .then(response => console.log(response.data))
            }
            } else if (!professor) {
                axios.post('http://localhost:9091/student/signup', {
                    name: `${firstName} ${secondName}`,
                    email: email,
                    password: password
                })
                .then(response => console.log(response.data))
            }
        }

    async function handlePassword(e) {
        await setPassword(e.target.value)
    }

    async function handleConfirmPassword(e) {
        await setConfirmPassword(e.target.value)
    }

    async function handleProfessorInformation(e) {
        await setProfId(Number(e.target.value))
    }

    async function handleBlur() {
        let results = await password === confirm_password
        results ? setMsg('Tudo certo!') : setMsg('As senhas não batem.')
    }

    async function handleEmail(e) {
        await setEmail(e.target.value)
    }

    function confirmEmail() {
        let results = email.includes('@')
        setMsg(`${results ? 'Tudo certo!' : 'Por favor, insira um e-mail válido.'}`)
    }

    function handleProfessor() {
        setProf(!professor)
    }

    function handleClass(e) {
        console.log(e.target.value)
    }

    return (
        <div className="container login d-flex flex-column align-items-center h-100">
            <div className="row logo m-0 p-0">
                <Link to="/" className="m-0 p-0">
                    <img src={logo} alt="Logo" className="w-100" height="60" />
                </Link>
            </div>

            <div className="row credentials 
            px-sm-5 py-sm-4 px-3 py-3 shadow rounded">
                <div className="container">
                    <Link to="/"><i className="fa fa-arrow-left fa-lg goBack"></i></Link>
                    <div className="row" style={{ fontSize: '1.4em' }}>
                        Nome
                    </div>
                    <div className="row">
                        <input type="text" onChange={(e) => { setFirstName(e.target.value) }} placeholder="Primeiro Nome" className="col-sm-4 py-2" />
                        <input type="text" onChange={(e) => { setSecondName(e.target.value) }} placeholder="Segundo Nome" className="col-sm-4 py-2 mx-sm-2" />
                        <input type="checkbox" onChange={() => {handleProfessor()}} className="col-sm-2 align-self-center px-0" />
                        <label htmlFor="professor" className="px-0 col-sm-1 align-self-center">Professor?</label>
                    </div>
                    <div className="row" style={{ fontSize: '1.4em' }}>
                        Email
                    </div>
                    <Input class="py-2" placeholder="E-mail" changeFunction={handleEmail} blurFunction={confirmEmail}/>
                    <div className={`row ${professor ? 'show' : 'hidden'}`} style={{ fontSize: '1.4em' }}>
                        Professor ID
                    </div>
                    <div className={`row ${professor ? 'show' : 'hidden'}`}>
                        <input type="text" onChange={(e) => { handleProfessorInformation(e) }} placeholder="ID" className="py-2 email" />
                    </div>
                    <div className={`row ${professor ? 'show' : 'hidden'}`} style={{ fontSize: '1.4em' }}>
                        Matéria
                    </div>
                    <div className={`row ${professor ? 'show' : 'hidden'}`}>
                        <select name="" id="" onBlur={(e) => {handleClass(e)}}>
                            {classes_options}
                        </select>
                    </div>
                    <div className="row" style={{ fontSize: '1.4em' }}>
                        Senha
                    </div>
                    <Input class="py-2" inputType="password" placeholder="Senha" changeFunction={handlePassword} blurFunction={() => {}}/>
                    <div className="row" style={{ fontSize: '1.4em' }}>
                        Confirme sua senha
                    </div>
                    <Input class="py-2" inputType="password" placeholder="Confirme sua senha" changeFunction={handleConfirmPassword} blurFunction={handleBlur}/>

                    <Alert message={msg}/>
                    <div className={`row ${msg.length == 0 ? 'mt-2' : 'mt-0'}`}>
                        <button onClick={() => {handleSubmit()}} className="py-2 text-white shadow-sm">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;