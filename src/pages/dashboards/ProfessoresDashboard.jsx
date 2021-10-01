import React, {useEffect, useState} from 'react';
import Main from './Main';

function ProfessoresDashboard(props) {
    return (
        <Main entity="professores" />
    );
}

export default ProfessoresDashboard;


// function ProfessoresDashboard(props) {

//     const [professors, setProfessors] = useState()
//     const [element, selectElement] = useState()
//     const [id, setId] = useState()


//     function handleClick(el, ev) {
//         selectElement(ev.target)
//         setId(el._id)
//     }

//     useEffect(() => {
//         axios.get('http://localhost:9091/professores')
//         .then(response => {
//             let data = response.data.professores
//             let table_rows = data.map(professor => 
//             <tr id={professor.name} onClick={(e) => {handleClick(professor, e)}}>
//                 <td className="px-2 py-2">
//                     {professor.name}
//                     <small> - {professor.email}</small>    
//                 </td>
//             </tr>)
//             setProfessors(table_rows)
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

//     return(
//         <div className="container shadow professores py-2" style={{backgroundColor: 'white', borderRadius: '0 0 0.25em 0.25em'}}>
//             <h2>Professores</h2>
//             <hr className="mt-0"/>
//             <ul>
//                 <li><button>Adicionar</button></li>
//                 <li><button>Alterar</button></li>
//                 <li><button>Remover</button></li>
//             </ul>
//             <table className="shadow-sm">
//                 {professors}
//             </table>
//             <br />
//         </div>
//     )
    
// }

// export default ProfessoresDashboard;