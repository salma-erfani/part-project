import { useEffect } from 'react'

const Toast = ({ message, type, onClose }) => {
    const duration = 5000

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, duration)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`toast ${type}`}>
            <p>{message}</p>
        </div>
    )
}

export default Toast
