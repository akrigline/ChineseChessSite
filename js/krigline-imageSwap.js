$imgSwap = $('.demo-hover'); //Class applied to all image swap triggers

//Declare the timer exists as a variable outside the function that it's created in (scope) so that it can be modified outside that function
var timerOut;

$imgSwap.hover( 
  changeSrc,    // mouseenter: Execute the changeSrc function below
  changeBack    // mouseleave: Execute the changeBack function below
);

function changeSrc() {
  var collection = $(this).attr('data-collection');   //Get the "Collection" of the trigger
  $demoImgCurrent = $('.demo-' + collection + '.current');
  $demoImgNext = $('.demo-' + collection + '.next');
  var demoSrc = $(this).attr('data-demo');            //Get the image applied to the trigger

  clearTimeout(timerOut);                             //Stop the Timeout caused by mouseleave of a trigger
  timerIn = setTimeout(function(){

      $demoImgCurrent.removeClass('current').addClass('next');

      $demoImgNext.attr('src', demoSrc).addClass('current').removeClass('next');

  }, 500);

  $(this).addClass('demo-active');
  
}

function changeBack() {
  var collection = $(this).attr('data-collection');   //Get the "Collection" of the trigger
  
  $demoImgCurrent = $('.demo-' + collection + '.current');
  $demoImgNext = $('.demo-' + collection + '.next');

  var demoOriginal = $demoImgNext.attr('data-original');  //Get the original image for the placeholder


  clearTimeout(timerIn);
  //We don't want the image to immediately revert, so we create a timer that can be cancelled

  timerOut = setTimeout(function(){
          $demoImgCurrent.removeClass('current').addClass('next');
          $demoImgNext.attr('src', demoOriginal).removeClass('next').addClass('current');       //Apply the original image to the placeholder again
          }, 500);


  //Remove that Active class since it's no longer true
  $(this).removeClass('demo-active');

}