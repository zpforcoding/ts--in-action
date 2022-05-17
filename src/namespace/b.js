/// <reference path="a.ts"/>
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
Shape.circle(1);
Shape.square(2);
