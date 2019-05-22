//listen for authentication status changes
auth.onAuthStateChanged(user => { //callback function ~ fires at every sign in / sign up / log out
    //user parameter is null if user logged out otherwises returns something
    
    if(user) {
        console.log('User Logged In ',user);
        UISetup(user); //passes in the document & User Creditals
    } else {
        console.log('User is logged out');
    }
});

//signs out the current user
//signout still a async