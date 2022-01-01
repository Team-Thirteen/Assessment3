function openTeamMember(evt, memberName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(memberName).style.display = "block";
    evt.currentTarget.className += " active";

    //Hide h1 element onclick of team member name 
    var x = document.getElementById("theTeam"); {
        x.style.display = "none";
    }
    
    //Hide team images element onclick of team member name 
    var x = document.getElementById("theTeamImages"); {
        x.style.display = "none";
    }
}
