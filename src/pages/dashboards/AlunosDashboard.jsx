import React, {useContext, useEffect, useState} from 'react';
import $ from 'jquery'
import axios from 'axios';
import Main from './Main';
import { AuthContext } from '../../contexts/AuthContext';

function AlunosDashboard(props) {
    return (
        <Main entity="alunos"/>
    );
}
export default AlunosDashboard;


// function AlunosDashboard(props) {
    
//     const {authConfig} = useContext(AuthContext)
//     const [auth, setAuth] = authConfig

//     const [alunos, setAlunos] = useState()
//     const [element, selectElement] = useState()
//     const [id, setId] = useState()


//     function handleClick(el, ev) {
//         selectElement(ev.target)
//         setId(el._id)
//     }

//     useEffect(() => {
//         axios.get('http://localhost:9091/alunos')
//         .then(response => {
//             let data = response.data.alunos
//             let table_rows = data.map(alunos => 
//             <tr id={alunos.name} onClick={(e) => {handleClick(alunos, e)}}>
//                 <td className="px-2 py-2">
//                     {alunos.name}
//                     <small> - {alunos.email}</small>    
//                 </td>
//             </tr>)
//             setAlunos(table_rows)
//         })
//     }, [])

//     useEffect(() => {
//         if (!element == 0) {
//             let table = $(element).parent().parent().children()
//             $(element).addClass('outlined')
//             Array.from(table).forEach(person => {
//                 let td = $(person).children().get(0)
//                 if (td !== element) {
//                     $(td).removeClass('outlined')
//                 } 
//             })
//         } else {

//         }
//     }, [element])

//     return (
//         <div className="container shadow alunos py-2" style={{backgroundColor: 'white', borderRadius: '0 0 0.25em 0.25em'}}>
//             <h2>Alunos</h2>
//             <hr className="mt-0"/>
//             <ul>
//                 <li><button>Adicionar</button></li>
//                 <li><button>Alterar</button></li>
//                 <li><button>Remover</button></li>
//             </ul>
//             <table className="shadow-sm">
//                 {alunos}
//             </table>
//             <br />
//         </div>
//     );
// }

// export default AlunosDashboard;