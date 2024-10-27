from flask import Flask, jsonify
from flask_pymongo import PyMongo
from pymongo import MongoClient
from flask_cors import CORS
import certifi
from bson.objectid import ObjectId  # Import ObjectId for MongoDB documents

app = Flask(__name__)

cors = CORS(app)

# MongoDB cloud cluster configuration
app.config["MONGO_URI"] = (
    "mongodb+srv://rahuldb:rahul@cluster0.qataj.mongodb"
    ".net/tower_data?retryWrites=true&w=majority"
)
client = MongoClient(app.config["MONGO_URI"], tlsCAFile=certifi.where())
db = client["telecom_db"]  # Database name
collection = db["tower_data"]  # Collection name
mongo = PyMongo(app)


# Function to fetch the last 10 entries from the database
@app.route("/get_last_entries", methods=["GET"])
def get_last_entries():
    try:
        # Fetch the last 10 documents from the 'tower_data' collection
        last_entries = list(collection.find().sort("_id", -1).limit(10))

        # Convert ObjectId to string for JSON serialization
        for entry in last_entries:
            entry["_id"] = str(entry["_id"])

        # Return the entries as a JSON response
        print(last_entries)
        return jsonify(last_entries), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    # Start the Flask app
    app.run(debug=True)
