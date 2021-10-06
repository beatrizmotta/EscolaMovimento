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
    const [password, setPassword] = useState()

    const [horariosOptions, setHorariosOptions] = useState()

    useEffect(() => {
        axios.get('http://localhost:9091/horarios/')
        .then(response => {
            console.log(response.data)
        })
        .catch(e => {
            console.log(e)
        })
    }, [])


    function handleSubmit() {
        const data = {
            name: name,
            email: email,
            password: password,
            classes: [1, 2]
        }
        axios.post(`http://localhost:9091/${props.type}/signup`, data)
        .then(response => {
            console.log(response.data)
        })
        console.log(name)
        console.log(password)
        console.log(email)
    }

    if (props.type === 'alunos' || props.type === 'professores') {
        return (
            <>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h4 style={{
                padding: '8px 15px',
                textDecoration: 'underline'
            }}>Adicionar</h4>
            <input onChange={(e) => {setName(e.target.value)}} className="mb-2 mt-1 px-2 py-1" style={{minWidth: '215px', fontSize: '1.09em'}} type="text" placeholder="Nome" autoComplete={false} name="" id="" />
            <input onChange={(e) => {setEmail(e.target.value)}} className="mb-2 px-2 py-1" style={{minWidth: '215px', fontSize: '1.09em'}} type="email" name="" id="" autoComplete={false} placeholder="E-mail" />
            <input onChange={(e) => {setPassword(e.target.value)}} className="mb-2 px-2 py-1" style={{minWidth: '215px', fontSize: '1.09em'}} type="password" name="" id="" autoComplete={false} placeholder="Senha" />
            <div className="buttons" style={{
                width: '200px',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <button style={{backgroundColor: '#dbdbdb', color: 'black'}}
                onClick={() => {setPopup('')}}>Cancelar</button>
                <button onClick={() => {handleSubmit()}}>Confirmar</button>
            </div>
        </div>
        <br />
        </>
    );
    } else if (props.type === 'classes') {
        return (
            <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h4 style={{
                    padding: '8px 15px',
                    textDecoration: 'underline'
                }}>Adicionar</h4>
                <div style={{backgroundColor: 'yellowgreen'}}>
                <label style={{display: 'inline-block', fontSize: '1.15em'}} htmlFor="">Dia</label>
                <select style={{display: 'inline-block', borderRadius: '0', border: '2px solid black', fontSize: '1.15em', minWidth: '150px'}}>
                    <option value="">Segunda</option>
                    <option value="">Terça</option>
                    <option value="">Quarta</option>
                    <option value="">Quinta</option>
                    <option value="">Sexta</option>
                    <option value="">Sábado</option>
                </select>
                </div>
                <div>
                <label htmlFor="" style={{display: 'inline-block'}}>Horário</label>
                <select name="" id="" style={{display: 'inline-block', border: '2px solid black'}}>
                    <option value="">07:00</option>
                    <option value="">07:50</option>
                    <option value="">08:40</option>
                    <option value="">10:30</option>
                    <option value="">11:20</option>
                    <option value="">12:10</option>
                </select>
                </div>
                <div className="buttons" style={{
                    width: '200px',
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    <button style={{backgroundColor: '#dbdbdb', color: 'black'}}
                    onClick={() => {setPopup('')}}>Cancelar</button>
                    <button onClick={() => {handleSubmit()}}>Confirmar</button>
                </div>
            </div>
            <br />
            </>
        )
    }
}

export default Adicionar;