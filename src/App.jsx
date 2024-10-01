import "./styles/App.scss"
import SignIn from "./components/sign-in/SignIn"
import { useSelector } from "react-redux"
import { selectUsername } from "./store/slices/user"
import { useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./components/layout/Dashboard"
import UserList from "./components/user/UserList"
import EditUser from "./components/user/EditUser"
import NotFoundPage from "./components/layout/NotFoundPage"

const App = () => {
    const username = useSelector(selectUsername)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={username ? <Navigate to='/dashboard' replace /> : <Navigate to='/sign-in' replace />} />
                <Route path="/not-found" element={<NotFoundPage />} />
                {!username &&
                    <Route path="/sign-in" element={<SignIn />} />
                }
                {username &&
                    <Route
                        path="/dashboard/*"
                        element={
                            <Routes>
                                <Route element={<Dashboard />}>
                                    <Route index element={<UserList />} />
                                    <Route path="edit-user" element={<EditUser />} />
                                </Route>
                            </Routes>
                        }
                    />
                }
                <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App