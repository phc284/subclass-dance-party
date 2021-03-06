var TeamRocket = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
};

TeamRocket.prototype = Object.create(makeDancer.prototype);
TeamRocket.prototype.constructor = TeamRocket;
TeamRocket.prototype.setPosition = function() {
  return;
};
var legolasShown = true;
TeamRocket.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //makeDancer.prototype.step(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (legolasShown) {
    this.$node.addClass('rocketBalloon');
    this.$node.removeClass('dancer');
    $('.gollum').slideUp();
    legolasShown = false;
  } else {
    this.$node.removeClass('dancer');
    $('.rocketBalloon').fadeOut(100);  
    legolasShown = true;
  }
};

// to make background all legolas - change background image to legolas
// maybe do snorelax coming from the top to make everyone run away from his fat ass
// or team rocket 