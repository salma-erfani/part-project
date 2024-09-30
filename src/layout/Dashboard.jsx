import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <main>
                <Sidebar />
                <div className="content">content</div>
            </main>
        </div>
    )
}

export default Dashboard