$imgSwap = $('.demo-hover'); //Class applied to all image swap triggers

//Declare the timer exists as a variable outside the function that it's created in (scope) so that it can be modified outside that function
var timer;

$imgSwap.hover( 
  changeSrc,    // mouseenter: Execute the changeSrc function below
  changeBack    // mouseleave: Execute the changeBack function below
);

function changeSrc() {
  var collection = $(this).attr('data-collection');   //Get the "Collection" of the trigger
  $demoImg = $('#' + collection);                     //Find the placeholder applied to that collection
  var demoSrc = $(this).attr('data-demo');            //Get the image applied to the trigger

  clearTimeout(timer);                                //Stop the Timeout caused by mouseleave of a trigger
  $demoImg.attr('src', demoSrc);                      //Apply the image to the placeholder
  $(this).addClass('demo-active');
}

function changeBack() {
  var collection = $(this).attr('data-collection');   //Get the "Collection" of the trigger
  $demoImg = $('#' + collection);                     //Find the placeholder applied to that collection
  var demoOriginal = $demoImg.attr('data-original');  //Get the original image for the placeholder

  //We don't want the image to immediately revert, so we create a timer that can be cancelled
  timer = setTimeout(function(){
            $demoImg.attr('src', demoOriginal);       //Apply the original image to the placeholder again
          }, 1500);
  
  //Remove that Active class since it's no longer true
  $(this).removeClass('demo-active');

}