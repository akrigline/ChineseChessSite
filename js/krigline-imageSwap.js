$imgSwap = $('.demo-hover'); //Class applied to all image swap triggers

$imgSwap.hover( 
  changeSrc,    // mouseenter: Execute the changeSrc function below
  changeBack    // mouseleave: Execute the changeBack function below
);

function changeSrc() {
  var collection = $(this).attr('data-collection');   //Get the "Collection" of the trigger
  $demoImg = $('#' + collection);                     //Find the placeholder applied to that collection
  var demoSrc = $(this).attr('data-demo');            //Get the image applied to the trigger

  $demoImg.attr('src', demoSrc);

}

function changeBack() {
  var collection = $(this).attr('data-collection');   //Get the "Collection" of the trigger
  $demoImg = $('#' + collection);                     //Find the placeholder applied to that collection
  var demoOriginal = $demoImg.attr('data-original');  //Get the original image for the placeholder

  setTimeout(function(){
    $demoImg.attr('src', demoOriginal);
  }, 2500);
}