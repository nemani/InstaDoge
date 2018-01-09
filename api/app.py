from flask import Flask, jsonify, request, Response
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/loadPosts')
def load_posts():
    if PostJson:
        return PostJson
    x = json.load(open("posts.json"))
    # print(x)
    return jsonify(x)


@app.route('/loadComments')
def load_comments():
    x = json.load(open("comments.json"))
    # print(x)
    return jsonify(x)


@app.route('/savePosts', methods=["POST"])
def save_posts():
    if request.method == 'POST':
        data = request.body 
        # json.dump(open("posts.json",w))


@app.route('/saveComments', methods=["POST"])
def save_comments():
    if request.method == 'POST':
        data = request.get_json(force=True)
        # print(data)

        # console.log(data)
        # json.dump(open("comments.json",w))
        return Response(status="200")