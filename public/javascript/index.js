const signinElements = document.querySelectorAll('.Sign-In-Stuff'); //Stuff with Sign in class to it
const signoutElements = document.querySelectorAll('.Sign-Out-Stuff'); //Stuff with Sign Out class to it

//setting up user logged/Out in stuff
const UISetup = (input) => { //input is the data received
    if(input) {
        signinElements.forEach(item => item.style.display = 'inherbit');
        signoutElements.forEach(item => item.style.display = 'none');

        //for upper Sign portion || Gets User Email & Score & also lets them log out
        dataBase.collection('users').doc(input.uid).get().then(doc => {
            signinElements[0].innerHTML = `
                <p id="Creditials">${input.email}</p>
                <p class="Seperator" style="padding:0 0.2rem">|</p>
                <p id="Score"> Current Balance:${doc.data().score} </p> 
                <p class="Seperator" style="padding:0 0.2rem">|</p>
                <p id="Log-Out" onclick="Why()">Log Out</p>
            `
        });
        
        //shows current score and log out option
    }
    else {
        signinElements.forEach(item => item.style.display = 'none');
        signoutElements.forEach(item => item.style.display = 'inherbit');
    }
}