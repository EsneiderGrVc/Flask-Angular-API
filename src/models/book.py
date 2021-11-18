from enum import unique
from os import EX_TEMPFAIL, read
from utils.db import db
import uuid

class Book(db.Model):
    id = db.Column(db.String(32), primary_key=True)
    title = db.Column(db.String(100))
    author = db.Column(db.String(100))
    read = db.Column(db.String(100))

    def __init__(self, title, author, read):
        self.id = uuid.uuid4().hex
        self.title = title
        self.author = author
        self.read = read