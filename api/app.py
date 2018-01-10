from flask import Flask, jsonify, request, Response
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/loadState')
def load_state():
    x = json.load(open("state.json"))
    return jsonify(x)

@app.route('/saveComments', methods=["POST"])
def save_state():
    if request.method == 'POST':
        data = request.get_json(force=True)
        # print(data)

        # console.log(data)
        json.dump(data, open("state.json",'w'))
        return Response(status="200")