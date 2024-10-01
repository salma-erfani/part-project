const Input = ({ id, type, placeholder, value, onChange, onBlur, iconPath, isEnglish, onClick }) => {
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
            {iconPath &&
                <button className="icon" onClick={onClick}>
                    <img src={iconPath} alt="input icon" />
                </button>
            }
        </div>
    )
}

export default Input