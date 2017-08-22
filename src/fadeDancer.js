var fadeDancer = function (top, left) {
  Dancer.call(this, top, left);

};

fadeDancer.prototype = Object.create(Dancer.prototype);

fadeDancer.prototype.fade = function() {

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};