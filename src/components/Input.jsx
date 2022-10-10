import React, { Component } from 'react';

class Input extends Component {
    render() {
        const {id, type, name, label, onChange, value, ...otherProps} = this.props
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input
                    type={type}
                    id={id}
                    name={name}
                    onChange={onChange}
                    value={value}
                    {...otherProps}
                />
            </div>
        );
    }
}

export default Input;

