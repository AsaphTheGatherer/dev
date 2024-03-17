from transformers import pipeline

# Load pre-trained model
classifier = pipeline('sentiment-analysis')

def sentimentAnalysis(text):
    result = classifier(text)[0]
        return result['label'], result['score']