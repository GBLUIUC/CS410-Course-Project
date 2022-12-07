# CS 410 Course Project: Leaderboard Competition for Detecting Sarcasm in News Articles

As a general overview, this project aims to create a leaderboard competition for the task of classifying news articles as satirical or non-satirical by using natural language processing techniques. Participants in the competition will develop a model for this in a file named classifier.py. Each time they make a new push to their Github repository, a webhook will fire to evaluate their classifier model for Accuracy, Logistic Loss, and F1 Score. This project provides code based on the LiveDataLab API which will allow you to run a local server to host a leaderboard competition.

My submission is linked through CMT (https://cmt3.research.microsoft.com/CS410Expo2022/Submission/Summary/10). 

# Related Work

This project is heavily influenced by the original paper by Aaron Green which introduces the LiveDataLab (https://www.ideals.illinois.edu/items/115630). While it is influenced by LiveDataLab, this project isn't actually hosted on the LiveDataLab website (mostly because I wasn't sure if I had permissions to actually access the Azure instance) but it does leverage the existing API to create a locally hosted Leaderboard Competition. A direct future extension could be to actually move this to the website itself.

# Code Structure

The structure of the code also closely follows the LiveDataLab API, which the original paper covers relatively well. For the purposes of this course project, the most interesting files to look at are probably server.py (the server code which "catches" the Github webhook triggers and evaluates the results), classifier.py (a very simple baseline classifier for the task), and templates/leaderboard.html and dashboard/src/components/leaderboard.js (the basic frontend for displaying the results on a leaderboard).

# Set Up Instructions

(Note: It might be helpful to watch my demo video in reports/demo.mp4 because I go through these setup steps there as well)

### Downloading the Dataset

The dataset for this project comes from this Kaggle dataset: https://www.kaggle.com/datasets/rmisra/news-headlines-dataset-for-sarcasm-detection. Download the dataset and place the file Sarcasm_Headlines_Dataset_v2.json into data/db/Sarcasm_Headlines_Dataset_v2.json. This is where your server will look for the actual data used to evaluate classifier results.

### Creating a Virtual Environment

You can set up a virtual environment with the command `$ python3 -m venv venv` where the second `venv` is the name of the virtual environment you want to create. Then you can activate this environment with `$ source venv/bin/activate` and deactivate it when you're done with `$ deactivate`. To get the dependencies installed in your environment, run `$ pip3 install -r requirements.txt`. With the environment set up you can start your server with `$ export FLASK_ENV=development && python3 server.py`

### Setting up Webhooks

This project uses ngrok to set up a public url that can forward the webhook triggers to your local server. After getting your server up and running, use the command `$ ngrok http 5000` to forward traffic through localhost:5000. Running this command should output information, including a public url that you can use. Copy this public url so it can be added to your Github repo as a webhook.

Create a Github repository with your own classifier.py (or you can just use the baseline I've provided as a part of this project). Click on Webhooks and select Add Webhook. Paste the public ngrok URL that you copied in the previous step into the Payload URL field. Then change the content type to application/json. Then click Add webhook. Now, your webhook should be set up to trigger and forward to your locally running API every time a new commit is pushed to your repo.

After making a commit in your repository, you should be able to see in ngrok that a new POST message has come in from the webhook trigger and server.py should evaluate your classifer model and print out the results.
