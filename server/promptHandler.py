from flask import Flask, jsonify
from pymongo import MongoClient
import certifi
import openai
import os
from dotenv import load_dotenv
from openai import OpenAI
PORT=5001
load_dotenv()
app = Flask(__name__)

openAIClient = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Set up MongoDB and OpenAI API
app.config["MONGO_URI"] = (
    "mongodb+srv://rahuldb:rahul@cluster0.qataj.mongodb"
    ".net/tower_data?retryWrites=true&w=majority"
)
client = MongoClient(app.config["MONGO_URI"], tlsCAFile=certifi.where())
db = client["telecom_db"]  # Database name
collection = db["tower_data"]  # Collection name


# Route to fetch data by tower_id and get insights
@app.route("/get_insights/<tower_id>", methods=["GET"])
def get_insights(tower_id):
    try:
        # Fetch the last 5 records for the given tower_id (without timestamp)
        records = list(collection.find({"tower_id": tower_id}).limit(5))

        # Format data for GPT-4 API
        formatted_data = [
            {
                "tower_id": record["tower_id"],
                "downtime_duration": record["downtime_duration"],
                "temperature": record["temperature"],
                "humidity": record["humidity"],
                "latency": record["latency"],
                "signal_strength": record["signal_strength"],
                "tower_failure": record["tower_failure"],
            }
            for record in records
        ]

        # Define the prompt for ChatCompletion
        prompt = f"Given the following data about tower ID {tower_id}, provide insights on its performance and any potential issues:\n\n{formatted_data}"

        # Call GPT-4 API to generate insights
        response = openAIClient.chat.completions.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert analyst providing insights on telecommunications data.",
                },
                {"role": "user", "content": prompt},
            ],
            max_tokens=150,
        )

        # Extract and return insights
        insights = response.choices[0].message.content.strip()
        print(insights)
        return jsonify({"data": formatted_data, "insights": insights})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5001)
