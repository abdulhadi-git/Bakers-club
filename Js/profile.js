$(document).ready(function(){
    function setProfile(){
        let ProfileName = localStorage.getItem("CurrentUser");
        let ProfileEmail = localStorage.getItem("CurrentEmail");
        $('#profile-name').html(ProfileName);
        $('#profile-email').html(ProfileEmail);
    }
    setProfile();
    

})