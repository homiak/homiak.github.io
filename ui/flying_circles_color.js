// Make an instance of two and place it on the page.
var two = new Two({
    fullscreen: true,
    autostart: false
}).appendTo(document.body);

var shapes = [];

for (i = 0; i < 100; i++) {
    var rcolor = Math.floor(Math.random()*16777215).toString(16);
    var x = Math.floor(Math.random()*two.width);
    var y = Math.floor(Math.random()*two.height);
    var r = Math.floor(Math.random()*(two.height/6))+1;
    var opacity = Math.random();

    // two has convenience methods to create shapes.
    var c = two.makeCircle(x, y, r);
// The object returned has many stylable properties:
    c.noStroke();
    c.fill="#"+ rcolor;
    c.opacity = opacity;
    c.scaleFactor = 0.01;
    shapes.push(c);
}

var increment = [];
for (i=0; i<shapes.length; i++) {
    var acceleration = Math.floor(Math.random()*(two.width/200));
    increment.push(acceleration);
}

// Bind a function to scale and rotate the group
// to the animation loop.
two.bind('update', function(frameCount) {
    // This code is called everytime two.update() is called.
    // Effectively 60 times per second.

    for (i=0; i<shapes.length; i++) {
        var shape = shapes[i];
        if (shape.scale > 2 || shape.scale < 0.5) {
            shape.scaleFactor = -1 * shape.scaleFactor;
        }
        shape.scale += shape.scaleFactor;
        shape.translation.x += increment[i];
        if (shape.translation.x > two.width + shape.radius) {
            shape.translation.x = - shape.radius;
        }
    }

});
two.play();  // Finally, start the animation loop