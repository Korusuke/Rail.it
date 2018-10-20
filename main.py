from flask import Flask
from flask import render_template, flash, redirect, url_for, request ,session
app = Flask(__name__)

@app.route('/' , methods=['GET', 'POST'])
def dashboard():
    print("Hello")
    return render_template('index.html', page='IndexPage')
