var el = document.getElementById("main"),
    two = new Two({
        fullscreen: true
    }).appendTo(el);

var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

console.log(width, height)

var earthAngle = 0,
    padding    = 100,
    orbit      = 200,
    offset     = orbit + padding,
    orbits     = two.makeGroup();

drawCircle()

two.bind("update", function (frameCount) {
    if (earthAngle > width) {
        earthAngle=0
        drawCircle()
    }
    earthAngle = earthAngle+200
    var pos = getLinearPositions(earthAngle, orbit);
    earthOrbit.translation.x = pos.x;
    earthOrbit.translation.y = pos.y;
});

orbits.visible = true;

two.play();

function getLinearPositions(x,y) {
    return {
        x: x,
        y: y,
    };
}

function drawCircle() {
    rcolor = Math.floor(Math.random()*16777215).toString(16);
    var x = Math.floor(Math.random()*width);
    var y = Math.floor(Math.random()*height);

    var earthOrbit = two.makeCircle(x, y, 100);
    earthOrbit.linewidth = 4;
    earthOrbit.fill = "#"+ rcolor;
    orbits.add(earthOrbit);
}
function getCirclePositions(angle, orbit) {
    return {
        x: Math.cos(angle * Math.PI / 180) * orbit,
        y: Math.sin(angle * Math.PI / 180) * orbit
    };
}
