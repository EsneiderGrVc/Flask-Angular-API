#!/usr/bin/python3
""" Setting up flask and database """

from flask import Flask
from flask_cors import CORS
from routes.books import books
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
CORS(app)

user = os.environ['MYSQL_USER']
password = os.environ['MYSQL_ROOT_PASSWORD']
database = os.environ['MYSQL_DATABASE']
host = os.environ['MYSQL_HOST']

print(f"""
user: {user}
password: {password}
database: {database}
host: {host}
""")

app.config['SQLALCHEMY_DATABASE_URI']=f'mysql+pymysql://{user}:{password}@{host}:3306/{database}'

# Set SQLALCHEMY_TRACK_MODIFICATIONS=False to don't allow track
# modifications and save memory.
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

SQLAlchemy(app)

app.register_blueprint(books)
