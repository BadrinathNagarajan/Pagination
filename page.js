
let xhr = new XMLHttpRequest();

xhr.open('GET','https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json',true)
let response 
 xhr.onload = function(){
     if(xhr.status===200){ //checking if server has send proper request
         response = JSON.parse(xhr.responseText); //parse the json
         console.log(response)   
         
         for(let i=0; i<10; i++) {
         
            let idtext = document.createElement("p")
            idtext.setAttribute("class","paraid")
            idtext.style.margin = "0px"
            idtext.innerHTML = response[i].id   
            document.body.appendChild(idtext)
            
        
            let emailtext = document.createElement("p")
            emailtext.setAttribute("class","paraemail")
            emailtext.style.margin = "0px"
            emailtext.innerHTML = response[i].email
            document.body.appendChild(emailtext)
            
        
            let nametext = document.createElement("p")
            nametext.setAttribute("class","paraname")
            nametext.style.margin = "0px"
            nametext.innerHTML = response[i].name    
            document.body.appendChild(nametext)
            let mybr2 = document.createElement("br")
            document.body.appendChild(mybr2)
            let mybr3 = document.createElement("br")
            document.body.appendChild(mybr3)
           }
        }
     else{
         console.log("Error") 
     }
 }

//send the request
 xhr.send()

 

function firstpage(){

var removedivs = document.getElementsByClassName('paraid')
var removedivs1 = document.getElementsByClassName('paraemail')
var removedivs2 = document.getElementsByClassName('paraname')
while(removedivs.length > 0){
    removedivs[0].parentNode.removeChild(removedivs[0]);
    removedivs1[0].parentNode.removeChild(removedivs1[0]);
    removedivs2[0].parentNode.removeChild(removedivs2[0]);
}

var removebrktags=document.getElementsByTagName('br')
while(removebrktags.length > 0){
    removebrktags[0].parentNode.removeChild(removebrktags[0]);
}
let n=1
for(let i=(n-1)*10; i<(n*10); i++) {
         
    let idtext = document.createElement("p")
    idtext.setAttribute("class","paraid")
    idtext.style.margin = "0px"
    idtext.innerHTML = response[i].id   
    document.body.appendChild(idtext)
    

    let emailtext = document.createElement("p")
    emailtext.setAttribute("class","paraemail")
    emailtext.style.margin = "0px"
    emailtext.innerHTML = response[i].email
    document.body.appendChild(emailtext)
    

    let nametext = document.createElement("p")
    nametext.setAttribute("class","paraname")
    nametext.style.margin = "0px"
    nametext.innerHTML = response[i].name    
    document.body.appendChild(nametext)
    let mybr2 = document.createElement("br")
    document.body.appendChild(mybr2)
    let mybr3 = document.createElement("br")
    document.body.appendChild(mybr3)
   }
}

function secondpage(){
    var removedivs = document.getElementsByClassName('paraid')
    var removedivs1 = document.getElementsByClassName('paraemail')
    var removedivs2 = document.getElementsByClassName('paraname')
    while(removedivs.length > 0){
        removedivs[0].parentNode.removeChild(removedivs[0]);
        removedivs1[0].parentNode.removeChild(removedivs1[0]);
        removedivs2[0].parentNode.removeChild(removedivs2[0]);
    }

    var removebrktags=document.getElementsByTagName('br')
    while(removebrktags.length > 0){
        removebrktags[0].parentNode.removeChild(removebrktags[0]);
    }
    let n=2
    for(let i=(n-1)*10; i<(n*10); i++) {

    let idtext = document.createElement("p")
    idtext.setAttribute("class","paraid")
    idtext.style.margin = "0px"
    idtext.innerHTML = response[i].id   
    document.body.appendChild(idtext)
    

    let emailtext = document.createElement("p")
    emailtext.setAttribute("class","paraemail")
    emailtext.style.margin = "0px"
    emailtext.innerHTML = response[i].email
    document.body.appendChild(emailtext)
    

    let nametext = document.createElement("p")
    nametext.setAttribute("class","paraname")
    nametext.style.margin = "0px"
    nametext.innerHTML = response[i].name    
    document.body.appendChild(nametext)
    let mybr2 = document.createElement("br")
    document.body.appendChild(mybr2)
    let mybr3 = document.createElement("br")
    document.body.appendChild(mybr3)
       }
}


