/* VALIDACIÓN DE FORMULARIOS 
DE REGISTRO Y LOGIN */

import t from 'tcomb-form-native';

export default formValidation = {
    email: t.refinement(t.String, (s) => { //t.string es el tipo de dato s es el dato que llega del formulario
        return /@/.test(s); //validación incluye arroba
    }),
    password: t.refinement(t.String, (s) => {
        return s.length >= 6; //mayor a 6 caracteres
    })
};
