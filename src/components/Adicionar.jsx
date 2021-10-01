import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import { SelectContext } from '../contexts/SelectContext';

function Adicionar(props) {

    const {id_, element_, confirm_} = useContext(SelectContext)
    const [element, selectElement] = element_
    const [id, setId] = id_
    const [popup, setPopup] = confirm_

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h4 className="shadow-sm" style={{
                backgroundColor: 'rgba(26, 71, 71, 0.459)',
                padding: '8px 15px',
                borderRadius: '0.30em'
            }}>Adicionar</h4>
            <input className="mb-2 mt-3 px-2 py-1" style={{minWidth: '215px', fontSize: '1.09em'}} type="text" placeholder={'Nome'} autoComplete={false} name="" id="" />
            <label><input type="checkbox" name="" id="" />Professor</label>
            <input className="mb-2 px-2 py-1" style={{minWidth: '215px', fontSize: '1.09em'}} type="email" name="" id="" autoComplete={false} placeholder={email} />
            <input className="mb-2 px-2 py-1" style={{minWidth: '215px', fontSize: '1.09em'}} type="password" name="" id="" autoComplete={false} placeholder="Senha" />
            <div className="buttons" style={{
                width: '200px',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <button style={{backgroundColor: '#dbdbdb', color: 'black'}}
                onClick={() => {setPopup('')}}>Cancelar</button>
                <button>Confirmar</button>
            </div>
        </div>
        <br />
        </>
    );
}

export default Adicionar;