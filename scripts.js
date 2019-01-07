$(document).ready(function() {
  const parks = document.querySelectorAll(".unvisited");

  function showAll() {
    [...parks].forEach(park => {
      park.classList.remove("hidden");
    });
  }

  function showVisited() {
    [...parks].forEach(park => {
      park.classList.add("hidden");
    });
  }

  $(".segmented label input[type=radio]").each(function() {
    $(this).on("change", function() {
      if ($(this).is(":checked")) {
        $(this)
          .parent()
          .siblings()
          .each(function() {
            $(this).removeClass("checked");
          });
        $(this)
          .parent()
          .addClass("checked");
      }

      if (this.id === "all") {
        showAll();
      } else {
        showVisited();
      }
    });
  });
});
