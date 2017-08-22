var fadeDancer = function (top, left) {
  Dancer.call(this, top, left);

  this.setColor();

};

fadeDancer.prototype = Object.create(Dancer.prototype);

fadeDancer.prototype.fade = function() {

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.$node.fadeIn(3000);
};

Dancer.prototype.setColor = function () {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    border:10px solid green;
    border-radius:10px;
    position:absolute;
  };
  this.$node.css(styleSettings);
};