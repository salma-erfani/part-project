import { Route, Routes } from "react-router-dom"
import UserList from "./UserList"
import EditUser from "./EditUser"

const Users = () => {
    return (
        <Routes>
            <Route path="/" element={<UserList />} />
            <Route path=":id/edit" element={<EditUser />} />
        </Routes>
    )
}

export default Users