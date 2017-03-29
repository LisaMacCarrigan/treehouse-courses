function Application() {
  return (
    <div>
      <h1>Hello from React</h1>
      <p>This paragraph was rendered from the Application componenet</p>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));
