const Button = ({ children, className, onClick }) => {
    return (
        <button className={"button " + className}>{children}</button>
    )
}

export default Button