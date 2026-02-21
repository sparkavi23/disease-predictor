from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend is running"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    if not data or "symptoms" not in data:
        return jsonify({"prediction": "No symptoms provided"}), 400

    symptoms = data["symptoms"].lower()

    # Simple logic (you can replace with ML later)
    if "fever" in symptoms:
        result = "You may have Viral Fever"
    elif "cough" in symptoms:
        result = "You may have Common Cold"
    elif "headache" in symptoms:
        result = "You may have Migraine"
    else:
        result = "No major disease detected"

    return jsonify({
        "prediction": result
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
