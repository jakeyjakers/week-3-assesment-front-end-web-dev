console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted sucessfully.")
	
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



const hello = () =>{
	alert('You have good cooking skills.')

}

const imgAlert = document.querySelector('#duck')

imgAlert.addEventListener('mouseover', hello)