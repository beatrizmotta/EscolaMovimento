import React from 'react';
import Main from './Main';

function ClassesDashboard(props) {
    return (
        <Main entity="classes" />
    );
}

export default ClassesDashboard;
// import React, {useEffect, useState} from 'react';
// import $ from 'jquery'
// import axios from 'axios';


// function ClassesDashboard(props) {
    

//     const [classes, setClasses] = useState()
//     const [element, selectElement] = useState()
//     const [id, setId] = useState()


//     function handleClick(el, ev) {
//         selectElement(ev.target)
//         setId(el._id)
//     }

//     useEffect(() => {
//         axios.get('http://localhost:9091/classes')
//         .then(response => {
//             console.log(
//                 Object.entries(response.data)[0][0]
//             )
//             let data = response.data.classes
//             let table_rows = data.map(classe => 
//             <tr id={classe.name} onClick={(e) => {handleClick(classe, e)}}>
//                 <td className="px-2 py-2">
//                     {classe.name}   
//                 </td>
//             </tr>)
//             setClasses(table_rows)
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
//         <div className="container shadow classes py-2" style={{backgroundColor: 'white', borderRadius: '0 0 0.25em 0.25em'}}>
//             <h2>Classes</h2>
//             <hr className="mt-0"/>
//             <ul>
//                 <li><button>Adicionar</button></li>
//                 <li><button>Alterar</button></li>
//                 <li><button>Remover</button></li>
//             </ul>
//             <table className="shadow-sm">
//                 {classes}
//             </table>
//             <br />
//         </div>
//     );
// }

// export default ClassesDashboard;