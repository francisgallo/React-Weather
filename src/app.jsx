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
  // Build class names with dynamic data
  var weaherClass = classNames ('wi wi-ovm-'+ this.state.weather);
  var bgColorClass = 'weather-widget';

  // Set the background colour based on the temp
   if (this.state.temp >= 30){
     bgColorClass += 'very-warm';
   }
   else if (this.state.temp > 20 && this.state.temp < 30 ){
     bgColorClass += 'warm';
   }
   else if (this.state.temp > 10 && this.state.temp < 20){
     bgColorClass += 'normal';
   }
   else if (this.state.temp > 0 && this.state.temp < 10 ){
     bgColorClass += 'cold';
   }
   else if (this.state.temp <= 0) {
     bgColorClass += 'very-cold';
   }

    // Render the DOM element

    return <div className ={bgColorClass}>
      <h1 className ="city">{cities[currentCity]}</h1>
      <div className = "weather">
        <i className = {weatherClass}></i>
      </div>
      <section className="weather-details">
          <div className="temp"><span className="temp-number">{this.state.temp}</span><span className="wi wi-degrees"></span></div>
          <div className="humidity"><i className="wi wi-raindrop"></i>{this.state.humidity} %</div>
          <div className="wind"><i className="wi wi-small-craft-advisory">{this.state.wind} <span className="vel">Km/h</span></div>
    </section>

  </div>
  }
});

// Init data for UI
 getInitalState: function() {
   return {
     weather: '',
     temp: 0,
     humidity: 0,
     wind: 0,
   }
 },

// Assign the React component to a DOM element
var element = React.createElement(Weather, {});
ReactDOM.render(element, document.querySelector('.container'));
