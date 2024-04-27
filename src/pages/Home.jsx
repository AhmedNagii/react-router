import background from "../assets/homeBG.png";

function Home() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1
        style={{
          maxWidth: "494.33px",
          color: "#fff",
          fontSize: "36px",
          fontWeight: "800",
          textAlign: "left",
        }}
      >
        You got the travel plans, we got the travel vans.
      </h1>
      <p
        style={{
          maxWidth: "494.33px",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "500",
          textAlign: "left",
        }}
      >
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button
        style={{
          width: "494.33px",
          height:"50px",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "700",
          background: "#FF8C38",
          border: 'none',
          borderRadius:"5px"
        }}
      >
        Find your van
      </button>
    </div>
  );
}
export default Home;
