import ErrorMessage from './ErrorMessage';
import Label from './Label';

type InputProps = {
    id: string,
    name: string,
    value?: string,
    label?: string
    error?: string
}

const Input = ({ id, name, value, label, error }: InputProps) => {
    return (
    <div className={`govuk-form-group ${!!error && 'govuk-form-group--error'}`}>
        { label && <Label text={ label } inputID={ id } />}
        { error && <ErrorMessage text={ error } />}
        <input className={`govuk-input ${!!error && 'govuk-input--error'}`} id={ id } name={ name } type="text" value={ value } />
    </div>
    )
}

export default Input