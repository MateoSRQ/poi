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
import Login from "../login";
import provider from "../../components/authprovider"
import {useStore} from '../../store';

function AuthProvider({children}: { children: React.ReactNode }) {
    let navigate = useNavigate();
    let username = useStore(state => state.username)

    console.log('AUTHPROVIDER')
    console.log(username)

    let component: React.ReactNode = null;

    if (username) {
        console.log('yyy')
        //return children
        component = children
    }
    else {
        console.log('xxx')
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
            <Route path="*" element={<Login/>}/>
        </Routes>

    )
}


