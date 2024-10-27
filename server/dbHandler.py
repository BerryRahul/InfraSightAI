from flask import Flask, jsonify
from flask_pymongo import PyMongo
from pymongo import MongoClient
from bson.objectid import ObjectId  # Import ObjectId for MongoDB documents

app = Flask(__name__)

# MongoDB cloud cluster configuration
app.config["MONGO_URI"] = "mongodb+srv://jiyag:awdqse123@cluster0.qataj.mongodb.net/tower_data"  # Replace with your credentials
mongo = PyMongo(app)

# Function to fetch the last 10 entries from the database
@app.route('/get_last_entries', methods=['GET'])
def get_last_entries():
    try:
        # Fetch the last 10 documents from the 'tower_data' collection
        last_entries = list(mongo.db.tower_data.find().sort('_id', -1).limit(10))
        
        # Convert ObjectId to string for JSON serialization
        for entry in last_entries:
            entry['_id'] = str(entry['_id'])

        # Return the entries as a JSON response
        print(last_entries)
        return jsonify(last_entries), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Start the Flask app
    app.run(debug=True)
