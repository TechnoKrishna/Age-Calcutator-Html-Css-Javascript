function findAge(){

    let currentDate = new Date();
    var getAge = document.getElementById("input").value;
    var currentYear = currentDate.getFullYear();

    if(!(getAge == ""))
    {
        if((getAge.toString()).length == 4)
        {
            if(getAge <= currentYear)
            {
                var age = currentYear - getAge;
                console.log(getAge);
                console.log(currentYear);
                console.log(age);
                document.getElementById("text").innerHTML = age;
            }
            else
            {
                document.getElementById("input").value = "";
                document.getElementById("text").innerHTML = "";
                alert("Fuck!! Yor are a Time Traveler shit...");
            }
        }
        else
        {
            document.getElementById("input").value = "";
            document.getElementById("text").innerHTML = "";
            alert("It's An Invalid Year");
        }
    }
    else
    {
        document.getElementById("text").innerHTML = "";
        alert("First Enter A Year!!!");
    }


    

    

}