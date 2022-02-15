import React from 'react'
import './inputGroup.css'

function InputGroup({label, type, name, placeholder, value, onChange, ref, errorMsg}) {
    return (
        <div className="inputGroup">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type? type : "text"}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                ref={ref}
            />
            {errorMsg ? <div className="errorMsg">{errorMsg}</div> : null}
        </div>
    )
}

export default InputGroup