function thirdpage(){
    let n=3
    var removedivs = document.getElementsByClassName('paraid')
    var removedivs1 = document.getElementsByClassName('paraemail')
    var removedivs2 = document.getElementsByClassName('paraname')
    while(removedivs.length > 0){
        removedivs[0].parentNode.removeChild(removedivs[0]);
        removedivs1[0].parentNode.removeChild(removedivs1[0]);
        removedivs2[0].parentNode.removeChild(removedivs2[0]);
    }

    var removebrktags=document.getElementsByTagName('br')
    while(removebrktags.length > 0){
        removebrktags[0].parentNode.removeChild(removebrktags[0]);
    }
    
    for(let i=(n-1)*10; i<(n*10); i++) {

    let idtext = document.createElement("p")
    idtext.setAttribute("class","paraid")
    idtext.style.margin = "0px"
    idtext.innerHTML = response[i].id   
    document.body.appendChild(idtext)
    

    let emailtext = document.createElement("p")
    emailtext.setAttribute("class","paraemail")
    emailtext.style.margin = "0px"
    emailtext.innerHTML = response[i].email
    document.body.appendChild(emailtext)
    

    let nametext = document.createElement("p")
    nametext.setAttribute("class","paraname")
    nametext.style.margin = "0px"
    nametext.innerHTML = response[i].name    
    document.body.appendChild(nametext)
    let mybr2 = document.createElement("br")
    document.body.appendChild(mybr2)
    let mybr3 = document.createElement("br")
    document.body.appendChild(mybr3)
       }
}

function fourthpage(){
    let n=4
    var removedivs = document.getElementsByClassName('paraid')
    var removedivs1 = document.getElementsByClassName('paraemail')
    var removedivs2 = document.getElementsByClassName('paraname')
    while(removedivs.length > 0){
        removedivs[0].parentNode.removeChild(removedivs[0]);
        removedivs1[0].parentNode.removeChild(removedivs1[0]);
        removedivs2[0].parentNode.removeChild(removedivs2[0]);
    }

    var removebrktags=document.getElementsByTagName('br')
    while(removebrktags.length > 0){
        removebrktags[0].parentNode.removeChild(removebrktags[0]);
    }
    
    for(let i=(n-1)*10; i<(n*10); i++) {

    let idtext = document.createElement("p")
    idtext.setAttribute("class","paraid")
    idtext.style.margin = "0px"
    idtext.innerHTML = response[i].id   
    document.body.appendChild(idtext)
    

    let emailtext = document.createElement("p")
    emailtext.setAttribute("class","paraemail")
    emailtext.style.margin = "0px"
    emailtext.innerHTML = response[i].email
    document.body.appendChild(emailtext)
    

    let nametext = document.createElement("p")
    nametext.setAttribute("class","paraname")
    nametext.style.margin = "0px"
    nametext.innerHTML = response[i].name    
    document.body.appendChild(nametext)
    let mybr2 = document.createElement("br")
    document.body.appendChild(mybr2)
    let mybr3 = document.createElement("br")
    document.body.appendChild(mybr3)
       }
}


function fifthpage(){
    let n=5
    var removedivs = document.getElementsByClassName('paraid')
    var removedivs1 = document.getElementsByClassName('paraemail')
    var removedivs2 = document.getElementsByClassName('paraname')
    while(removedivs.length > 0){
        removedivs[0].parentNode.removeChild(removedivs[0]);
        removedivs1[0].parentNode.removeChild(removedivs1[0]);
        removedivs2[0].parentNode.removeChild(removedivs2[0]);
    }

    var removebrktags=document.getElementsByTagName('br')
    while(removebrktags.length > 0){
        removebrktags[0].parentNode.removeChild(removebrktags[0]);
    }
    
    for(let i=(n-1)*10; i<(n*10); i++) {

    let idtext = document.createElement("p")
    idtext.setAttribute("class","paraid")
    idtext.style.margin = "0px"
    idtext.innerHTML = response[i].id   
    document.body.appendChild(idtext)
    

    let emailtext = document.createElement("p")
    emailtext.setAttribute("class","paraemail")
    emailtext.style.margin = "0px"
    emailtext.innerHTML = response[i].email
    document.body.appendChild(emailtext)
    

    let nametext = document.createElement("p")
    nametext.setAttribute("class","paraname")
    nametext.style.margin = "0px"
    nametext.innerHTML = response[i].name    
    document.body.appendChild(nametext)
    let mybr2 = document.createElement("br")
    document.body.appendChild(mybr2)
    let mybr3 = document.createElement("br")
    document.body.appendChild(mybr3)
       }
}


