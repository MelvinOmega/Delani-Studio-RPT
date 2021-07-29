$(document).ready(function(){
    $("div#design").click(function(){
        $('.design').slideToggle()
        $('.design1').slideToggle()
    })



    $("div#development").click(function(){
        $('.dvt').slideToggle()
        $('.dvt1').slideToggle()
    })
   

    $("div#p-management").click(function(){
        $('.pmngt').slideToggle()
        $('.pmngt1').slideToggle()
    })
  
})

function validator(){
    var username=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('message').value
    if(username==''){
        alert('Hello, Kindly input your username');
        username.focus();
        return false;
        
    }else
    if(email==''){
        alert('Hello '+username+'\n  Kindly add your email address');
        email.focus();
        return false
    }else
    if(message==''){
        alert('Hi '+username+' You forgot to leave us a message')
        message.focus()
        return false;
        
    }else
    alert('Dear '+username+'\n  Thank you for filling this form.')
}