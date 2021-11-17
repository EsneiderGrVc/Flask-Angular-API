from os import EX_TEMPFAIL, read
from utils.db import db

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    author = db.Column(db.String(100))
    read = db.Column(db.Boolean())

    def __init__(self, title, author, read):
        self.title = title
        self.author = author
        self.read = read