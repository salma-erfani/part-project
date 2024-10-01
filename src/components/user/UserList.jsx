import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
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
    const { data: requestData, loading, error, sendRequest } = useApi()
    const [data, setData] = useState([])

    useEffect(() => {
        sendRequest('https://63c2988fe3abfa59bdaf89f6.mockapi.io/users', { method: 'GET' })
    }, [])

    useEffect(() => {
        if (requestData) {
            setData(requestData.map(item => ({
                id: item.id,
                name: item.name || '...' || '...',
                age: item.age || '...',
                phone: item.phoneNumber || '...',
                email: item.email || '...',
                address: [item.country, item.city, item.street].join(', ') || '...',
                company: item.company || '...'
            })))
        }
        if (error) {
            console.log('error is', error)
        }
    }, [requestData, error])

    return (
        <DataTable labels={labels} data={data} />
    )
}

export default UserList