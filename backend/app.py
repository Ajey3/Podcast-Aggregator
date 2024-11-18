from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

LISTEN_NOTES_API_KEY = "f77c7114ea51410ea6ab6753d2499601"

@app.route("/search", methods=["GET"])
def search_podcasts():
    query = request.args.get("q")
    if not query:
        return jsonify({"error": "Query parameter is required"}), 400

    url = "https://listen-api.listennotes.com/api/v2/search"
    headers = {"X-ListenAPI-Key": LISTEN_NOTES_API_KEY}
    params = {"q": query}

    try:
        response = requests.get(url, headers=headers, params=params)
        return jsonify(response.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
