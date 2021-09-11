import './App.css';

// Header
function Header(props) {
  console.log(props.name);
  return (
    <header>
      <h1>{props.name} Web Developer</h1>
    </header>
  )
}

// Main function
function Main(props) {
  return (
    <section>
      <p>Services provided by us.</p>
      <img
        src="https://github.com/ujjvalVebuin.png"
        height={300}
        alt="ujjval github picture"></img>
      <ul style={{ textAlign: "left" }}>
        {props.items.map((item) =>
          <li key={item.id}>{item.title}</li>)
        }
      </ul>
    </section>
  )
}

// Footer 
function FooterArea(props) {
  return (
    <footer>
      <p>Copyright @{props.year}</p>
    </footer>
  )
}

const listProvide = [
  "Android development",
  "iOS development",
  "Web development"
];

const listObject = listProvide.map((item, i) => ({ id: i, title: item }));

function App() {
  return (
    <div className="App">
      <Header name="Shrimali" />
      <Main items={listObject} />
      <FooterArea year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
