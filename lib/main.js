function showNewPage(clicked)
{
	var button = document.getElementById(clicked).id;
	switch (button)
	{
		case "aboutMeButton": 
			document.getElementById(clicked).class ="active" ; 
			document.getElementById("aboutMePage").style.display = "table";  
			document.getElementById("resumeButton").class = "inactive";
			document.getElementById("resumePage").style.display = "none"; 
			document.getElementById("projectsButton").class = "inactive"; 
			document.getElementById("projectsPage").style.display = "none"; 
			document.getElementById("contactButton").class = "inactive";
			document.getElementById("contactPage").style.display = "none";
			break; 

		case "resumeButton": 
			document.getElementById(clicked).class ="active" ; 
			document.getElementById("resumePage").style.display = "table";  
			document.getElementById("aboutMeButton").class = "inactive";
			document.getElementById("aboutMePage").style.display = "none"; 
			document.getElementById("projectsButton").class = "inactive"; 
			document.getElementById("projectsPage").style.display = "none"; 
			document.getElementById("contactButton").class = "inactive";
			document.getElementById("contactPage").style.display = "none";
			break; 

		case "projectsButton": 
			document.getElementById(clicked).class ="active" ;  
			document.getElementById("projectsPage").style.display = ""; 
			document.getElementById("resumeButton").class = "inactive";
			document.getElementById("resumePage").style.display = "none"; 
			document.getElementById("aboutMeButton").class = "inactive"; 
			document.getElementById("aboutMePage").style.display = "none"; 
			document.getElementById("contactButton").class = "inactive";
			document.getElementById("contactPage").style.display = "none";
			break; 

		case "contactButton": 
			document.getElementById(clicked).class ="active" ;  
			document.getElementById("resumeButton").class = "inactive";
			document.getElementById("resumePage").style.display = "none"; 
			document.getElementById("projectsButton").class = "inactive"; 
			document.getElementById("projectsPage").style.display = "none"; 
			document.getElementById("aboutMeButton").class = "inactive";
			document.getElementById("aboutMePage").style.display = "none";
			break; 

		

	}

}