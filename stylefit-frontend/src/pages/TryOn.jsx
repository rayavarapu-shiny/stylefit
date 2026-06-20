function TryOn() {

    return (

        <div
            style={{
                textAlign: "center",
                marginTop: "30px"
            }}
        >

            <h1>👗 Virtual Trial Room</h1>

            <h2>Your Photo</h2>

            <img
                src="https://res.cloudinary.com/dzctmdhpw/image/upload/v1781950864/Screenshot_2026-06-19_142546_r6drcc.png"
                alt="User"
                width="180"
                height="220"
                style={{
                    borderRadius: "10px",
                    marginRight: "20px"
                }}
            />

            <h2 style={{ marginTop: "30px" }}>
                Selected Dress
            </h2>

            <img
                src="https://res.cloudinary.com/dzctmdhpw/image/upload/v1781949850/dress1_ahjg9b.jpg"
                alt="Dress"
                width="180"
                height="220"
                style={{
                    borderRadius: "10px"
                }}
            />

            <br /><br />

            <button
                style={{
                    padding: "10px 20px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px"
                }}
            >
                Save Favorite ❤️
            </button>

        </div>

    );

}

export default TryOn;