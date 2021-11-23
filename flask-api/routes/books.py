#!/usr/bin/python3
"""
    Declare all the routes to perform the API
    comunication with the client.
"""


from flask import Blueprint, request, jsonify, Response
from models.book import Book
from utils.db import db
from utils.schema import book_schema


books = Blueprint('books', __name__)

@books.route('/', strict_slashes=False, methods=['GET'])
def home():
    """
        The home function sends to the client the list 
        of all records in the Book table.
    """
    if request.method == 'GET':
        books = Book.query.all()
        result = book_schema.dump(books)
        return jsonify(result)

@books.route('/add', strict_slashes=False, methods=['POST'])
def add_book():
    """
        The add_book function receives a Book model
        from client side and save it ass a new record
        in the Book table.
    """
    if request.method == 'POST':
        title = request.json['title']
        author = request.json['author']
        read = request.json['read']

        new_book = Book(title=title, author=author, read=read)
        db.session.add(new_book)
        db.session.commit()

        return Response(new_book.to_json(), status=201, mimetype='application/json')

@books.route('/edit/<id>', strict_slashes=False, methods=['GET', 'PUT'])
def edit_book(id):
    """
        The edit_book function allows to edit
        an existing book (record) which matches
        with an specified id.
    """
    if request.method == 'GET':
        """Return the book record that matches the incoming id"""
        book = [Book.query.get(id)]
        result = book_schema.dump(book)
        return jsonify(result)
    if request.method == 'PUT': 
        """Update the book record that maches the incoming id"""
        book = Book.query.get(id)
        book.title = request.json['title']
        book.author = request.json['author']
        book.read = request.json['read']

        db.session.commit()
        return Response(status=201)

@books.route('/delete/<id>', strict_slashes=False, methods=['DELETE'])
def delete_book(id):
    """
        The delete_book function deletes a book record
        that matches incoming id.
    """
    if request.method == 'DELETE':
        book = Book.query.get(id)
        db.session.delete(book)
        db.session.commit()
        
        return Response('{"message": "Element hass been deleted successfully"}', status=201, mimetype='application/json')

