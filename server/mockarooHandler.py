from flask import Flask
from flask_pymongo import PyMongo
import requests
import os

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/database" #database name
mongo = PyMongo(app)

mocaroo_url = "https://my.api.mockaroo.com/schema?key=..." #api key from mockaroo

# fetch data from Mockaroo 
def fetch_data_and_store():
    try:
        # GET request to Mockaroo API
        response = requests.get(mocaroo_url, params={
            'count': 1,  # Number of records to generate
            'schema': '[{"name":"name","type":"Name"}]'  # Adjust to schema params
        })

        data = response.json()  # Convert response to JSON

        # Insert data into MongoDB
        mongo.db.DataModel.insert_many(data)
        print('Data successfully stored in MongoDB')

    except Exception as e:
        print('Error fetching data or inserting into MongoDB:', e)

    if __name__ == '__main__':
        # Fetch data and store it when the server starts
        fetch_data_and_store()

        # Start the server
        port = int(os.environ.get('PORT', 5000))
        app.run(host='0.0.0.0', port=port)