function sendMail(){
	var name = document.getElementById("name").value;
    
	//var phone = document.getElementById("phone").value;

	//var email = document.getElementById("email").value;

	//var category = document.getElementById("category").value;

	//var message = document.getElementById("message").value;
	

  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'VkHVA08FlEE6Ymc1OF3Z0A',
      'message': {
        'from_email': 'ef.moyano@gmail.com',
        'to': [
          {
            'email': 'efmoyano@porttobelhoeventos.com',
            'name': 'Ernesto Moyano',
            'type': 'to'
          }
        ],
        'subject': 'Mensaje de Amor',
        'html': 'Hola Hermosa te amo un monton'
      }
    }
  });
console.log("sddfsdfsdfsfd");
}