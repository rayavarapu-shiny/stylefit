const result1 = "/result/result1.jpg";
const result2 = "/result/result2.jpg";
const result3 = "/result/result3.jpg";
const result4 = "/result/result4.jpg";
const result5 = "/result/result5.jpg";
const result6 = "/result/result6.jpg";

function TryOnResult({

    uploadedImage,

    selectedDress,

    showResult

}) {

    if (!showResult) {

        return null;

    }

    let resultImage = result1;

    if (selectedDress === "/dresses/dress1.jpg")

        resultImage = result1;

    else if (selectedDress === "/dresses/dress2.jpg")

        resultImage = result2;

    else if (selectedDress === "/dresses/dress3.jpg")

        resultImage = result3;

    else if (selectedDress === "/dresses/dress4.jpg")

        resultImage = result4;

    else if (selectedDress === "/dresses/dress5.jpg")

        resultImage = result5;

    else

        resultImage = result6;

    return (

        <div style={{

            background: "white",

            width: "90%",

            margin: "30px auto",

            padding: "30px",

            borderRadius: "20px",

            textAlign: "center"

        }}>

            <h1>✨ AI Virtual Try-On Result</h1>

            <div style={{

                display: "flex",

                justifyContent: "center",

                gap: "60px"

            }}>

                <div>

                    <h3>Original Photo</h3>

                    <img

                        src={uploadedImage}

                        width="250"

                        height="350"

                        alt="user"

                    />

                </div>

                <div>

                    <h3>AI Result</h3>

                    <img

                        src={resultImage}

                        width="250"

                        height="350"

                        alt="result"

                    />

                </div>

            </div>

        </div>

    );

}

export default TryOnResult;