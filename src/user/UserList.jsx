import DataTable from "../util/DataTable"

const labels = {
    name: 'نام کاربر',
    age: 'سن',
    phone: 'شماره تلفن',
    email: 'ایمیل',
    address: 'آدرس',
    company: 'شرکت'
}

const data = [
    {
        id: 1,
        name: 'نام کاربر',
        age: 'سن',
        phone: 'شماره تلفن',
        email: 'ایمیل',
        address: 'آدرس',
        company: 'شرکت'
    },
    {
        id: 2,
        name: 'نام کاربر',
        age: 'سن',
        phone: 'شماره تلفن',
        email: 'ایمیل',
        address: 'آدرس',
        company: 'شرکت'
    },
    {
        id: 3,
        name: 'نام کاربر',
        age: 'سن',
        phone: 'شماره تلفن',
        email: 'ایمیل',
        address: 'آدرس',
        company: 'شرکت'
    }
]

const UserList = () => {
    return (
        <DataTable labels={labels} data={data} />
    )
}

export default UserList