// Make an instance of two and place it on the page.
var elem = document.getElementById("main");
var maxX = 800, maxY = 700;

var params = { width: maxX, height: maxY };
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
var circle = two.makeEllipse(500, maxY / 2, 100, 50);
// rcolor = Math.floor(Math.random() * 16777215).toString(16);
circle.fill = "#9176ff";

var rect = two.makeRectangle(300, 350, 100, 100);

// The object returned has many stylable properties:
rect.fill = '#FF8000';
rect.stroke = 'orangered'; // Accepts all valid css color
rect.linewidth = 10;

var r_el_eye = two.makeEllipse(550, 340, 10, 10);
r_el_eye.fill = '#39CB34';

var l_el_eye = two.makeEllipse(450, 340, 10, 10);
l_el_eye.fill = '#08B6F7';

var el_nouse = two.makeEllipse(500, 360, 10, 10);
el_nouse.fill = '#CE46FF';

var mouth = two.makeRectangle(500, 385, 50, 20);
mouth.fill="#EE1120"

var r_sq_eye = two.makeEllipse(330, 330, 10, 10);
r_sq_eye.fill = '#E9F20D';

var r_sq_eye = two.makeEllipse(270, 330, 10, 10);
r_sq_eye.fill = '#20DFC4';

var sq_mouth = two.makeRectangle(300, 375, 50, 20);
sq_mouth.fill="#EE1120"
/*
for (i = 100; i > 0; i--) {
  rcolor = Math.floor(Math.random() * 16777215).toString(16);
  center = Math.random(maxY)
  // two has convenience methods to create shapes.
  var c = two.makeCircle(center/2, center/2, i * 1 + 1);

  // The object returned has many stylable properties:
  c.linewidth = 1;
  c.noStroke();
  c.fill = "#" + rcolor;
  // Don't forget to tell two to render everything
  // to the screen
  two.update();
}
*/
two.update();
