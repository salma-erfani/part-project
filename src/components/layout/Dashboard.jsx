import { Outlet, useLocation, useParams } from "react-router-dom"
import EditUser from "../user/EditUserForm"
import UserList from "../user/UserList"
import ContentHeader from "./ContentHeader"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useState } from "react"
import AddUser from "../user/AddUser"

const Dashboard = () => {
    const { pathname } = useLocation()
    const [showAddModal, setShowAddModal] = useState(false)

    return (
        <div className="dashboard">
            <Navbar includeSearchBar={pathname === '/dashboard/users'} />
            <main>
                <Sidebar />
                <div className="content">
                    <ContentHeader includeAddButton={pathname === '/dashboard/users'} onClickAdd={() => setShowAddModal(true)} />
                    <Outlet />
                    {showAddModal &&
                        <AddUser onCancel={() => setShowAddModal(false)} />
                    }
                </div>
            </main>
        </div>
    )
}

export default Dashboard