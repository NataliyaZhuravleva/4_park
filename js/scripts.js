$(document).ready(function() {
  
  const height = parseInt(prompt("Please, enter your height in inches here:"));

  if (height <=48) {
    $("#kids_rides").show();
  } else if (height>48 && height<60) {
    $("#kids_rides").show();
    $("#adults_rides").show();
  } else if (height>60) {
      $("#adults_rides").show();
  };

});