var React = require('react');
var ReactDOM = require('react-dom');
var classNames = requires('classnames');
var Api = require('./utils/api');

var query = '';
var cities=[]; // transforms city query string into an array
var citiesWeather = []; // API cache
var currentCity =0;


var Weather = React.createClass({
  render: function(){

  }
});

// Assign the React component to a DOM element
var element = React.createElement(Weather, {});
ReactDOM.render(element, document.querySelector('.container'));
