const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>Taha Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="create" style={{
                    color:"white",
                    background:"#f1356d",
                    borderRadius: "6px"
                }}>Creat New Blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;