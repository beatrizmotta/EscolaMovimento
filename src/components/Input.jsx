import React from 'react';

function Input(props) {
    return (
        <div className={`row`}>
            <input type={props.inputType} 
            placeholder={props.placeholder}
            onChange={(e) => {props.changeFunction(e)}}
            onBlur={(e) => {props.blurFunction(e)}}
            className={props.class}
            />
        </div>
    );
}

export default Input;