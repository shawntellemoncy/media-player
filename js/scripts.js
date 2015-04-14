// Media Element Player

$('audio,video').mediaelementplayer({
	success: function(player, node) {
	  $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
	},
	startLanguage: 'en',
	translationSelector: true
  features: ['playpause','current','volume'],

});


$('#video-filter').click(function(){

  // hide audio
  $('.mejs-audio').hide();
  // show video
  $('.mejs-video').show();
  
});

$('#audio-filter').click(function(){
  
  // hide video
  $('.mejs-video').hide();
  // show video
  $('.mejs-audio').show();

});