export default function ResultCard({ result }) {
  return (
    <div className="result-card">
      <h2>Prediction: {result.prediction}</h2>

      <h3>Probability:</h3>
      {Object.entries(result.probabilities).map(([disease, prob]) => (
        <div key={disease}>
          {disease} – {prob}%
        </div>
      ))}

      <p className="disclaimer">{result.disclaimer}</p>
    </div>
  );
}
