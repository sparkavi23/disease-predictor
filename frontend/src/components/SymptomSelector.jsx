export default function SymptomSelector({ symptoms, selected, toggleSymptom }) {
  return (
    <div className="symptom-grid">
      {symptoms.map(symptom => (
        <label key={symptom} className="symptom-card">
          <input
            type="checkbox"
            checked={selected.includes(symptom)}
            onChange={() => toggleSymptom(symptom)}
          />
          {symptom.replace("_", " ")}
        </label>
      ))}
    </div>
  );
}
