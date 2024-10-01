const Input = ({ id, type, placeholder, value, onChange, onBlur, icon, isEnglish, onClick }) => {
    return (
        <div className="input-container">
            <input
                className="input"
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                dir={!isEnglish && 'rtl'}
            />
            {icon &&
                <button className="icon" onClick={onClick}>
                    {icon}
                </button>
            }
        </div>
    )
}

export default Input