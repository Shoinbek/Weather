var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/weather', function(req, res, next) {
  let weatherData = [
    {
        Temp: '90.5',
        Unit: 'fahrenheit',
        Cloudy: 'false',
        PrecepitationChance: '0',
    }
  ]
  res.send(weatherData);
});

module.exports = router;
