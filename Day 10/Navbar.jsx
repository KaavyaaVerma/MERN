import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
        <NavLink className="navbar-brand" href="/">KIET MCA</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
            </button>

    <div id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/" style={({ isActive })=>isActive ? {color:"green",fontWeight:"bold"}: {color:"white"}}>Home</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/MyCard" style={({ isActive })=>isActive ? {color:"green",fontWeight:"bold"}: {color:"white"}}>Card</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/counter" style={({ isActive })=>isActive ? {color:"green",fontWeight:"bold"}: {color:"white"}}>MyCounter</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/Languages" style={({ isActive })=>isActive ? {color:"green",fontWeight:"bold"}: {color:"white"}}>Languages</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/student" style={({ isActive })=>isActive ? {color:"green",fontWeight:"bold"}: {color:"white"}}>Student</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/product" style={({ isActive })=>isActive ? {color:"green",fontWeight:"bold"}: {color:"white"}}>Product</NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/about" style={({ isActive })=>isActive ? {color:"green",fontWeight:"bold"}: {color:"white"}}>About Us</NavLink>
        </li>

        </ul>
    </div>
</div>
</nav>
);
};

export default Navbar