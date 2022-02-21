import React from "react"
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form"
import { required } from "../../utils/validators/validators"
import s from './FormControls.module.css'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }/* { meta, child, ...props } */) => {

    const showError = touched && error

    return (
        <div className={s.formControl + ' ' + (showError ? s.error : '')}>
            <div>
                {children}
            </div>
            {showError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
export const createField = (placeholder: string | null, name: string, validators: any, component: any, props: any = {}, text: string = '') => <div>
    <Field placeholder={placeholder}
        validate={validators}
        name={name}
        component={component}
        {...props} />
</div>