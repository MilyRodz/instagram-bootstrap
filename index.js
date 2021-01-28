$(document).ready(function () {

    // cuando la pagina carga se va a mostrar el grid.
    $(".post-header").hide();
    $(".post-footer").hide();
    

    $("#list").click(function (event) {
      event.preventDefault();
      $(".post-header").show();
      $(".post-footer").show();
      $("#row-container").removeClass("list-group");    
      $("#row-container").addClass("list-group");
      $("#row-container>div.col-centered").removeClass("col-centered");
      $("#row-container>div").addClass("col-centered");
    });
  
    $("#grid").click(function (event) {
      event.preventDefault();
      $("#row-container").removeClass("list-group");
      $("#row-container>div.col-centered").removeClass("col-centered");
      $(".post-header").hide();
      $(".post-footer").hide();
    });
    
  });

  

