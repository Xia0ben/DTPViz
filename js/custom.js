// Menu Toggle Script
$("#menu-toggle").click(function(e) {
     e.preventDefault();
     $("#wrapper").toggleClass("toggled");
});

// File loader automatic text changer
$(document).on('change', '#file', function(){
  if (this !== undefined && this.files !== undefined && this.files.length !== 0) {
    var file = this.files[0];

    var customFileControl = $(this).siblings('.custom-file-control');
    customFileControl.text(file.name);

    $('.custom-file-control').css('content', '');
  }
});
