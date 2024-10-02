import { useEffect, useState } from "react"
import Button from "../util/Button"
import Input from "../util/Input"
import useApi from "../../hooks/useApi"
import { useNavigate, useParams } from "react-router-dom"
import LoadingSpinner from "../util/LoadingSpinner"

const EditUserForm = ({ user }) => {
    const { data: deleteData, loading: deleteLoading, error: deleteError, sendRequest: sendDelete } = useApi()
    const navigate = useNavigate()
    const { id } = useParams()

    const [name, setName] = useState(user.name || '')
    const [age, setAge] = useState(user.age || '')
    const [email, setEmail] = useState(user.email || '')
    const [phone, setPhone] = useState(user.phone || '')
    const [country, setCountry] = useState(user.country || '')
    const [city, setCity] = useState(user.city || '')
    const [street, setStreet] = useState(user.street || '')
    const [postal, setPostal] = useState(user.postal || '')
    const [company, setCompany] = useState(user.company || '')

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

    const onDelete = (e) => {
        e.preventDefault()
        sendDelete(`https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`, { method: 'DELETE' })
    }

    useEffect(() => {
        if (deleteData) {
            console.log('deleted!')
            navigate('/dashboard/users')
        }
        if (deleteError) {
            console.log('error is', deleteError)
        }
    }, [deleteData, deleteError])

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
                <div className={"form-building " + (nameTouched && !nameValid && 'invalid')}>
                    <div className="form-building">
                        <label htmlFor="name">نام کاربر</label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="نام جدید را وارد کنید"
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
                            placeholder="سن جدید را وارد کنید"
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
                            placeholder="ایمیل جدید را وارد کنید"
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
                            placeholder="شماره جدید را وارد کنید"
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
                    <Button className="confirm" onClick={onSubmit}>ویرایش</Button>
                    <Button className="delete" onClick={onDelete}>
                        {deleteLoading ? <LoadingSpinner size={25} /> : "حذف"}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default EditUserForm