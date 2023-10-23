import React from 'react';
import { Component } from 'react';
import Book from './Book';

export class BookList extends Component{

    state = {
        Books : [
        {title: "Harry Potter and the Philosopher's Stone", author:"J.K. Rowling"},
        {title: "The Catcher in the Rye", author:"J.D. Salinger"},
        {title: "1984", author:"George Orwell"}
        ]
    }
    changeStateFun = ()=>{
      console.log("calling change state function ")
      this.setState({
        Books: [
          { title: "new book", author: "new author" },
          { title: "new book1", author: "new auther1" },
          { title: "new book3", author: "new auther3" },
        ],
      });
    }

    render(){
        return (
          <div className="App">
          <button onClick={this.changeStateFun}>Change State</button>
            <Book
              bookname={this.state.Books[0].title}
              author={this.state.Books[0].author}
            ></Book>
            <Book
              bookname={this.state.Books[1].title}
              author={this.state.Books[1].author}
            ></Book>
            <Book change={this.changeStateFun}
              bookname={this.state.Books[2].title}
              author={this.state.Books[2].author}
            ></Book>
          </div>
        );
    }
}