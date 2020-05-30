// Make an instance of two and place it on the page.
var elem = document.getElementById("main");
var maxX = 800,
    maxY = 600;
var params = { width: maxX, height: maxY };
var two = new Two(params).appendTo(elem);

rcolor = Math.floor(Math.random() * 16777215).toString(16);
var rec3 = two.makeRectangle(300, 300, 150, 150);
rec3.fill = "#" + rcolor;

drawMordu(500, 100);
drawMordu(100, 100);
drawMordu(500, 500);
drawMordu(100, 500);
// to the screen
two.update();

function drawMordu(x, y) {
    var el = two.makeEllipse(x, y, 100, 100);
    el.fill = "#d905f5";

    var right_el_eye = two.makeEllipse(x + 40, y - 20, 15, 15);
    right_el_eye.fill = "#0000ff";

    var left_el_eye = two.makeEllipse(x - 30, y - 20, 15, 15);
    left_el_eye.fill = "#0000ff";

    var el_nouse = two.makeEllipse(x + 5, y, 10, 20);
    el_nouse.fill = "#fff";

    for (i = 0; i < 5; i = i + 1) {
        rcolor = Math.floor(Math.random() * 16777215).toString(16);
        var rec = two.makeRectangle(x - 40 + 10 * i, y + 20 + 10 * i, 15, 10);
        rec.fill = "#" + rcolor;
        var rec2 = two.makeRectangle(x + 10 + 10 * i, y + 60 - 10 * i, 15, 10);
        rec2.fill = "#" + rcolor;
    }
}
