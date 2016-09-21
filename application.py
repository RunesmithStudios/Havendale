#coding: utf-8

from flask import Flask, render_template
app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/home', methods=['GET'])
def home():
    return render_template('home.html')

@app.route('/directives/<string:directive>')
def directives(directive):
    return render_template('directives/%s.html' % directive)
