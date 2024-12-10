

function generateCalender(){
    const calender=[];
    const yearInput = document.getElementById("year").value;
    const month = ["January", "February", "March", "April","May", "June", "July", "August", "September", "October","November", "December"];
    const day = ["Sun","Mon", "Tues", "Wed", "Thurs","Fri", "Sat"];
    for(let m=0; m<12; m++)
        {
        console.log(month[m]);
        let calender=[];
        for(i=0;i<6;i++){
            calender.push([]);
            for(j=0;j<7;j++){
                calender[i].push(null);
            }
        }
        const firstday=new Date(yearInput,m,1).getDate();
        const lastday=new Date(yearInput,m+1,0).getDate();
        let day=1;
        let row=0;
        let col=firstday;
        while(day<=lastday){
            calender[row][col]=day;
            col++;
            if(col===7){
                row++;
                col=0;
            }
            day++;
        }
        
        console.log(calender);
    }
    
}