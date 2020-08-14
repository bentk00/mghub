import React from 'react';

const Field = (
    {
        name,
        label,
        value,
        onChange,
        placeholder = "",
        type = "text",
        error = "",
        small = '',
        success = false,
        required = false
    }) =>
    (
        <>
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input type={type}
                       value={value}
                       onChange={onChange}
                       placeholder={placeholder || label}
                       name={name}
                       id={name}
                       required={required}
                       className={"form-control" + (success ? " is-valid" : "") +  (error && " is-invalid") + (small && " form-control-sm")}
                />
                {error && <p className="invalid-feedback">{error}</p>}
                {success && <p className="valid-feedback"/>}
            </div>
        </>
    );

export default Field;
