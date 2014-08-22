AJS.$(function() {
  AJS.$("form#quick-search").attr('action', '/search');
  AJS.$("form#quick-search #quick-search-query").attr('name', 'q');
  AJS.$("form#quick-search #quick-search-query").attr('placeholder', 'Search...');
  AJS.$("form#quick-search .quick-nav-drop-down").removeClass("quick-nav-drop-down");
});
