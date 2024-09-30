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
                    <UserList />
                </div>
            </main>
        </div>
    )
}

export default Dashboard