import { useEffect, useState } from "react";
const handleTryOn = async () => {

    const response = await fetch("http://localhost:8080/api/tryon", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            dress: selectedDress

        })

    });

    const data = await response.text();

    alert(data);

};
function Dresses() {

    const [dresses, setDresses] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/api/dresses")
            .then((res) => res.json())
            .then((data) => setDresses(data));

    }, []);

    return (
        <div>

            <h1>Dress Gallery 👗</h1>

            {dresses.map((dress) => (

                <div
                    key={dress.id}
                    style={{
                        border: "1px solid gray",
                        padding: "15px",
                        margin: "10px",
                        width: "300px"
                    }}
                >
                    <h2>{dress.dressName}</h2>

                    <p>Category: {dress.category}</p>

                    <p>Color: {dress.color}</p>

                    <button onClick={handleTryOn}>
                        Try On ✨
                    </button>

                </div>

            ))}

        </div>
    );
}

export default Dresses;