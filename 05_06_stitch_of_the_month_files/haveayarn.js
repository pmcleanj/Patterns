var textColor = 'black';
var bgcolor = 'rgb(246,239,229)';
var bar_bgcolor ='#93A070';
var hlcolor = '#F9F9F9';
var hltxtcolor = 'rgb(147,160,112)';
var selected;

function menuOnMouseOver(obj) {
		 obj.style.backgroundColor=hlcolor;
		 obj.style.cursor='hand';
		 obj.style.color=hltxtcolor;
	
}
function menuOnMouseOut(obj) {
	
	if(selected == null || !(obj.name == selected.name)){
		obj.style.backgroundColor=bgcolor;
		obj.style.color=textColor;
	}

}
function menuOnClick(obj){
		
}

function selectionBarOnMouseOver(obj) {
		 obj.style.backgroundColor=hlcolor;
		 obj.style.cursor='hand';
		 obj.style.color=hltxtcolor;
	
}
function selectionBarOnMouseOut(obj) {
	
	if(selected == null || !(obj.name == selected.name)){
		obj.style.backgroundColor=bar_bgcolor;
		obj.style.color=textColor;
	}

}