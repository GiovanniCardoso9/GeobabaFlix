import React from 'react'

function FormField({label, name, type , values, onChange}) {
  console.log(type)
    return (
        <div>
          <label>
            {label}: 
            <input
              type={type}
              name={name}
              values={values}
              onChange={onChange}
            />
          </label>
        </div>
    )
}


export default FormField