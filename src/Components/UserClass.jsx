import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2 : 1
    };
  }

  componentDidMount(){
    console.log("Child Component will Mount")
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card border-2 border-black p-4 w-64">
        <h1>Count :- {count}</h1>
        <h1>Count2 :- {count2}</h1>
        <h2>Name:- {name}</h2>
        <h2>Location:- {location}</h2>
        <h2>Contact:- yaaartushaar</h2>
      </div>
    );
  }
}

export default UserClass;
