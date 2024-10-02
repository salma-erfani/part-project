import { Navigate, Route, Routes } from "react-router-dom"
import UserList from "./UserList"
import EditUser from "./EditUser"
import NotFoundPage from "../layout/NotFoundPage"

const Users = () => {
    return (
        <Routes>
            <Route path="/" element={<UserList />} />
            <Route path=":id/edit" element={<EditUser />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default Users