import Button from "../util/Button"
import Input from "../util/Input"

const SignInForm = () => {
    let showPassword = true

    let iconPath = showPassword ? "assets/images/Eye-Slash.svg" : "assets/images/Eye.svg"

    return (
        <div className="form-container">
            <img src="assets/images/chingal-logo.png" alt="chingal logo" />
            <div className="form-title">
                <h2>ورود به پنل چینگال</h2>
            </div>
            <form>
                <div className="form-building">
                    <label htmlFor="username">نام کاربری</label>
                    <Input id="username" type="text" placeholder="نام کاربری خود را وارد کنید" />
                </div>
                <div className="form-building">
                    <label htmlFor="password">رمز عبور</label>
                    <Input id="password" type="password" placeholder="رمز عبور خود را وارد کنید" iconPath={iconPath} />
                </div>
                <Button className="text-button">ورود به سپهر</Button>
            </form>
        </div>
    )
}

export default SignInForm