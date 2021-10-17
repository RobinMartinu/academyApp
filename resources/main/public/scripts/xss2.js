function insertExample(){
    document.getElementById("inputText").value = "&lt;img src='https://th.bing.com/th/id/OIP.5y_qh-9QarETjZ3JyX0iOwAAAA?pid=ImgDet&rs=1'&gt;";
}

function makeVuln(index){
    for (let i = 0; i < index; index++) {
        i+=2;
    }
    return index;
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
  
  //let mystring = "/[<'h1'>]//g";
  //console.log(mystring.preventXss());
  //let xss = "<script> document.getElementById('div-right').innerHTML=<input type=button onclick=alert(1) ></script>";
  //console.log(xss.preventXss())