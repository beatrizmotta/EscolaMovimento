import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import ProfessoresDashboard from './dashboards/ProfessoresDashboard';
import AlunosDashboard from './dashboards/AlunosDashboard'
import ClassesDashboard from './dashboards/ClassesDashboard'
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../static/logo.svg'
import './AdminProfile.css'

function AdminProfile(props) {

    const { authConfig } = useContext(AuthContext)
    const [auth, setAuth] = authConfig

    const [pageName, setPageName] = useState('Professores')
    const [page, setPage] = useState(<ProfessoresDashboard />)

    useEffect(() => {
        setPage(() => {
            switch (pageName) {
                case ('Professores'):
                    return <ProfessoresDashboard />
                case ('Alunos'):
                    return <AlunosDashboard />
                case ('Classes'):
                    return <ClassesDashboard />
                default:
                    return <ProfessoresDashboard />
            }
        })
    }, [pageName])

    useEffect(() => {
        axios.get('http://localhost:9091/admin')
            .then(response => {
                if (response.data.adminIn) {
                    setAuth({status: true, user_data: response.data.admin})
                }
            })
            .catch(err => {
                console.log(err)
            })
    })

    function handleChange(e) {
        setPageName(e.target.value)
    }

    if (auth === undefined || auth == false) {
        return (
            <div>
                <h1>Error 404</h1>
            </div>
        )
    } else if (auth.status) {
        return(
            <div>
            <div className="container" style={{display: 'flex', justifyContent: 'center', minWidth:'350px', maxWidth: '500px'}}>
                <img src={logo} alt="" />
            </div>
            <div className="container bg-white rounded shadow mt-3">
                <div className="row nav" style={{borderRadius: '0.25em 0.25em 0 0'}}>
                    <select onChange={(e) => {handleChange(e)}} style={{maxWidth: '350px'}} className="shadow-sm my-3 mx-3" name="" id="">
                        <option value="Professores">Professores</option>
                        <option value="Classes">Classes</option>
                        <option value="Alunos">Alunos</option>
                    </select>
                </div>
            </div>
            <div>
                {page}
            </div>
            <div>
                <br />
            </div>
        </div >
        )
    }
}
        

export default AdminProfile;