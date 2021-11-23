#!/usr/bin/python3
"""
    Declare the Book class to represent
    the books table in the database.
"""

from utils.db import db
import uuid
import json

class Book(db.Model):
    """Define class attrs with sqlalchemy module"""

    id = db.Column(db.String(32), primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    read = db.Column(db.Boolean(), nullable=False)

    def __init__(self, title, author, read):
        self.id = uuid.uuid4().hex
        self.title = title
        self.author = author
        self.read = read

    def to_json(self):
        """
            Return an json string representation
            for the current Book object.
        """
        return json.dumps({
            'id': self.id,
            'title': self.title,
            'author': self.author,
            'read': self.read
        })
