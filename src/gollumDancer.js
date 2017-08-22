var gollumDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
};

gollumDancer.prototype = Object.create(makeDancer.prototype);
gollumDancer.prototype.constructor = gollumDancer;


gollumDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //makeDancer.prototype.step(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.addClass('gollum');
  this.$node.addClass('wobble');
  this.$node.removeClass('dancer');
  //ssetTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.$node.toggle();
};