const image1 = document.getElementById("img1");
const paragraph1 = document.getElementById("para1");
image1.addEventListener("mouseover",enlarge);
image1.addEventListener("mouseout",normalview);

function enlarge(){
    image1.src="https://images.unsplash.com/photo-1727708246993-e70bba5da6f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    paragraph1.innerHTML=`"Every face tells a story, every corner holds a secret."`
}

function normalview(){
    image1.src="https://images.unsplash.com/photo-1719658414203-83fdaf1bdb33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    paragraph1.innerHTML=`"The best moments are often the ones you don't expect to find."`
}