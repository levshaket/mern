import React, { Component } from 'react';

class Create extends Component {
  constructor(props) {
    super(props);

    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeOwner = this.onChangeOwner.bind(this);
    this.onChangePriority = this.onChangePriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: '',
      owner: '',
      priority: '',
      completed: false,
    };
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  onChangeOwner(e) {
    this.setState({ owner: e.target.value });
  }

  onChangePriority(e) {
    this.setState({ priority: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const task = {
      description: this.state.description,
      owner: this.state.owner,
      priority: this.state.priority,
      completed: this.state.completed,
    };
    console.log(task);
    this.setState({
      description: '',
      owner: '',
      priority: '',
      completed: false,
    });
  }

  render() {
    return (
      <div>
        <h3>Create Task</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Description: </label>
            <input
              type="text"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div>
            <label>Owner: </label>
            <input
              type="text"
              value={this.state.owner}
              onChange={this.onChangeOwner}
            />
          </div>
          <div>
            <div>
              <input
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.priority === 'Low'}
                onChange={this.onChangePriority}
              />
              <label> Low</label>
            </div>
            <div>
              <input
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.priority === 'Medium'}
                onChange={this.onChangePriority}
              />
              <label> Medium</label>
            </div>
            <div>
              <input
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.priority === 'High'}
                onChange={this.onChangePriority}
              />
              <label> High</label>
            </div>
          </div>
          <div>
            <input type="submit" value="Create Task" />
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
