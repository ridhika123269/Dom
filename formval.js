function sub(){
	var n=document.getElementById("name")
	if(n.value==""){
		window.alert("Please enter your name");
	}
	var a=document.getElementById("age")
	if(a.value==""){
		window.alert("Please enter your age");
	}
	var m=document.getElementById("mobile")
	if(m.value==""){
		window.alert("Please enter your mobile number");
	}
	if(document.getElementById("male").checked== false && document.getElementById("female").checked==false){
		window.alert("Please select your gender");
	}
	var t=document.getElementById("type");
	if(t.selectIndex<1){
		window.alert("Please select type of insurance");
	}
	if(document.getElementById("credit").checked== false && document.getElementById("debit").checked==false && document.getElementById("bank").checked==false){
		window.alert("Please select mode of payment");
	}
}