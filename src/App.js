import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"


export default function App() {
    return (
    <div>
       <h1>hello YourMom</h1>
       <Link to="/characterlist">Character List</Link>

       <Outlet />
    </div>
    )
}

