const SigninElements = document.querySelectorAll('.Sign-In-Stuff');
const SignoutElements = document.querySelectorAll('.Sign-Out-Stuff');

//setting up user logged/Out in stuff
const UISetup = (input) => { //input is the data received
    if(input) {
        SigninElements.forEach(item => item.style.display = 'inherbit');
        SignoutElements.forEach(item => item.style.display = 'none');

        SigninElements[0].innerHTML += `
            <p id="Score"> Current Balance:${input.docs[0].data().score} </p> 
            <p class="Seperator" style="padding:0 0.2rem">|</p>
            <p id="Log-Out" onclick="Why()">Log Out</p>
        `
    }
    else {
        SigninElements.forEach(item => item.style.display = 'none');
        SignoutElements.forEach(item => item.style.display = 'inherbit');
    }
    console.log(input.docs[0].data()); //gets the data which is score
}
