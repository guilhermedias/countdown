var React = require('react');

var Display = React.createClass({
  render: function() {
    var style = {
      fontSize: '24px',
      display: 'inline'
    };

    var leftPad = function(number) {
      return (number < 10 ? '0' : '') + number.toString();
    };

    return <div style={style}>{leftPad(this.props.value)}</div>;
  }
});

module.exports = Display;
