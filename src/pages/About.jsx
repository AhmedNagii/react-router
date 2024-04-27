import background from "../assets/aboutbg.png";

function About() {
  const pStyle = {
    maxWidth: "494.33px",
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "500",
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "20px",
      }}
    >
      <img
        src={background}
        style={{
          maxWidth: "100%",
          height: "auto", 
         
        
        }}
      ></img>

      <h2
        style={{
          maxWidth: "494.33px",
          textAlign: "left",
          fontSize: "32px",
          fontWeight: "700",
        }}
      >
        Don’t squeeze in a sedan when you could relax in a van.
      </h2>
      <p style={{ ...pStyle }}>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. (Hitch costs extra 😉)
      </p>
      <p style={{ ...pStyle }}>
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>

      <div
        style={{
          width: "494px",
          minHeight: "198px",
          background: "#FFCC8D",
          textAlign: "left",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{}}>
          <h3
            style={{ textAlign: "left", fontSize: "24px", fontWeight: "700" }}
          >
            Your destination is waiting.
          </h3>
          <h3
            style={{ textAlign: "left", fontSize: "24px", fontWeight: "700" }}
          >
            Your van is ready.
          </h3>
        </div>
        <button
          style={{
            width: "174px",
            background: "#161616",
            height: "50px",
            fontSize: "16px",
            fontWeight: "700",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            marginTop: "10px",
          }}
        >
          Explore our vans
        </button>
      </div>
    </div>
  );
}
export default About;
