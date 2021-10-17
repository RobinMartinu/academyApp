let index = Math.floor(Math.random()*(101));
console.log(index);

function generateGrid(){

    let values = ["John", "Bathtub", "Kitchen", "Dog collar", "34-56-200-8", "Walker",
     "And then my heart", "with pleasure fills.", "And dances", "with the daffodils.",
    ""]

    //let index = Math.floor(Math.random()*(101));

    for (let i = 0; i < 100; i++) {
        let valueIndex = Math.floor(Math.random()*(values.length+1));
        let child = document.createElement("input");
        child.id = i;
        //if(i == index){
        //    child.type = "hidden";
        //    child.value = "Test";
        //} else {
            child.type = "text";
            child.value = values[valueIndex];
        //}
       
        child.style.display="inline-block";
        child.style.color="#FF5800";
        child.style.backgroundColor="#D1D0D0";
        
        document.getElementById("hundredForms").append(child);
        
    }
    /*
    let child = document.createElement("input");
        child.id = 23;
        child.type = "hidden";
        child.value = "Test";
        child.style.display="inline-block";
        
        document.getElementById("hundredForms").append(child);

    for (let i = 24; i < 100; i++) {
        let valueIndex = Math.floor(Math.random()*(values.length+1));
        let child = document.createElement("input");
        child.id = i;
        child.type = "text";
        child.style.display="inline-block";
        child.value = values[valueIndex];
        
        document.getElementById("hundredForms").append(child);
        
    } */
    
}

function insertExample(){
    console.log(index);
    document.getElementById(index).value = '<img src="x" onerror=alert(1)>';
}

function addLinks(){
    // <button onClick="location.href += 'bonus'" style="position:absolute; margin-top:-4%; margin-left: 18%; border:none !important; background:transparent; font-size: 7px; color:white;">Site #4</button>
   // document.getElementById("page-choice").append("<button onClick='location.href += 'bonus'' style='position:absolute; margin-top:-4%; margin-left: 18%; border:none !important; background:transparent; font-size: 7px; color:black;'>Bonus</button>");
    let child = document.createElement("button");
    child.id = "bonus";
    child.style.position = 'absolute';
    child.style.marginTop = '-4%';
    child.style.marginLeft = '18%';
    child.style.border = "none !important";
    child.style.background = 'transparent';
    child.style.color = 'white';
    child.innerText = "Bonus";
    child.addEventListener("click", function(){location.href += "bonus"});
    document.getElementById("page-choice").append(child);
    //document.getElementById("bonus").addEventListener("click", function(){location.href += "bonus"});
}

String.prototype.preventXss = function () {
    //const blackList = /[<script>]/g;
    const blackList = ["<script>", "</script>", "<", ">"];
    let str = this;
    for (let i = 0; i < blackList.length; i++){
        str = str.replace(blackList[i], '');
    }
    str = str.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    console.log(str);
    return String(str);
  };
  /*
    let mystring = "/[<'h1'>]//g";
    console.log(mystring.preventXss());
    let xss = "<script> document.getElementById('div-right').innerHTML=<input type=button onclick=alert(1) ></script>";
    console.log(xss.preventXss())
  */
    function transferPOST(target) {
        let data = [];
        for (let i = 0; i < 100; i++) {
            let value = document.getElementById(i).value;
            if(i != index){
                value.preventXss();
            }
            data.push(value);
        }
        console.log(data);
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
            document.getElementById(target).innerHTML = this.responseText;
            }
        };

        xhttp.open("POST",location, true);
        xhttp.setRequestHeader('Content-type', 'text/plain');
        //xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.withCredentials = true;

        xhttp.send(data);
        
        }