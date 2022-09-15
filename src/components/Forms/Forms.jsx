
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

/*Importacion Css*/
import "../../Css/Forms.css"


export function validate(input) {

    const error = {};
    if (!input.email) {
        error.email = 'Por favor, escribe tu email';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        error.email = 'formato de email inválido, por favor, revisar';
    }
    return error;
};

export default function Form() {

    const [input, setInput] = useState({
        email: '',
    })
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }


    const handleClick = (e) => {
        e.preventDefault()
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        if (input.email === "" || Object.entries(errors).length > 0) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa el formulario',
                icon: 'error',
                timer: 1000,
            })
            return
        } else if (Object.entries(errors).length === 0) {
            Swal.fire({
                text: '!Felicidades! Te inscribiste correctamente',
                icon: 'success',
                timer: 2000,
            })
            setInput({
                email: "",
            })
        }
    }

    return ( 
    <form >
        <div>
        <input type = "text" name = "email"onChange = { handleInputChange }placeholder = "ingresa tu email" value = {input.email}/>
         <FontAwesomeIcon icon = { faArrowRightLong } onClick = { handleClick } className="icons" /> 
         
         </div > 
         
         <div > 
            {errors.email && ( 
            <p className='parrafo_form' > { errors.email } </p>)
        } </div> 
        </form >
    )
}