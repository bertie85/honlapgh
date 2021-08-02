const Page = props => (
  <div className="container page">
    <h1>{props.title}</h1>
    <div className="row">
      <img className="App-logo-page" src="logo.png"></img>
      {props.children}
    </div>
  </div>
)

export default Page;
