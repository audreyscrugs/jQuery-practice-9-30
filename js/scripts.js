$(function() {
  $("h1").click(function() {
    alert("This is a header.");
    alert("I already told you! THIS is a header!");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").dblclick(function() {
    alert("This is an image.");
  });

  $("ul").hover(function() {
    alert("This is a walrus");
  });

});
