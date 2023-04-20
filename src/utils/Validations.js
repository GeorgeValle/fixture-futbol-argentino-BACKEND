import * as yup from 'yup';

// validations for create Team
const createTeamValidation = (data) => {
    const schema = yup.object().shape({
        // name: yup.string().min(5).matches(/^[a-z]+$/).required()
        name: yup
            .string('El campo Nombre debe ser un string')
            .min(5, 'El campo Nombre debe tener como mínimo 5 caracteres de longitud')
            .required('El campo Nombre es obligatorio'),
        
                
    })
    schema.validateSync(data)
}


export {
    createTeamValidation,
}