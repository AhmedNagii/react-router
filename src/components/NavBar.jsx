import { Link } from "react-router-dom";

function NavBar() {



  const smallLinkStyle = {color:"#4D4D4D", fontSize:'16px', fontWeight:'600'}

  return (
    <header
      style={{ minHeight: "100px", minWidth: "100%", background: "#FFF7ED" }}
    >
      <nav
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Link
          style={{ fontSize: "26px", color: "#000", fontWeight: "900" }}
          to="/"
        >
          #VANLIFE
        </Link>
        <div>
          <Link
            style={{ ...smallLinkStyle, marginRight: "30px" }}
            className="navBarLink"
            to="/about"
          >
            About
          </Link>
          <Link style={{ ...smallLinkStyle }} to="/vans">
            Vans
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