function sixthpage(){
    let n=6
    var removedivs = document.getElementsByClassName('paraid')
    var removedivs1 = document.getElementsByClassName('paraemail')
    var removedivs2 = document.getElementsByClassName('paraname')
    while(removedivs.length > 0){
        removedivs[0].parentNode.removeChild(removedivs[0]);
        removedivs1[0].parentNode.removeChild(removedivs1[0]);
        removedivs2[0].parentNode.removeChild(removedivs2[0]);
    }

    var removebrktags=document.getElementsByTagName('br')
    while(removebrktags.length > 0){
        removebrktags[0].parentNode.removeChild(removebrktags[0]);
    }
    
    for(let i=(n-1)*10; i<(n*10); i++) {

    let idtext = document.createElement("p")
    idtext.setAttribute("class","paraid")
    idtext.style.margin = "0px"
    idtext.innerHTML = response[i].id   
    document.body.appendChild(idtext)
    

    let emailtext = document.createElement("p")
    emailtext.setAttribute("class","paraemail")
    emailtext.style.margin = "0px"
    emailtext.innerHTML = response[i].email
    document.body.appendChild(emailtext)
    

    let nametext = document.createElement("p")
    nametext.setAttribute("class","paraname")
    nametext.style.margin = "0px"
    nametext.innerHTML = response[i].name    
    document.body.appendChild(nametext)
    let mybr2 = document.createElement("br")
    document.body.appendChild(mybr2)
    let mybr3 = document.createElement("br")
    document.body.appendChild(mybr3)
       }
}


function seventhpage(){
    let n=7
    var removedivs = document.getElementsByClassName('paraid')
    var removedivs1 = document.getElementsByClassName('paraemail')
    var removedivs2 = document.getElementsByClassName('paraname')
    while(removedivs.length > 0){
        removedivs[0].parentNode.removeChild(removedivs[0]);
        removedivs1[0].parentNode.removeChild(removedivs1[0]);
        removedivs2[0].parentNode.removeChild(removedivs2[0]);
    }

    var removebrktags=document.getElementsByTagName('br')
    while(removebrktags.length > 0){
        removebrktags[0].parentNode.removeChild(removebrktags[0]);
    }
    
    for(let i=(n-1)*10; i<(n*10); i++) {

    let idtext = document.createElement("p")
    idtext.setAttribute("class","paraid")
    idtext.style.margin = "0px"
    idtext.innerHTML = response[i].id   
    document.body.appendChild(idtext)
    

    let emailtext = document.createElement("p")
    emailtext.setAttribute("class","paraemail")
    emailtext.style.margin = "0px"
    emailtext.innerHTML = response[i].email
    document.body.appendChild(emailtext)
    

    let nametext = document.createElement("p")
    nametext.setAttribute("class","paraname")
    nametext.style.margin = "0px"
    nametext.innerHTML = response[i].name    
    document.body.appendChild(nametext)
    let mybr2 = document.createElement("br")
    document.body.appendChild(mybr2)
    let mybr3 = document.createElement("br")
    document.body.appendChild(mybr3)
       }
}


