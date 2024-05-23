$(document).ready(function () {
  $("img").click(function () {
    console.log($(this).attr("alt-pic"));
    console.log($(this).attr("src"));

    let oldSrc = $(this).attr("src");
    let newSrc = $(this).attr("alt-pic");

    $(this).attr("src", newSrc);
    $(this).attr("alt-pic", oldSrc);
  });
});
