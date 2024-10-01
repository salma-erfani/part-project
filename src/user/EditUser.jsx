import Button from "../util/Button"
import Input from "../util/Input"

const EditUser = () => {
    return (
        <div className="edit-user">
            <header>
                <p>ویرایش کاربر</p>
            </header>
            <form dir="rtl">
                <div className="avatar-container">
                    <div className="avatar">
                        <img src="assets/images/Service-Verification.svg" alt="avatar icon" />
                    </div>
                </div>
                <div className="form-frame">
                    <div className="form-building">
                        <label htmlFor="name">نام کاربر</label>
                        <Input id="name" type="text" placeholder="نام جدید را وارد کنید" />
                    </div>
                    <div className="form-building">
                        <label htmlFor="age">سن</label>
                        <Input id="age" type="text" placeholder="سن جدید را وارد کنید" />
                    </div>
                </div>
                <div className="form-frame">
                    <div className="form-building">
                        <label htmlFor="email">ایمیل</label>
                        <Input id="email" type="email" placeholder="ایمیل جدید را وارد کنید" />
                    </div>
                    <div className="form-building">
                        <label htmlFor="phone">شماره تلفن</label>
                        <Input id="phone" type="text" placeholder="شماره جدید را وارد کنید" />
                    </div>
                </div>
                <div className="form-frame">
                    <div className="form-building">
                        <label htmlFor="country">کشور</label>
                        <Input id="country" type="text" placeholder="نام کشور" />
                    </div>
                    <div className="form-building">
                        <label htmlFor="city">شهر</label>
                        <Input id="city" type="text" placeholder="نام شهر" />
                    </div>
                    <div className="form-building">
                        <label htmlFor="street">خیابان</label>
                        <Input id="street" type="text" placeholder="نام خیابان" />
                    </div>
                    <div className="form-building">
                        <label htmlFor="postal-code">کد پستی</label>
                        <Input id="postal-code" type="text" placeholder="کد" />
                    </div>
                </div>
                <div className="form-frame">
                    <div className="form-building">
                        <label htmlFor="company">شرکت</label>
                        <Input id="company" type="text" placeholder="نام شرکت جدید را وارد کنید" />
                    </div>
                </div>
                <div className="controls">
                    <Button className="confirm">ویرایش</Button>
                    <Button className="delete">حذف</Button>
                </div>
            </form>
        </div>
    )
}

export default EditUser