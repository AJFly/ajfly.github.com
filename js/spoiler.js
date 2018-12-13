version.extensions['spoilerMacro'] = { 
	major:1, minor:0, revision:0 
};
macros['spoiler'] = {
	handler: function(place, macroName, params, parser) {
		var spoiler = insertElement(place,"span",null,"spoiler");
		var link = insertElement(spoiler,"span",null,"spoiler-link","Spoiler");
		insertElement(spoiler,"span",null,"spoiler-text hidden",params);
		link.onclick = function(event){
			event = event || window.event;
			var text = event.target.parentNode.getElementsByTagName('span')[1];
			text.classList.toggle("hidden");
		};
	},
	init: function() { },
};