function eightpage(){
    let n=8
    var removedivs = document.getElementsByClassName('paraid')
    var removedivs1 = document.getElementsByClassName('paraemail')
    var removedivs2 = document.getElementsByClassName('paraname')
    while(removedivs.length > 0){
        removedivs[0].parentNode.removeChild(removedivs[0]);
        removedivs1[0].parentNode.removeChild(removedivs1[0]);
        removedivs2[0].parentNode.removeChild(removedivs2[0]);
    }

    var removebrktags=document.getElementsByTagName('br')
    while(removebrktags.length > 0){
        removebrktags[0].parentNode.removeChild(removebrktags[0]);
    }
    
    for(let i=(n-1)*10; i<(n*10); i++) {

    let idtext = document.createElement("p")
    idtext.setAttribute("class","paraid")
    idtext.style.margin = "0px"
    idtext.innerHTML = response[i].id   
    document.body.appendChild(idtext)
    

    let emailtext = document.createElement("p")
    emailtext.setAttribute("class","paraemail")
    emailtext.style.margin = "0px"
    emailtext.innerHTML = response[i].email
    document.body.appendChild(emailtext)
    

    let nametext = document.createElement("p")
    nametext.setAttribute("class","paraname")
    nametext.style.margin = "0px"
    nametext.innerHTML = response[i].name    
    document.body.appendChild(nametext)
    let mybr2 = document.createElement("br")
    document.body.appendChild(mybr2)
    let mybr3 = document.createElement("br")
    document.body.appendChild(mybr3)
       }
}


function ninthpage(){
    let n=9
    var removedivs = document.getElementsByClassName('paraid')
    var removedivs1 = document.getElementsByClassName('paraemail')
    var removedivs2 = document.getElementsByClassName('paraname')
    while(removedivs.length > 0){
        removedivs[0].parentNode.removeChild(removedivs[0]);
        removedivs1[0].parentNode.removeChild(removedivs1[0]);
        removedivs2[0].parentNode.removeChild(removedivs2[0]);
    }

    var removebrktags=document.getElementsByTagName('br')
    while(removebrktags.length > 0){
        removebrktags[0].parentNode.removeChild(removebrktags[0]);
    }
    
    for(let i=(n-1)*10; i<(n*10); i++) {

    let idtext = document.createElement("p")
    idtext.setAttribute("class","paraid")
    idtext.style.margin = "0px"
    idtext.innerHTML = response[i].id   
    document.body.appendChild(idtext)
    

    let emailtext = document.createElement("p")
    emailtext.setAttribute("class","paraemail")
    emailtext.style.margin = "0px"
    emailtext.innerHTML = response[i].email
    document.body.appendChild(emailtext)
    

    let nametext = document.createElement("p")
    nametext.setAttribute("class","paraname")
    nametext.style.margin = "0px"
    nametext.innerHTML = response[i].name    
    document.body.appendChild(nametext)
    let mybr2 = document.createElement("br")
    document.body.appendChild(mybr2)
    let mybr3 = document.createElement("br")
    document.body.appendChild(mybr3)
       }
}


function tenthpage(){
    let n=10
    var removedivs = document.getElementsByClassName('paraid')
    var removedivs1 = document.getElementsByClassName('paraemail')
    var removedivs2 = document.getElementsByClassName('paraname')
    while(removedivs.length > 0){
        removedivs[0].parentNode.removeChild(removedivs[0]);
        removedivs1[0].parentNode.removeChild(removedivs1[0]);
        removedivs2[0].parentNode.removeChild(removedivs2[0]);
    }

    var removebrktags=document.getElementsByTagName('br')
    while(removebrktags.length > 0){
        removebrktags[0].parentNode.removeChild(removebrktags[0]);
    }
    
    for(let i=(n-1)*10; i<(n*10); i++) {

    let idtext = document.createElement("p")
    idtext.setAttribute("class","paraid")
    idtext.style.margin = "0px"
    idtext.innerHTML = response[i].id   
    document.body.appendChild(idtext)
    

    let emailtext = document.createElement("p")
    emailtext.setAttribute("class","paraemail")
    emailtext.style.margin = "0px"
    emailtext.innerHTML = response[i].email
    document.body.appendChild(emailtext)
    

    let nametext = document.createElement("p")
    nametext.setAttribute("class","paraname")
    nametext.style.margin = "0px"
    nametext.innerHTML = response[i].name    
    document.body.appendChild(nametext)
    let mybr2 = document.createElement("br")
    document.body.appendChild(mybr2)
    let mybr3 = document.createElement("br")
    document.body.appendChild(mybr3)
       }
}