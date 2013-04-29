var site = (function(){

  var $menu;

  function activateMenu(){
    $menu.menuAim({
      activate: activateSubmenu,
      deactivate: deactivateSubmenu
    });
  };

  function activateSubmenu(entry) {
    $(entry).children(".submenu").show();
    console.log("activate");
  };

  function deactivateSubmenu(entry) {
    $(entry).children(".submenu").hide();
    console.log("deactivate");
  };

  function init(){
    $menu = $(".menu");
    activateMenu();
  };

  return {
    init:init
  }
})();

$(window).ready(function(){
  site.init();
  $(document).click(function() {
    $(".submenu").hide();
  });
});