//var el = document.getElementById("main"),
    two = new Two({
        fullscreen: true,
        autostart: true
    }).appendTo(document.body);

// https://code.tutsplus.com/tutorials/a-beginners-guide-to-drawing-2d-graphics-using-twojs--cms-31681

var colors = [
    'rgb(255, 64, 64)',
    'rgb(255, 128, 0)',
    'rgb(0, 200, 255)',
    'rgb(0, 191, 168)',
    'rgb(153, 102, 255)',
    'rgb(255, 244, 95)',
    'rgb(42,255,0)',
    'rgb(22,40,255)'
];
colors.index = 0;

var linearGradient = two.makeLinearGradient(
    two.width / 2, - two.height / 2,
    two.width / 2, two.height / 2,
    new Two.Stop(0, colors[0]),
    new Two.Stop(1, colors[1]),
    new Two.Stop(1, colors[2])
);

var rectangle = two.makeRectangle(two.width / 2, two.height / 2, two.width, two.height);
rectangle.noStroke();

rectangle.fill = linearGradient;


// two.makeLinearGradient(x1, y1, x2, y2, stops)
// new Two.Stop(offset, color, opacity)

two.bind('update', function(frameCount) {

    var o = linearGradient.stops[1].offset;
    linearGradient.stops[1].offset -= o * 0.125;

    if (o < 0.001) {
        linearGradient.stops[1].offset = 1;
        colors.index = (colors.index + 1) % colors.length;
        for (var i = 0; i < linearGradient.stops.length; i++) {
            linearGradient.stops[i].color = colors[(colors.index + i) % colors.length];
        }
        return;
    }

});

two.bind('resize', function() {

        var w = two.width / 2;
        var h = two.height / 2;

        linearGradient.left.y = - h;
        linearGradient.right.y = h;

        rectangle.vertices[0].set(- w, - h);
        rectangle.vertices[1].set(w, - h);
        rectangle.vertices[2].set(w, h);
        rectangle.vertices[3].set(- w, h);

        rectangle.translation.set(w, h);

    });
