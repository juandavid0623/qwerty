/* ====================== *
 *  Toggle Between        *
 *  Sign Up / Login       *
 * ====================== */
$(document).ready(function () {
  $("#goRight").on("click", function () {
    $("#slideBox").animate({
      marginLeft: "0"
    });
    $(".topLayer").animate({
      marginLeft: "100%"
    });
  });
  $("#goLeft").on("click", function () {
    if (window.innerWidth > 769) {
      $("#slideBox").animate({
        marginLeft: "50%"
      });
    } else {
      $("#slideBox").animate({
        marginLeft: "20%"
      });
    }
    $(".topLayer").animate({
      marginLeft: "0"
    });
  });
});

initializeShapes();

/* ====================== *
 * Animation              *
 * ====================== */
view.onFrame = function paperOnFrame(event) {
  if (event.count % 4 === 0) {
    // Slows down frame rate
    for (var i = 0; i < shapeGroup.children.length; i++) {
      if (i % 2 === 0) {
        shapeGroup.children[i].rotate(-0.1);
      } else {
        shapeGroup.children[i].rotate(0.1);
      }
    }
  }
};

view.onResize = function paperOnResize() {
  getCanvasBounds();

  for (var i = 0; i < shapeGroup.children.length; i++) {
    shapeGroup.children[i].position = positionArray[i];
  }

  if (canvasWidth < 700) {
    shapeGroup.children[3].opacity = 0;
    shapeGroup.children[2].opacity = 0;
    shapeGroup.children[5].opacity = 0;
  } else {
    shapeGroup.children[3].opacity = 1;
    shapeGroup.children[2].opacity = 1;
    shapeGroup.children[5].opacity = 1;
  }
};


