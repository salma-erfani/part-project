import { Outlet } from "react-router-dom"
import EditUser from "../user/EditUser"
import UserList from "../user/UserList"
import ContentHeader from "./ContentHeader"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <main>
                <Sidebar />
                <div className="content">
                    <ContentHeader />
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Dashboard