#!/usr/bin/python3
""" Setting up flask and database """

from flask import Flask
from flask_cors import CORS
from routes.books import books
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:root@127.0.0.1:3306/books'

# Set SQLALCHEMY_TRACK_MODIFICATIONS=False to don't allow track
# modifications and save memory.
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

SQLAlchemy(app)

app.register_blueprint(books)