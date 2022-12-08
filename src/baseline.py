import numpy as np
import pandas as pd
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import TfidfVectorizer

# Accuracy is simply the percentage of predictions which are correct
def accuracy(pred ,tgt):

    if len(pred) != len(tgt):
        return -1

    acc = np.sum([pred[i] == tgt[i] for i in range(len(pred))]) / len(pred)

    return acc

# F1 Score mixes precision and recall
# F1 = tp / (tp + 1/2(fp + fn))
def f1_score(pred, tgt):

    if len(pred) != len(tgt):
        return -1

    tp = 0
    fp = 0
    fn = 0

    for i in range(len(pred)):
        if pred[i] == 1 and tgt[i] == 1:
            tp += 1
        elif pred[i] == 1 and tgt[i] == 0:
            fp += 1
        elif pred[i] == 0 and tgt[i] == 1:
            fn += 1 

    f1 = tp / (tp + 0.5 * (fp + fn))

    return f1 

# Log loss is the loss function for logistic regression
# logloss = - (tgt * pred + (1 - tgt) * log(1 - pred))
def logistic_loss(pred ,tgt):
    
    if len(pred) != len(tgt):
        return -1

    loss = 0

    for i in range(len(pred)):
        loss -= tgt[i] * np.log(pred[i]) + (1 - tgt[i]) * np.log(1 - pred[i])

    return loss 

# A way of summarizing the three scores by averaging them
def overall_score(acc, roc_auc, f1score):
    return np.average([acc, roc_auc, f1score])

# This provides a very simple baseline for classifying news articles as sarcastic or nonsarcastic
def evaluate():

    # First get the dataset and split it into train and test
    #filepath = 'data\db\Sarcasm_Headlines_Dataset_v2.json'  # Weird behavior between Windows and Linux; uncomment this line if you are on a Windows device
    filepath = 'data/db/Sarcasm_Headlines_Dataset_v2.json'
    df = pd.read_json(filepath, lines=True)

    X_train, X_test, y_train, y_test = train_test_split(df["headline"], df["is_sarcastic"], test_size=0.2, shuffle=False)


    #Use Tf-Idf to vectorize the text data
    tfidf_vectorizer = TfidfVectorizer(use_idf=True)
    X_train = tfidf_vectorizer.fit_transform(X_train) 
    X_test = tfidf_vectorizer.transform(X_test)
    y_test = list(y_test)

    # NOTE: There's no stemming, stopword removal, or other preprocessing here outside of tf-idf.
    # Adding more preprocessing is the most obvious way to improve upon the baseline

    # Train the baseline classifier (Multinomial Naive Bayes) on the training set 
    model = MultinomialNB()
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    # y_pred = np.ones_like(y_test)
    # y_pred[0] = 0

    # Evaluate results based on the three metrics and report the scores     
    acc = accuracy(y_pred, y_test)
    roc_auc = roc_auc_score(y_pred, y_test)
    f1score = f1_score(y_pred, y_test)
    overallscore = overall_score(acc, roc_auc, f1score)

    print()
    print("Accuracy: " + str(acc))
    print("ROC AUC Score: " + str(roc_auc))
    print("F1 Score: " + str(f1score))
    print("Overall Score: " + str(overallscore))
    print()


if __name__ == "__main__":
    evaluate()
     