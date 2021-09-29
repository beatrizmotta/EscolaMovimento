import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';

function AlunosDashboard(props) {
    
    const {authConfig} = useContext(AuthContext)
    const [auth, setAuth] = authConfig

    useEffect(() => {
        console.log(auth.user_data)
    })

    return (
        <div className="container">
            <h1>Alunos</h1>
        </div>
    );
}

export default AlunosDashboard;