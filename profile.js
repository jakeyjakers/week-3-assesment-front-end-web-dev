console.log('test')

const color = document.querySelector('#color')

const place = document.querySelector('#place')

const ritual = document.querySelector('#ritual')

const alertColor = () =>{
    alert('Jake\'s favourite color is teal ')
}

color.addEventListener('click', alertColor)

const alertPlace = () =>{
    alert('Jak\'s favourite place honestly at the moment is \n probaly the aquarium store. Or anywhere in the \n wilderness.')
}

place.addEventListener('click', alertPlace)

const alertRitual = ( ) =>{
    alert('Jake\'s favorite ritual is sitting down and having a game day \n game night with his pals. Preferabally playing Twilight Imperium \n trying to masterfully craft and exucute galactic domination \ using negotiation, politics, betrayel, and battlefield tactics.') 
}

ritual.addEventListener('click', alertRitual)

