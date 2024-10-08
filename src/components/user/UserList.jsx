import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import DataTable from "../util/DataTable"
import Pagination from "../util/Pagination"
import { useDispatch, useSelector } from "react-redux"
import { selectAllData, selectQuery, selectShowData, setAllData, setShowData } from "../../store/slices/data"
import LoadingSpinner from "../util/LoadingSpinner"

const labels = {
    name: { translation: 'نام کاربر' , sortable: true},
    age: { translation: 'سن', sortable: false },
    phone: { translation: 'شماره تلفن', sortable: false },
    email: { translation: 'ایمیل', sortable: false },
    address: { translation: 'آدرس', sortable: true },
    company: { translation: 'شرکت', sortable: true },
}

const searchRecords = (data, query) => {
    const lowerCaseQuery = query.toLowerCase()

    return data.filter(record => {
        return Object.keys(record).some(key => {
            return String(record[key]).toLowerCase().includes(lowerCaseQuery)
        })
    })
}

const UserList = () => {
    const { data: requestData, loading, error, sendRequest } = useApi()
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10
    const dispatch = useDispatch()
    const allData = useSelector(selectAllData)
    const showData = useSelector(selectShowData)
    const query = useSelector(selectQuery)

    useEffect(() => {
        sendRequest('https://63c2988fe3abfa59bdaf89f6.mockapi.io/users', { method: 'GET' })
    }, [])

    useEffect(() => {
        if (requestData) {
            dispatch(setAllData(requestData.map(item => ({
                id: item.id,
                name: item.name || '...' || '...',
                age: item.age || '...',
                phone: item.phoneNumber || '...',
                email: item.email || '...',
                address: [item.country, item.city, item.street].join(', ') || '...',
                company: item.company || '...'
            }))))
        }
        if (error) {
            console.log('error is', error)
        }
    }, [requestData, error])

    useEffect(() => {
        const matchedRecords = searchRecords(allData, query)
        dispatch(setShowData(matchedRecords))
    }, [allData, query])

    // pagination

    const indexOfLastItem = currentPage * pageSize
    const indexOfFirstItem = indexOfLastItem - pageSize
    const currentData = showData.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(showData.length / pageSize)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    if (loading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <div className="center-container">
            <p>There was an error!</p>
        </div>
    }

    return (
        <>
            <DataTable labels={labels} data={currentData} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    )
}

export default UserList