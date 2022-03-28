import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/", {
    })
      .then(res => res.json())
      .then((response) => {
        console.log(response)
        this.setState({ users: response });
      })
  }

  render() {
    return (
      <>
      <h3>List of All users</h3>
      <ul id="userlist">
        {this.state.users.map((user) => 
          <li  key={user.id}>{user.name}</li>
          )}
      </ul>
          </>
    );
  }
}
export default App;