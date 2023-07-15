import "./styles.css"

const FormInput = ({ label, onChange, id, ...inputProps }) =>
    <div className="formInput">
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} />
    </div>

export default FormInput