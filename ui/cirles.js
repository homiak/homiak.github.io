// Make an instance of two and place it on the page.
var elem = document.getElementById('main');
var maxX=800, maxY=700

var params = { width: maxX, height: maxY };
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
var circle = two.makeCircle(maxX/2, maxY/2, 100);

for (i = 20; i > 0; i--) {
    rcolor = Math.floor(Math.random()*16777215).toString(16);

    // two has convenience methods to create shapes.
    var c = two.makeCircle(maxX/2, maxY/2, i*20+1);

    console.log(i*20+1)
// The object returned has many stylable properties:
    c.linewidth = 2;
    c.fill = "#"+ rcolor;
// Don't forget to tell two to render everything
// to the screen
    two.update();
}

//two.play();



