#!/usr/bin/python3
"""
    Import and setting up Marshmallow module
    to make beautiful json responses.
"""


from flask_marshmallow import Marshmallow


ma = Marshmallow()

class BookSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'author', 'read')

book_schema = BookSchema()
book_schema = BookSchema(many=True)