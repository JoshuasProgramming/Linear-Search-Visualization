//Grab elements
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const start = document.getElementById('start');

//create arrays
          //[1,2,3,4,5]
let arr = [box1.className, box2.className, box3.className, box4.className, box5.className];
let box = [box1,box2,box3,box4,box5];

//add styling to boxes
box1.innerHTML = box1.className;
box1.style.textAlign = "center";
box1.style.fontSize = "50px";
box1.style.margin = "10px";

box2.innerHTML = box2.className;
box2.style.textAlign = "center";
box2.style.fontSize = "50px";
box2.style.margin = "10px";

box3.innerHTML = box3.className;
box3.style.textAlign = "center";
box3.style.fontSize = "50px";
box3.style.margin = "10px";

box4.innerHTML = box4.className;
box4.style.textAlign = "center";
box4.style.fontSize = "50px";
box4.style.margin = "10px";

box5.innerHTML = box5.className;
box5.style.textAlign = "center";
box5.style.fontSize = "50px";
box5.style.margin = "10px";

//once the start button is pressed...
start.addEventListener("click", (e)=>{
    //Linear Search Algorithm Starts
    let pick = prompt("Enter number");
    let found = false;
    
    for(let i = 0; i < arr.length; i++){
        if((arr[i] == i+1) && (pick == i+1)){
            alert(arr[i] + " found at index " + i);
            i--;
            found = true;
            changeColor(i);
            return;
        }
    }
    
    if(found == false){
        alert(pick + " not found");
        return;
    }
    //Linear Search Algorithm Ends
    
    function changeColor(i){
        let index = i+1;
        
        if(arr[index] = index){
            box[index].style.backgroundColor = "blue";
            box[index].style.transition = "2s";
            box[index].style.cursor = "pointer";
            
            box[index].addEventListener("click", (e)=>{
                alert(pick + " took " + (index + 1) + " iterations to find");
                return;
            })
            changeColor2();
            return;
        }
        if(arr[index] = index-1){
            box[index].style.backgroundColor = "blue";
            box[index].style.transition = "2s";
            box[index].style.cursor = "pointer";
            
            box[index].addEventListener("click", (e)=>{
                alert(pick + " took " + (index + 1) + " iterations to find");
                return;
            })
            changeColor2();
        }
        
        //create the element for para 
        function changeColor2(){
            let output = document.createElement("p");
        
            output.innerHTML = "previous found " + "box" + (index+1);
            document.body.appendChild(output);
        
            const clear = document.getElementById('clear').addEventListener("click", (e)=>{
                for(let i = 0; i < arr.length; i++){
                    box[index].style.backgroundColor = "lightblue";
                    box[index].style.cursor = "default";
                }
            })
        }
        
    }
})