import "./App.css";

import { useState } from "react";

import UploadPhoto from "./pages/UploadPhoto";
import SearchDress from "./pages/SearchDress";
import TryOnResult from "./pages/TryOnResult";

function App() {

  const [uploadedImage, setUploadedImage] = useState(null);

  const [selectedDress, setSelectedDress] = useState(null);

  const [showResult, setShowResult] = useState(false);

  return (

    <div className="app">

      <h1 className="title">

        👗 StyleFit AI Virtual Trial Room

      </h1>

      <p className="subtitle">

        Upload your photo, choose a dress and see the magic ✨

      </p>

      <div className="top-section">

        <UploadPhoto

          uploadedImage={uploadedImage}

          setUploadedImage={setUploadedImage}

        />

        <SearchDress

          uploadedImage={uploadedImage}

          selectedDress={selectedDress}

          setSelectedDress={setSelectedDress}

          setShowResult={setShowResult}

        />

      </div>

      <TryOnResult

        uploadedImage={uploadedImage}

        selectedDress={selectedDress}

        showResult={showResult}

      />

    </div>

  );

}

export default App;