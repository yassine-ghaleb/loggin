var objPeople = [
    {
    	username:"sam",
    	password:"password25"

    },
    {
        username:"matt",
        password:"password88"	
    },
    {
        username:"chris",
        password:"password3"
    },
    {
        username:"yassine",
        password:"jumpman"
    }
    ]

    function getInfo() {
    	
    	var username = document.getElementById("username").value
    	var password = document.getElementById("password").value 

    	    for(i = 0; i < objPeople.length; i++) {
    	    	if(username == objPeople[i].username && password == objPeople[i].password)
    	    		{
                        console.log( username + " is logged in!!" )
    	    	}
                else {console.log("incorrect username or password")
            }
    	}
    };