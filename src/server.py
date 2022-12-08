from api.routes.auth import auth_blueprint
from api.routes.build import build_blueprint
from api.routes.course import course_blueprint
from api.routes.external_account import external_account_blueprint
from api.routes.index import index_blueprint
from api.routes.project import project_blueprint
from api.routes.webhook import webhook_blueprint
from api.routes.lti import lti_blueprint
from api.routes.mongodb import mongodb_blueprint
import wget, os, sys

from app import app

# register routes
app.register_blueprint(auth_blueprint)
app.register_blueprint(build_blueprint)
app.register_blueprint(course_blueprint)
app.register_blueprint(external_account_blueprint)
app.register_blueprint(project_blueprint)
app.register_blueprint(webhook_blueprint)
app.register_blueprint(index_blueprint)
app.register_blueprint(lti_blueprint)
app.register_blueprint(mongodb_blueprint)


from flask import Flask, redirect, url_for, request, render_template
app = Flask(__name__)

@app.route("/leaderboard.html")
def index():
    return render_template("leaderboard.html")

def process_url(user, raw_url):
    repo_name = raw_url.split('/')[-1]
    url = 'https://raw.githubusercontent.com/' + user + '/' + repo_name + '/master/classifier.py'
    return url 

@app.route('/', methods = ['POST'])
def on_commit():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json 

        if 'pusher' in json:

            # Parse the json to get the user and url
            user = json['repository']['owner']['name']
            url = json['repository']['url']
            
            classifier_path = "../venv/classifier.py"
            
            url = process_url(user, url)
            
            if os.path.exists(classifier_path):
                os.remove(classifier_path)
            
            # Grab classifer.py from the associated Github Repo
            filename = wget.download(url, classifier_path)

            sys.path.insert(1, '../venv') # Add the virtual environment to the path
            print(sys.path)

            from classifier import evaluate # Import the evaluate function from the classifier.py we just downloaded from github

            sys.path.remove('../venv')
            print(sys.path)
           
            # Now actually train the classifier on the dataset and evaluate the test results
            print("\nNew Commit by User " + str(user))
            evaluate()

    else:
        print("No JSON Payload in POST request")

    return ""


if __name__ == "__main__":
    print("SERVER STARTED")
    app.run(debug=True)