import React from 'react';

function Alert(props) {
    return (
        <div className={`${props.message.length == 0 ? 'hidden' : 'show'} row mt-3`}>
            <p style={{ textAlign: 'center' }} className={`${props.message === 'Tudo certo!' ? 'bg-success' : 'bg-info'} text-white py-2`}>{props.message}</p>
        </div>
    );
}

export default Alert;