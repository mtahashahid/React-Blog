import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Taha Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="create" style={{
                    color:"white",
                    background:"#f1356d",
                    borderRadius: "6px"
                }}>Creat New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;