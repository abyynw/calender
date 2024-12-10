function calculate(){
    const form1=document.getElementById("examform");
    score=0;
    if(form1.q1.value==="c"){
        score++;
    }
    if(form1.q2.value==="b"){
        score++;
    }
    if(form1.q3.value==="b"){
        score++;
    }
    if(form1.q4.value==="d"){
        score++;
    }
    if(form1.q5.value==="d"){
        score++;
    }
    if(form1.q6.value==="b"){
        score++;
    }
    if(form1.q7.value==="c"){
        score++;
    }
    if(form1.q8.value==="a"){
        score++;
    }
    if(form1.q9.value==="c"){
        score++;
    }
    if(form1.q10.value==="a"){
        score++;
    }
    alert("Congrags!!!... You Have Scored " + score + " Points.")
}