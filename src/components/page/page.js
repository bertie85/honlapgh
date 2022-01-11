const Page = props => (
  <div className="container page">
    <div className="row">
      <div className="col">
        <h1>{props.title}</h1>
      </div>
    </div>
    <div className="row">
      {props.children}
      <img id="App-logo-page" className="App-logo-page" alt="logo" src="logo.png"></img>
    </div>
  </div>
)

export default Page;
