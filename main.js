//Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){
	
        var btnColor = document.getElementByTagName("button");

	var comingSoon = function (){
		alert("Coming soon:\n-iOS and Android Native Features Information\n-JSON-P APIs\n-Research Week 2 and Week 3");
	}

        var btnChange = function () {
                btnColor.style.background= "red";
}
 
        btnColor.onclick = btnChange();

	
	comingSoon();
});