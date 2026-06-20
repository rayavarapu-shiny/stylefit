function SearchDress({

    uploadedImage,

    selectedDress,

    setSelectedDress,

    setShowResult

}) {

    const dresses = [

        "/dresses/dress1.jpg",

        "/dresses/dress2.jpg",

        "/dresses/dress3.jpg",

        "/dresses/dress4.jpg",

        "/dresses/dress5.jpg",

        "/dresses/dress6.jpg"

    ];


    const handleTryOn = () => {

        if (!uploadedImage) {

            alert("Please upload your photo");

            return;

        }

        if (!selectedDress) {

            alert("Please select a dress");

            return;

        }

        setShowResult(true);

    };


    return (

        <div

            style={{

                background: "white",

                padding: "20px",

                borderRadius: "20px",

                width: "600px",

                boxShadow: "0 5px 20px rgba(0,0,0,0.1)"

            }}

        >

            <h2

                style={{

                    color: "#7c3aed",

                    textAlign: "center"

                }}

            >

                👗 Choose Dress

            </h2>


            <div

                style={{

                    display: "grid",

                    gridTemplateColumns: "repeat(3,1fr)",

                    gap: "15px"

                }}

            >

                {

                    dresses.map((dress, index) => (

                        <div

                            key={index}

                            onClick={() => {

                                setSelectedDress(dress);

                                setShowResult(false);

                            }}

                            style={{

                                border:

                                    selectedDress === dress

                                        ? "3px solid #8b5cf6"

                                        : "1px solid #ddd",

                                borderRadius: "15px",

                                padding: "10px",

                                cursor: "pointer"

                            }}

                        >

                            <img

                                src={dress}

                                alt="dress"

                                width="100%"

                                height="200"

                                style={{

                                    objectFit: "contain"

                                }}

                            />

                        </div>

                    ))

                }

            </div>


            {

                uploadedImage && selectedDress && (

                    <div

                        style={{

                            textAlign: "center",

                            marginTop: "25px"

                        }}

                    >

                        <button

                            onClick={handleTryOn}

                            style={{

                                background: "#8b5cf6",

                                color: "white",

                                border: "none",

                                padding: "14px 35px",

                                borderRadius: "30px",

                                fontSize: "18px",

                                cursor: "pointer"

                            }}

                        >

                            Try On ✨

                        </button>

                    </div>

                )

            }

        </div>

    );

}

export default SearchDress;