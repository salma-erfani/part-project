import { useEffect, useState } from "react"
import useApi from "../../hooks/useApi"
import EditUserForm from "./EditUserForm"
import { useParams } from "react-router-dom"
import LoadingSpinner from "../util/LoadingSpinner"

const EditUser = () => {
    const { id } = useParams()
    const { data, loading, error, sendRequest } = useApi()
    const [user, setUser] = useState(null)

    useEffect(() => {
        sendRequest(`https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`, {method: 'GET'})
    }, [])

    useEffect(() => {
        if (data) {
            setUser({
                id: data.id,
                name: data.name,
                age: data.age,
                phone: data.phoneNumber,
                email: data.email,
                country: data.country,
                city: data.city,
                street: data.street,
                postal: data.zipcode,
                company: data.company
            })
        }
        if (error) {
            console.log(error)
        }
    }, [data, error])

    if (loading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <div className="center-container">
            <p>There was an error!</p>
        </div>
    }

    return (
        <div className="center-container">
            {user && <EditUserForm user={user} />}
        </div>
    )
}

export default EditUser