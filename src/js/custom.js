// File loader automatic text changer
$(document).on('change', '#file', function(){
  if (this !== undefined && this.files !== undefined && this.files.length !== 0) {
    var file = this.files[0];

    var customFileControl = $(this).siblings('.custom-file-control');
    customFileControl.text(file.name);

    $('.custom-file-control').css('content', '');
  }
});

// Slider initialization
$("#timePeriodSlider").slider();

$("#timePeriodSlider").change(function() {
  var minTime = new Date($(this).siblings('.slider').find('.min-slider-handle').attr('aria-valuenow') * 1000);
  var maxTime = new Date($(this).siblings('.slider').find('.max-slider-handle').attr('aria-valuenow') * 1000);
  $('#leftTimePeriod').text(minTime.getFullYear() + '-' + minTime.getMonth() + '-' + minTime.getDate());
  $('#rightTimePeriod').text(maxTime.getFullYear() + '-' + maxTime.getMonth() + '-' + maxTime.getDate());
});

// Popovers and slider initialization whenever we load elements
$(document).change(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
