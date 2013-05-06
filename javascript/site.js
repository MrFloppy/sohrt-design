var site = (function(){

  var
    $menu,
    MENU_CLASS = "menu",
    SUBMENU_CLASS = "submenu"
  ;

  function activateMenu(){
    $menu.menuAim({
      activate: activateSubmenu,
      deactivate: deactivateSubmenu
    });
  };

  function activateSubmenu(entry) {
    $(entry).children("." + SUBMENU_CLASS).show();
//    console.log("activate");
  };

  function deactivateSubmenu(entry) {
    $(entry).children("." + SUBMENU_CLASS).hide();
//    console.log("deactivate");
  };

  function calculateHeight() {
    var menuHeight = $("." + MENU_CLASS).height();
//    console.log(menuHeight);
    $("." + SUBMENU_CLASS).height(menuHeight);
  };

  function init(){
    $menu = $("." + MENU_CLASS);
    activateMenu();
    calculateHeight();
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