import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Test2 from './Test2';
import Book from './Book';
import { BookList } from './BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to app file</h1>
        <BookList></BookList>

        {/* <Book bookname="Science" auther="John"></Book>
        <Book bookname="Math" auther="Aaryabhatt"></Book>
        <Book bookname="History" auther="Shivaji Maharaj"></Book> */}

        {/* <Test name="priaynka" age="25"></Test>
        <Test2 name="sadanand" age="18"></Test2> */}
      </header>
    </div>
  );
}

export default App;
