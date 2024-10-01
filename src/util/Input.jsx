const Input = ({ id, type, placeholder, value, onChange, iconPath, isEnglish, onClick }) => {
    return (
        <div className="input-container">
            <input
                className="input"
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
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