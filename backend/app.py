from flask import Flask, request, jsonify
from flask_cors import CORS
from db import get_db

app = Flask(__name__)
CORS(app)

db = get_db()

# -------- PUBLIC APIs --------

@app.route("/projects", methods=["GET"])
def get_projects():
    return jsonify(list(db.projects.find({}, {"_id": 0})))

@app.route("/clients", methods=["GET"])
def get_clients():
    return jsonify(list(db.clients.find({}, {"_id": 0})))

@app.route("/contact", methods=["POST"])
def save_contact():
    db.contacts.insert_one(request.json)
    return jsonify({"msg": "Contact saved"})

@app.route("/newsletter", methods=["POST"])
def save_newsletter():
    db.newsletters.insert_one(request.json)
    return jsonify({"msg": "Subscribed"})

# -------- ADMIN APIs --------

@app.route("/admin/project", methods=["POST"])
def add_project():
    db.projects.insert_one(request.json)
    return jsonify({"msg": "Project added"})

@app.route("/admin/client", methods=["POST"])
def add_client():
    db.clients.insert_one(request.json)
    return jsonify({"msg": "Client added"})

@app.route("/admin/contacts", methods=["GET"])
def get_contacts():
    return jsonify(list(db.contacts.find({}, {"_id": 0})))

@app.route("/admin/newsletters", methods=["GET"])
def get_newsletters():
    return jsonify(list(db.newsletters.find({}, {"_id": 0})))

if __name__ == "__main__":
    app.run(debug=True)
