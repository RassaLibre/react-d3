'use strict';

var React = require('react');
var d3 = require('d3');

module.exports = React.createClass({

  displayName: 'VoronoiCircle',

  getInitialState(){
    return {
      showTooltip: false
    };
  },

  getDefaultProps() {
    return { 
      circleRadius: 4,
      circleFill: '#1f77b4',
      point: {x: 0, y: 0}
    };
  },

  showValues(event){
    this.setState({showTooltip: true});
    console.log('mouseDOWN!');
    console.log(this.props.point);
  },

  hideValues(event){
    this.setState({showTooltip: false});
    console.log('mouseUP!');
  },

  render() {
    return (
      <g>
        <path
          onMouseOver={this.props.handleMouseOver}
          onMouseLeave={this.props.handleMouseLeave}
          fill='transparent'
          d={this.props.voronoiPath} />
        {(this.state.showTooltip) ? <text x={this.props.cx - 20} y={this.props.cy - this.props.circleRadius - 10} fill="black">{this.props.point.x + " X " + this.props.point.y}</text> : undefined}  
        <circle
          onMouseDown={this.showValues}
          onMouseUp={this.hideValues}
          onMouseOver={this.props.handleMouseOver}
          onMouseLeave={this.hideValues}
          cx={this.props.cx}
          cy={this.props.cy}
          r={this.props.circleRadius}
          fill={"white"}
          stroke={this.props.circleFill}
          strokeWidth={4}
          className="rd3-linechart-circle"/>
      </g>
    );
  },
});
