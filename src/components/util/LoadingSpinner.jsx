const LoadingSpinner = ({ size = 60 }) => {
    const spinnerStyle = {
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${size / 8}px`
    }

    return (
        <div className="spinner-container">
            <div className="loading-spinner" style={spinnerStyle}></div>
        </div>
    )
}

export default LoadingSpinner
