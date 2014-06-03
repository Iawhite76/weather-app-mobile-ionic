weather-app-mobile-ionic
========================

A simple weather app built using Yeoman, Grunt, Bower, Angular/Ionic, and Phonegap.

This is my first attempt at developing ios/android mobile apps with Phonegap.  It is also my first time using Angular (and Ionic, which is built on Angular.js).

Functionality is simple: Enter in city and state info which is then submitted to the Open Weather API and then display common weather info.  The user is then able to leave a comment for that city which is stored on the mobile device/web broswer using local storage.  City data is stored as individual objects in a cities array like so : 
  var cities = [
    {cityInfo: 'Austin, Tx', comments: ['comment1', 'comment2']}, 
    {cityInfo: 'Dallas, Tx', comments: ['comment1', 'comment2']}
    ];

This app is a work in progress.  I intend to build an API so that city comment data may be stored remotely.
    
