var React = require('react');
var ReactDOM = require('react-dom');

var Hours = React.createClass({
  render: function() {
    return <div>{this.props.value}</div>;
  }
});

var Minutes = React.createClass({
  render: function() {
    return <div>{this.props.value}</div>;
  }
});

var Seconds = React.createClass({
  render: function() {
    return <div>{this.props.value}</div>;
  }
});

var Clock = React.createClass({
  updateTime: function() {
    var now = new Date();
    this.setState({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    });
  },

  getInitialState: function() {
    var now = new Date();
    return({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
    });
  },

  componentDidMount: function() {
    setInterval(this.updateTime, this.refreshInterval);
  },

  render: function() {
    return(
      <div>
        <Hours value={this.state.hours} /> : <Minutes value={this.state.minutes} /> : <Seconds value={this.state.seconds} />
      </div>
    );
  }
});

ReactDOM.render(
  <Clock refreshInterval={500} />,
  document.getElementById('content')
);
