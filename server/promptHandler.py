from flask import Flask, jsonify
from pymongo import MongoClient
import openai

app = Flask(__name__)

# Set up MongoDB and OpenAI API
MONGO_URI = "mongodb://localhost:27017/"
DATABASE_NAME = "your_database_name"
COLLECTION_NAME = "your_collection_name"
OPENAI_API_KEY = "your_openai_api_key"

client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
collection = db[COLLECTION_NAME]

