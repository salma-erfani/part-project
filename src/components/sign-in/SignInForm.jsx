import { useState } from "react"
import Button from "../util/Button"
import Input from "../util/Input"
import { useDispatch } from "react-redux"
import { login } from "../../store/slices/user"
import { useNavigate } from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let formValid = username.trim().length > 0 && password.trim().length > 0

    let icon = showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />

    const togglePasswordVisibility = (e) => {
        e.preventDefault()
        setShowPassword(prev => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formValid) {
            dispatch(login(username))
            navigate('/dashboard')
        }
    }

    return (
        <div className="form-container">
            <img src="assets/images/chingal-logo.png" alt="chingal logo" />
            <div className="form-title">
                <h2>ورود به پنل چینگال</h2>
            </div>
            <form>
                <div className="form-building">
                    <label htmlFor="username">نام کاربری</label>
                    <Input
                        id="username"
                        type="text"
                        placeholder="نام کاربری خود را وارد کنید"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-building">
                    <label htmlFor="password">رمز عبور</label>
                    <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="رمز عبور خود را وارد کنید"
                        icon={icon}
                        onClick={togglePasswordVisibility}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <Button className={"text-button " + (!formValid && 'invalid')} onClick={handleSubmit}>ورود به سپهر</Button>
            </form>
        </div>
    )
}

export default SignInForm