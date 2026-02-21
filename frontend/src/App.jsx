import axios from "axios";
import { useState } from "react";

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState("");

  const predictDisease = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        { symptoms: symptoms }
      );

      setResult(response.data.prediction);
    } catch (error) {
      console.error(error);
      setResult("Error connecting to backend");
    }
  };

  return (
    <div className="container">
      <h1>Disease Predictor 🏥</h1>

      <textarea
        placeholder="Enter symptoms (e.g., fever, cough)"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      />

      <button onClick={predictDisease}>Predict Disease</button>

      {result && (
        <div className="result">
          <h2>Prediction Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
