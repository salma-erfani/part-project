import "./App.scss"
import Dashboard from "./layout/Dashboard"
import SignIn from "./sign-in/SignIn"
import AddUser from "./user/AddUser"

const App = () => {
    return (
        <>
            {/* <SignIn /> */}
            <Dashboard />
            <AddUser />
        </>
    )
}

export default App