// Make an instance of two and place it on the page.
var elem = document.getElementById('main');
var maxX=800, maxY=700

var params = { width: maxX, height: maxY };
var two = new Two(params).appendTo(elem);

for (i = 0; i < 10; i++) {
    rcolor = Math.floor(Math.random()*16777215).toString(16);

    x = Math.floor(Math.random()*maxX).toString(10);
    y = Math.floor(Math.random()*maxY).toString(10);

    var c = two.makeCircle(x, y, 10);
// The object returned has many stylable properties:
    c.linewidth = 0;
    c.fill = "#"+ rcolor;
// Don't forget to tell two to render everything
// to the screen
}

two.update();
