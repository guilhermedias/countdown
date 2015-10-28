var React = require('react');
var ReactDOM = require('react-dom');

var Display = require('./display.jsx');

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
          <Display value={this.state.hours} /> : <Display value={this.state.minutes} /> : <Display value={this.state.seconds} />
        </div>
    );
  }
});

ReactDOM.render(
  <Clock refreshInterval={500} />,
  document.getElementById('content')
);
