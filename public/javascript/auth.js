//listen for authentication status changes
auth.onAuthStateChanged(user => { //callback function ~ fires at every sign in / sign up / log out
    //user parameter is null if user logged out otherwises returns something
    
    if(user) {
        console.log('User Logged In ',user)
    } else {
        console.log('User is logged out')
    }
});

var modal = document.querySelector('#Login-Overlay');

const signupForm = document.querySelector("#Signup-Stuff"); //sign up element

const logOut = document.querySelector("#Log-Out"); //logging out element

const signinForm = document.querySelector("#Signin-Stuff"); //log in element

//signing users up
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get use info
    const email = signupForm['Email-Signup'].value; //use value input
    const password = signupForm['Password-Signup'].value;

    //this method below needs to be async with .then method
    //firebase method to sign up user and register to database || using auth const in index.html
    auth.createUserWithEmailAndPassword(email,password).then(credit => { //gives user a creditenial token
        //console.log(credit);
        modal.style.display = 'none';
    }); //method to take parameters in and store in firebase
    //check backend or firebase to see the magic happen
});

//signs out the current user
//signout still a async
logOut.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut();
})

//logs in a user
//as always the method is async
signinForm.addEventListener('submit', e => {
    e.preventDefault();

    //get user info
    const email = signinForm["Email-Signin"].value;
    const password = signinForm["Password-Signin"].value;

    auth.signInWithEmailAndPassword(email,password).then(credit => {
        //console.log(credit.user);
        modal.style.display = 'none';
    })
});