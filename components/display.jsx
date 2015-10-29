var React = require('react');

var Display = React.createClass({
  render: function() {
    var style = {
      display: 'inline'
    };

    return <div style={style}>{this.props.value}</div>;
  }
});

module.exports = Display;
