import { useState } from "react"
import Button from "../util/Button"
import Input from "../util/Input"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const AddUserForm = ({ onCancel }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [postal, setPostal] = useState('')
    const [company, setCompany] = useState('')

    const [nameTouched, setNameTouched] = useState(false)
    const [ageTouched, setAgeTouched] = useState(false)
    const [emailTouched, setEmailTouched] = useState(false)
    const [phoneTouched, setPhoneTouched] = useState(false)
    const [countryTouched, setCountryTouched] = useState(false)
    const [cityTouched, setCityTouched] = useState(false)
    const [streetTouched, setStreetTouched] = useState(false)
    const [postalTouched, setPostalTouched] = useState(false)
    const [companyTouched, setCompanyTouched] = useState(false)

    const nameValid = name.trim().length > 0
    const ageValid = age.trim().length > 0
    const emailValid = email.trim().length > 0
    const phoneValid = phone.trim().length > 0
    const countryValid = country.trim().length > 0
    const cityValid = city.trim().length > 0
    const streetValid = street.trim().length > 0
    const postalValid = postal.trim().length > 0
    const companyValid = company.trim().length > 0

    const onSubmit = (e) => {
        e.preventDefault()

        setNameTouched(true)
        setAgeTouched(true)
        setEmailTouched(true)
        setPhoneTouched(true)
        setCountryTouched(true)
        setCityTouched(true)
        setStreetTouched(true)
        setPostalTouched(true)
        setCompanyTouched(true)

        if (nameValid && ageValid && emailValid && phoneValid && countryValid && cityValid && streetValid && postalValid && companyValid) {
            // send request
        }
    }


    return (
        <div className="add-user">
            <header>
                <button onClick={onCancel}>
                    <CloseRoundedIcon />
                </button>
                <p>کاربر جدید</p>
            </header>
            <form dir="rtl">
                <div className="avatar-container">
                    <div className="avatar">
                        <img src="assets/images/Service-Verification.svg" alt="avatar icon" />
                    </div>
                </div>
                <div className="form-frame">
                    <div className={"form-building " + (nameTouched && !nameValid && 'invalid')}>
                        <label htmlFor="name">نام کاربر</label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="نام کاربر جدید را وارد کنید"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            onBlur={() => setNameTouched(true)}
                        />
                    </div>
                    <div className={"form-building " + (ageTouched && !ageValid && 'invalid')}>
                        <label htmlFor="age">سن</label>
                        <Input
                            id="age"
                            type="text"
                            placeholder="سن کاربر جدید را وارد کنید"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            onBlur={() => setAgeTouched(true)}
                        />
                    </div>
                </div>
                <div className="form-frame">
                    <div className={"form-building " + (emailTouched && !emailValid && 'invalid')}>
                        <label htmlFor="email">ایمیل</label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="ایمیل کاربر جدید را وارد کنید"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onBlur={() => setEmailTouched(true)}
                        />
                    </div>
                    <div className={"form-building " + (phoneTouched && !phoneValid && 'invalid')}>
                        <label htmlFor="phone">شماره تلفن</label>
                        <Input
                            id="phone"
                            type="text"
                            placeholder="شماره کاربر جدید را وارد کنید"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            onBlur={() => setPhoneTouched(true)}
                        />
                    </div>
                </div>
                <div className="form-frame">
                    <div className={"form-building " + (countryTouched && !countryValid && 'invalid')}>
                        <label htmlFor="country">کشور</label>
                        <Input
                            id="country"
                            type="text"
                            placeholder="نام کشور"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                            onBlur={() => setCountryTouched(true)}
                        />
                    </div>
                    <div className={"form-building " + (cityTouched && !cityValid && 'invalid')}>
                        <label htmlFor="city">شهر</label>
                        <Input
                            id="city"
                            type="text"
                            placeholder="نام شهر"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            onBlur={() => setCityTouched(true)}
                        />
                    </div>
                    <div className={"form-building " + (streetTouched && !streetValid && 'invalid')}>
                        <label htmlFor="street">خیابان</label>
                        <Input
                            id="street"
                            type="text"
                            placeholder="نام خیابان"
                            value={street}
                            onChange={e => setStreet(e.target.value)}
                            onBlur={() => setStreetTouched(true)}
                        />
                    </div>
                    <div className={"form-building " + (postalTouched && !postalValid && 'invalid')}>
                        <label htmlFor="postal-code">کد پستی</label>
                        <Input
                            id="postal-code"
                            type="text"
                            placeholder="کد"
                            value={postal}
                            onChange={e => setPostal(e.target.value)}
                            onBlur={() => setPostalTouched(true)}
                        />
                    </div>
                </div>
                <div className="form-frame">
                    <div className={"form-building " + (companyTouched && !companyValid && 'invalid')}>
                        <label htmlFor="company">شرکت</label>
                        <Input
                            id="company"
                            type="text"
                            placeholder="نام شرکت کاربر جدید را وارد کنید"
                            value={company}
                            onChange={e => setCompany(e.target.value)}
                            onBlur={() => setCompanyTouched(true)}
                        />
                    </div>
                </div>
                <div className="controls">
                    <Button className="cancel" onClick={onCancel}>لغو</Button>
                    <Button className="confirm" onClick={onSubmit}>تایید</Button>
                </div>
            </form>
        </div>
    )
}

export default AddUserForm