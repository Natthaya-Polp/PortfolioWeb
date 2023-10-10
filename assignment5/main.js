
var postCount = 0;

function postFunction()
{
    postCount++;

    var text1 = document.getElementById("text1"); 
    var topic1 = document.getElementById("topic1"); 
    var comment1 = document.getElementById("comment1"); 
    var comment2 = document.getElementById("comment2"); 

    var text1Value = text1.value;
    
    if (text1Value === "")
    {
        alert("It's nothing to post! Please type and try again.");
        postCount = postCount-1;
    }
    else if (postCount === 1)
    {
        topic1.innerHTML = text1Value;
    }
    else if (postCount === 2)
    {
        comment1.innerHTML = text1Value;
    }
    else if (postCount === 3)
    {
        comment2.innerHTML = text1Value;
    }
    else if (topic1.innerHTML !== "" && comment1.innerHTML !== "" && comment2.innerHTML !== "")
    {
        alert("It's full! Please clear and try again.");
    }

    text1.value = "";
}

function clearFunction()
{
    postCount = 0;

    topic1.innerHTML = "";
    comment1.innerHTML = "";
    comment2.innerHTML = "";
}