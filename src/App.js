import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"


export default function App() {
    return (
    <div>
       <h1 className="banner">Character Manager</h1> {/*TODO: put some styling here */}
       <Link to="/characterlist">Character List</Link>

       <Outlet />
    </div>
    )
}

