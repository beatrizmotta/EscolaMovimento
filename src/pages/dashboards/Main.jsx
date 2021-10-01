import React, { useState, useEffect } from 'react';
import {SelectContext} from '../../contexts/SelectContext'
import Alterar from '../../components/Alterar';
import Adicionar from '../../components/Adicionar';
import Remover from '../../components/Remover';
import axios from 'axios'
import $ from 'jquery'

function Main(props) {
    const [entity, setEntity] = useState()
    const [element, selectElement] = useState()
    const [id, setId] = useState()

    const [popup, setPopup] = useState()

    function handleClick(el, ev) {
        selectElement(ev.target)
        setId(el._id)
    }

    function alterar() {
        if (id == undefined) {
            setPopup(<h1>Please insert</h1>)
        } else {
            setPopup(<Alterar type={props.entity}/>)
        }
    }
    function remover() {
        if (id == undefined) {
            setPopup(<h1>Please insert</h1>)
        } else {
            setPopup(<Remover type={props.entity} />)
        }
    }
    function adicionar() {
        if (id == undefined) {
            setPopup(<h1>Please insert</h1>)
        } else {
            setPopup(<Adicionar type={props.entity} />)
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:9091/${props.entity}`)
        .then(response => {
            $(response.data).children().get(0)
            let data = response.data[props.entity]
            let table_rows = data.map(entity => 
            <tr id={entity.name} onClick={(e) => {handleClick(entity, e)}}>
                <td name={entity.name} email={entity.email} className="px-2 py-2">
                    {entity.name}
                    <small>{'' || ` - ${entity.email}`}</small>
                </td>
            </tr>)
            setEntity(table_rows)
        })
    }, [])

    useEffect(() => {
        if (!element == 0) {
            let table = $(element).parent().parent().children()
            $(element).addClass('outlined')
            Array.from(table).forEach(entity => {
                let td = $(entity).children().get(0)
                if (td !== element) {
                    $(td).removeClass('outlined')
                } 
            })
        } else {

        }
    }, [element])

    return (
        <SelectContext.Provider value={{id_: [id, setId], element_: [element, selectElement], confirm_: [popup, setPopup]}}>
        <div className="container shadow classes py-2" style={{backgroundColor: 'white', borderRadius: '0 0 0.25em 0.25em'}}>
            <h2>{props.entity.slice(0, 1).toUpperCase() + props.entity.slice(1)}</h2>
            <hr className="mt-0"/>
            <ul>
                <li><button onClick={() => {adicionar()}}>Adicionar</button></li>
                <li><button onClick={() => {alterar()}}>Alterar</button></li>
                <li><button onClick={() => {remover()}}>Remover</button></li>
            </ul>
            <table className="shadow-sm">
                {entity}
            </table>
            <br />
            {popup}
        </div>
        </SelectContext.Provider>
    );
}


export default Main;