import * as React from "react";
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
import App2 from "../app2";
import App1 from "../app1";
import App3 from "../app";
import Edit from "../edit";
import Upload from "../upload";
import Login from "../login";
import provider from "../../components/authprovider"
import {useStore} from '../../store';
import {useEffect} from "react";

function AuthProvider({children}: { children: React.ReactNode }) {
    let navigate = useNavigate();
    let username = useStore(state => state.username)
    let start = useStore(state => state.start)

    console.log('AUTHPROVIDER')
    start()
    console.log('username:' + username)

    let component: React.ReactNode = null;

    if (username) {
        component = children
    }
    else {
        navigate('/', {replace: true})
    }
    return (
        <>{component}</>
    )
}

export default function App() {
    return (

        <Routes>
            <Route path="/app2" element={<App2/>}/>
            <Route path="/app1" element={<App1/>}/>
            <Route path="/app" element={
                <AuthProvider>
                    <App3/>
                </AuthProvider>
            }/>
            <Route path="/edit" element={
                <AuthProvider>
                    <Edit/>
                </AuthProvider>
            }/>
            <Route path="/upload" element={
                <AuthProvider>
                    <Upload/>
                </AuthProvider>
            }/>
            <Route path="*" element={<Login/>}/>
        </Routes>

    )
}


