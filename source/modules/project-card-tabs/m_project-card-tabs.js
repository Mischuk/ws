function projectCardTabs() {
  var $nav = $('.project-card-tabs-nav a');
  var $content = $('.project-card-tabs-content section');
  $nav.on('click', function(){
    var $this = $(this);
    $nav.removeClass('current');
    $this.addClass('current');
    $content.removeClass('current');
    $content.eq($this.index()).addClass('current');
  });
}
projectCardTabs();