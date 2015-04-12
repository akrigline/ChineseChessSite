

$imgHovered = $('.demo-hover');

/*
$imgHovered.hover(
  function(){
    console.log('hovered!')
  }, function(){
    console.log('unHovered!')
  }
);
*/
$imgHovered.hover( changeSrc, changeBack );

function changeSrc() {
  var collection = $(this).attr('data-collection');
  var demoSrc = $(this).attr('data-demo');

  console.log(this);

  $demoImg = $('#' + collection);

  $demoImg.attr('src', demoSrc);

}

function changeBack() {
  var collection = $(this).attr('data-collection');

  $demoImg = $('#' + collection);

  var demoOriginal = $demoImg.attr('data-original');

  $demoImg.attr('src', demoOriginal);

}