from flask import Blueprint, render_template, request
from models.book import Book


books = Blueprint('books', __name__)

@books.route('/', strict_slashes=False)
def home():
    return render_template('index.html')

@books.route('/add', strict_slashes=False, methods=['POST'])
def add_book():
    if request.method == 'POST':
        title = request.form['title']
        author = request.form['author']
        read = request.form['read']

        new_book = Book(title, author, read)
        print(new_book)

        return 'saving book'

@books.route('/edit', strict_slashes=False)
def edit_book():
    return request.get_json()

@books.route('/delete', strict_slashes=False)
def delete_book():
    return "deleting a book"