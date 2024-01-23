$(document).ready(function(){
   $('.navbar-toggle').click(function(){
   	$('.icon-bar').toggleClass('open')
   });
});

var typed = new Typed('#type', {
      strings: ['A Web Designer.','A Frontend Developer','A Blogger'],
      typeSpeed:200,
      backSpeed:200,
      loop:true
    });


window.onscroll = function(){
	scrollFunction();
}

function scrollFunction(){
	if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
		document.getElementById('navbar').style.top='0';
	}
	else{
		document.getElementById('navbar').style.top='-100px';
	}

}


function validateForm(){
	var fullname = document.myform.fullname.value;
	var email = document.myform.email.value;
	var organize = document.myform.organize.value;
	var message = document.myform.message.value;
    
    if (fullname==''&& email==''&&organize==''&&message=='') {
    	alert('the field is empty')
    	return false;
    }

	else if (fullname==null ||fullname=='') {

		alert('fullname field is empty');
		return false;
	}
	else if (email==null||email=='') {
		alert('email field is empty');
		return false;
	}
	else if (organize==null||organize=='') {
		alert('organize field is empty');
		return false;
	}
	else if (message==null||message=='') {
		alert('message field is empty');
		return false;
	}
}







	
