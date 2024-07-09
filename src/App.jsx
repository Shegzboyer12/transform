import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate developer.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer',
      },
      shows: false,
      mountedTime: new Date(),
      timeInterval: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timeInterval: Math.floor((new Date() - this.state.mountedTime) / 1000)
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <button
          onClick={this.toggleShow}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {shows ? 'Hide' : 'Show'} Profile
        </button>
        {shows && (
          <div className="bg-white shadow-md rounded p-6 w-80">
            <h1 className="text-2xl font-bold mb-2">{person.fullName}</h1>
            <p className="text-gray-700 mb-4">{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold">{person.profession}</h2>
          </div>
        )}
        <p className="mt-4 text-gray-600">Time since component mounted: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
