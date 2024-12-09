/* Team 17 - Brisa Andrade, 
* Project 3: MovieList , 581 Software Engineering II, 11.08.2024 -->
* UserLogON.css
* This file is made up of all Javascript Functions used to log a user into their account and log them out.
*/
        

        /*Opens up a pop up that asks a user if they wish to log into the service or sign up.
        * @param id is the id of the pop up the user wants to interact with
        * @returns a openned popup on home page
        */
        function openPopUp(id)
        {
            /*Ensures that all other pop ups are closed*/
            document.getElementById('accountStart').style.display="none";
            document.getElementById('userLoginForm').style.display="none";
            document.getElementById('userSignupForm').style.display="none";

            /*Opens on pop up user wants to interact with*/
            document.getElementById(id).style.display="block";

            //hides homepage body in order to hide layering issue in code
            document.getElementById('homePage').style.display="none";

        } //end openPopUp

        //Closes a Pop Up in homepage browser window on MovieList webpage
        // @param id is the element id of the pop up that is to be hidden
        // @returns a closed popup on homepage
        function popUpClose(id)
        {
            document.getElementById(id).style.display="none";
            document.getElementById('homePage').style.display="block";
        }
        

        //close previous pop up to allow between login and account creation, opens new pop up allowing user to log into movieList webpage
        //@returns new log in pop up onto homepage

        function userLogin()
        {
            popUpClose('accountStart');
            openPopUp('userLoginForm');
        } //end userLogin

        //close previous pop up to allow between login and account creation, opens new pop up allowing user to create an account using movieList webpage
        //@returns new pop up that allows a user to sign up for access to the remainder of movieList webpage
        function userSignup()
        {
            popUpClose('accountStart');
            openPopUp('userSignupForm');
        }//end userSignup

        //redirects a user to discover page once log in has been achieved. 
        function logIn()
        {
            /*Closes user log in form*/
            popUpClose('userLoginForm');
            window.location.replace("DiscoverPage.html")
            let loggedin=true;   
        } //end logIn

        //logs a user out and takes them to the home page(only page accessible to logged out users
        function logOut()
        {
            window.location.replace("MovieListHeaderNoSession.html")
        } //end LogOut
