#!/usr/bin/python3
"""
    Create the initial tables and
    run the flask application
"""


from app import app
from utils.db import db


with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
