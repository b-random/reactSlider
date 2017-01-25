let React = require('react');
let ProgressBar = require('ProgressBar')

let Progress = React.createClass({
  getInitialState: function() {
    return {
      value: 25
    };
  },
  setValue: function() {
    this.setState( { value: this.refs.range.getDOMNode().value } );
  },
  render: function() {
    return(
      <div className="react-progress-example">
        <input
          ref="range"
          type="range"
          min="0"
          max="100"
          defaultValue={ this.state.value }
          onChange={ this.setValue }
        />
        <ProgressBar current={ this.state.value } total="100" />
      </div>
    )
  }
});

module.exports = Progress;
