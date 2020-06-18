
var two = new Two({
    fullscreen: true,
    autostart: false
}).appendTo(document.body);

for (i = 0; i < 100; i++) {
    var rcolor = Math.floor(Math.random()*16777215).toString(16);
    var x = Math.floor(Math.random()*two.width);
    var y = Math.floor(Math.random()*two.height);
    var r = Math.floor(Math.random()*(two.height/3))+1;
    var c = two.makeCircle(x, y, r);
    var opacity = Math.random();
// The object returned has many stylable properties:
    c.linewidth = 0;
    c.fill = "#"+ rcolor;
    c.opacity = opacity;
// Don't forget to tell two to render everything
// to the screen
}

two.update();
