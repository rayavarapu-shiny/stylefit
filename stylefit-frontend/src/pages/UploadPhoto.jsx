import React from "react";

function UploadPhoto({

    uploadedImage,

    setUploadedImage

}) {

    const handleUpload = () => {

        setUploadedImage("/user.jpg");

    };

    return (

        <div

            style={{

                background: "white",

                width: "320px",

                padding: "20px",

                borderRadius: "20px",

                textAlign: "center",

                boxShadow: "0 5px 20px rgba(0,0,0,0.1)"

            }}

        >

            <h2

                style={{

                    color: "#7c3aed"

                }}

            >

                📷 Upload Your Photo

            </h2>


            {

                uploadedImage ?

                    (

                        <img

                            src={uploadedImage}

                            alt="user"

                            width="220"

                            height="300"

                            style={{

                                borderRadius: "15px",

                                objectFit: "cover"

                            }}

                        />

                    )

                    :

                    (

                        <div

                            style={{

                                width: "220px",

                                height: "300px",

                                background: "#f3f4f6",

                                margin: "auto",

                                borderRadius: "15px",

                                border: "2px dashed #ccc"

                            }}

                        >

                        </div>

                    )

            }


            <br /><br />


            <button

                onClick={handleUpload}

                style={{

                    background: "#8b5cf6",

                    color: "white",

                    border: "none",

                    padding: "12px 30px",

                    borderRadius: "30px",

                    cursor: "pointer",

                    fontSize: "16px"

                }}

            >

                Upload Photo

            </button>

        </div>

    );

}

export default UploadPhoto;