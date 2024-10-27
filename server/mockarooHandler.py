from flask import Flask
from flask_pymongo import PyMongo
from pymongo import MongoClient
import requests
import certifi
from bson.objectid import ObjectId  # Import ObjectId for MongoDB documents

app = Flask(__name__)

# MongoDB configuration
app.config["MONGO_URI"] = ("mongodb+srv://rahuldb:rahul@cluster0.qataj.mongodb"
                           ".net/tower_data?retryWrites=true&w=majority")
client = MongoClient(app.config["MONGO_URI"], tlsCAFile=certifi.where())
db = client["telecom_db"]  # Database name
collection = db["tower_data"]  # Collection name
mongo = PyMongo(app)

# Mockaroo API configuration
MOCKAROO_URL = "https://my.api.mockaroo.com/infra_sight?key=8154e350"

# Lat/Long data based on tower names
tower_coordinates = {
    "A": (43.643452, -79.380928),
    "B": (43.64345, -79.380928),
    "C": (43.6465, -79.3787),
    "D": (43.648086, -79.378239),
    "E": (43.648088, -79.378241),
    "F": (43.648417, -79.377228),
    "G": (43.648418, -79.377228),
    "H": (43.648986, -79.378361),
    "I": (43.648988, -79.378362),
    "J": (43.648639, -79.379089)
}


# Function to create MongoDB documents
def create_mongo_documents(row):
    tower_id = row['tower_id']
    lat, lon = tower_coordinates.get(tower_id, (None, None))

    return {
        "_id": ObjectId(),  # Generates unique ObjectId for MongoDB
        "tower_id": tower_id,
        "lat": lat,
        "lon": lon,
        "downtime_duration": row['downtime_duration'],
        "temperature": row['temperature'],
        "humidity": row['humidity'],
        "latency": row['latency'],
        "signal_strength": row['signal_strength'],
        "tower_failure": row['tower_failure']
    }


# Fetch data from Mockaroo and store it in MongoDB
def fetch_data_and_store():
    try:
        # GET request to Mockaroo API with 50 records
        response = requests.get(MOCKAROO_URL, params={'count': 50})

        # Check if the response is successful
        if response.status_code == 200:
            data = response.json()  # Convert response to JSON
            print('Data fetched successfully')
            # Transform data to include coordinates
            mongo_documents = [create_mongo_documents(row) for row in data]

            # Insert transformed data into MongoDB collection
            collection.insert_many(mongo_documents)
            print('Data successfully stored in MongoDB')
        else:
            print(f"Failed to fetch data. Status code: {response.status_code}")

    except Exception as e:
        print('Error fetching data or inserting into MongoDB:', e)


# Route to trigger the data fetching
@app.route('/fetch_data', methods=['GET'])
def fetch_data_route():
    fetch_data_and_store()
    return "Data fetched and stored in MongoDB."


if __name__ == '__main__':
    # Start the Flask app
    app.run(debug=True)
