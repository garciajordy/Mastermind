let master1 = document.querySelector("#mastercolor1")
let master2 = document.querySelector("#mastercolor2")
let master3 = document.querySelector("#mastercolor3")
let master4 = document.querySelector("#mastercolor4")
let l1c1 = document.querySelector("#l1c1")
let l1c2 = document.querySelector("#l1c2")
let l1c3 = document.querySelector("#l1c3")
let l1c4 = document.querySelector("#l1c4")
let l2c1 = document.querySelector("#l2c1")
let l2c2 = document.querySelector("#l2c2")
let l2c3 = document.querySelector("#l2c3")
let l2c4 = document.querySelector("#l2c4")
let l3c1 = document.querySelector("#l3c1")
let l3c2 = document.querySelector("#l3c2")
let l3c3 = document.querySelector("#l3c3")
let l3c4 = document.querySelector("#l3c4")
let l4c1 = document.querySelector("#l4c1")
let l4c2 = document.querySelector("#l4c2")
let l4c3 = document.querySelector("#l4c3")
let l4c4 = document.querySelector("#l4c4")
let l5c1 = document.querySelector("#l5c1")
let l5c2 = document.querySelector("#l5c2")
let l5c3 = document.querySelector("#l5c3")
let l5c4 = document.querySelector("#l5c4")
let l6c1 = document.querySelector("#l6c1")
let l6c2 = document.querySelector("#l6c2")
let l6c3 = document.querySelector("#l6c3")
let l6c4 = document.querySelector("#l6c4")
let l7c1 = document.querySelector("#l7c1")
let l7c2 = document.querySelector("#l7c2")
let l7c3 = document.querySelector("#l7c3")
let l7c4 = document.querySelector("#l7c4")

let color1 = document.querySelector("#color1")
let color2 = document.querySelector("#color2")
let color3 = document.querySelector("#color3")
let color4 = document.querySelector("#color4")
let choice1
let choice2
let choice3
let choice4
let color
let rred = document.querySelector("#red")
let yyellow = document.querySelector("#yellow")
let ggreen = document.querySelector("#green")
let bblue = document.querySelector("#blue")

color1
function colorchoice(){
    if(choice1==undefined){(choice1=color)+(color=undefined)}
    else if(choice2==undefined){(choice2=color)+(color=undefined)}
    else if(choice3==undefined){(choice3=color)+(color=undefined)}
    else if(choice4==undefined){(choice4=color)+(color=undefined)}
    color1.style.backgroundColor = choice1
    color2.style.backgroundColor = choice2
    color3.style.backgroundColor = choice3
    color4.style.backgroundColor = choice4

}

function redd(){
    color = "red"
    colorchoice()
    rred.style.visibility = "hidden"            }
function yelloww(){
    color = "yellow"
    colorchoice()
    yyellow.style.visibility = "hidden" 
}
function greenn(){
    color = "green"
    colorchoice()
    ggreen.style.visibility = "hidden" 
}
function bluee(){
    color = "blue"
    colorchoice()
    bblue.style.visibility = "hidden" 
}
function reset(){
    choice1=undefined
    choice2=undefined
    choice3=undefined
    choice4=undefined
    color1.style.backgroundColor = "white"
    color2.style.backgroundColor = "white"
    color3.style.backgroundColor = "white"
    color4.style.backgroundColor = "white"
    rred.style.visibility = "visible"
    yyellow.style.visibility = "visible"
    ggreen.style.visibility = "visible"
    bblue.style.visibility = "visible"
}
let num = 0
let num2 = 0
let num3 = 0
let num4 = 0
let num5 = 0
let num6 = 0
let num7 = 0
let line1
let line2
let line3
let line4
let line5
let line6
let line7
let score = 0
let check1
let check2
let check3
let check4
let confii = document.getElementById("confii")
check1="green"
check2="blue"
check3="yellow" 
check4="red"
if(score==1){(check1="yellow")+(check2="blue")+(check3="red")+(check4="green")}
else if(score==2){(check1="red")+(check2="green")+(check3="blue")+(check4="yellow")}

function confirm(){ 
   
  if(score!==3){ if(choice4!=undefined){
        if(line1==undefined){if(choice1==check1){(num+=1)}if(choice2==check2){num+=1}if(choice3==check3){num+=1}if(choice4==check4){num+=1}(line1=1)+(l1c1.style.backgroundColor = choice1)+(l1c2.style.backgroundColor=choice2)+(l1c3.style.backgroundColor=choice3)+(l1c4.style.backgroundColor=choice4)}
    else if(line2==undefined){if(choice1==check1){(num2+=1)}if(choice2==check2){num2+=1}if(choice3==check3){num2+=1}if(choice4==check4){num2+=1}(line2=1)+(l2c1.style.backgroundColor = choice1)+(l2c2.style.backgroundColor=choice2)+(l2c3.style.backgroundColor=choice3)+(l2c4.style.backgroundColor=choice4)}
    else if(line3==undefined){if(choice1==check1){(num3+=1)}if(choice2==check2){num3+=1}if(choice3==check3){num3+=1}if(choice4==check4){num3+=1}(line3=1)+(l3c1.style.backgroundColor = choice1)+(l3c2.style.backgroundColor=choice2)+(l3c3.style.backgroundColor=choice3)+(l3c4.style.backgroundColor=choice4)}
    else if(line4==undefined){if(choice1==check1){(num4+=1)}if(choice2==check2){num4+=1}if(choice3==check3){num4+=1}if(choice4==check4){num4+=1}(line4=1)+(l4c1.style.backgroundColor = choice1)+(l4c2.style.backgroundColor=choice2)+(l4c3.style.backgroundColor=choice3)+(l4c4.style.backgroundColor=choice4)}
    else if(line5==undefined){if(choice1==check1){(num5+=1)}if(choice2==check2){num5+=1}if(choice3==check3){num5+=1}if(choice4==check4){num5+=1}(line5=1)+(l5c1.style.backgroundColor = choice1)+(l5c2.style.backgroundColor=choice2)+(l5c3.style.backgroundColor=choice3)+(l5c4.style.backgroundColor=choice4)}
    else if(line6==undefined){if(choice1==check1){(num6+=1)}if(choice2==check2){num6+=1}if(choice3==check3){num6+=1}if(choice4==check4){num6+=1}(line6=1)+(l6c1.style.backgroundColor = choice1)+(l6c2.style.backgroundColor=choice2)+(l6c3.style.backgroundColor=choice3)+(l6c4.style.backgroundColor=choice4)}
    else if(line7==undefined){if(choice1==check1){(num7+=1)}if(choice2==check2){num7+=1}if(choice3==check3){num7+=1}if(choice4==check4){num7+=1}(line7=1)+(l7c1.style.backgroundColor = choice1)+(l7c2.style.backgroundColor=choice2)+(l7c3.style.backgroundColor=choice3)+(l7c4.style.backgroundColor=choice4)}
            choice1=undefined
            choice2=undefined
            choice3=undefined
            choice4=undefined
            color1.style.backgroundColor = "white"
            color2.style.backgroundColor = "white"
            color3.style.backgroundColor = "white"
            color4.style.backgroundColor = "white"
            rred.style.visibility = "visible"
            yyellow.style.visibility = "visible"
            ggreen.style.visibility = "visible"
            bblue.style.visibility = "visible"
    }
    if(num==4){(score+=1)+(alert("Good Job!"))+(master1.style.backgroundColor = check1)+(master2.style.backgroundColor = check2)+(master3.style.backgroundColor = check3)+(master4.style.backgroundColor = check4)+(confii.style.visibility = "hidden")}
    else if(num2==4){(score+=1)+(alert("Good Job!"))+(master1.style.backgroundColor = check1)+(master2.style.backgroundColor = check2)+(master3.style.backgroundColor = check3)+(master4.style.backgroundColor = check4)+(confii.style.visibility = "hidden")}
    else if(num3==4){(score+=1)+(alert("Good Job!"))+(master1.style.backgroundColor = check1)+(master2.style.backgroundColor = check2)+(master3.style.backgroundColor = check3)+(master4.style.backgroundColor = check4)+(confii.style.visibility = "hidden")}
    else if(num4==4){(score+=1)+(alert("Good Job!"))+(master1.style.backgroundColor = check1)+(master2.style.backgroundColor = check2)+(master3.style.backgroundColor = check3)+(master4.style.backgroundColor = check4)+(confii.style.visibility = "hidden")}
    else if(num5==4){(score+=1)+(alert("Good Job!"))+(master1.style.backgroundColor = check1)+(master2.style.backgroundColor = check2)+(master3.style.backgroundColor = check3)+(master4.style.backgroundColor = check4)+(confii.style.visibility = "hidden")}
    else if(num6==4){(score+=1)+(alert("Good Job!"))+(master1.style.backgroundColor = check1)+(master2.style.backgroundColor = check2)+(master3.style.backgroundColor = check3)+(master4.style.backgroundColor = check4)+(confii.style.visibility = "hidden")}
    else if(num7==4){(score+=1)+(alert("Good Job!"))+(master1.style.backgroundColor = check1)+(master2.style.backgroundColor = check2)+(master3.style.backgroundColor = check3)+(master4.style.backgroundColor = check4)+(confii.style.visibility = "hidden")}
    else if(num7!=4){if(line7!=undefined){(alert("You've Lost"))+(master1.style.backgroundColor = check1)+(master2.style.backgroundColor = check2)+(master3.style.backgroundColor = check3)+(master4.style.backgroundColor = check4)}}

    document.getElementById("line1").innerHTML = num
    document.getElementById("line2").innerHTML = num2
    document.getElementById("line3").innerHTML = num3
    document.getElementById("line4").innerHTML = num4
    document.getElementById("line5").innerHTML = num5
    document.getElementById("line6").innerHTML = num6                
    document.getElementById("line7").innerHTML = num7
    document.getElementById("scoresult").innerHTML = "score = "+ score + " of 3"
    if(score==3){alert("You are truly a MasterMind!!!")}
}} 
function newgame(){
    choice1=undefined
    choice2=undefined
    choice3=undefined
    choice4=undefined
    color1.style.backgroundColor = "white"
    color2.style.backgroundColor = "white"
    color3.style.backgroundColor = "white"
    color4.style.backgroundColor = "white"
    rred.style.visibility = "visible"
    yyellow.style.visibility = "visible"
    ggreen.style.visibility = "visible"
    bblue.style.visibility = "visible"
    confii.style.visibility = "visible"
    line1 = undefined
    line2 = undefined
    line3 = undefined
    line4 = undefined
    line5 = undefined
    line6 = undefined
    line7 = undefined
    l1c1.style.backgroundColor = "white"
    l1c2.style.backgroundColor = "white"
    l1c3.style.backgroundColor = "white"
    l1c4.style.backgroundColor = "white"
    l2c1.style.backgroundColor = "white"
    l2c2.style.backgroundColor = "white"
    l2c3.style.backgroundColor = "white"
    l2c4.style.backgroundColor = "white"
    l3c1.style.backgroundColor = "white"
    l3c2.style.backgroundColor = "white"
    l3c3.style.backgroundColor = "white"
    l3c4.style.backgroundColor = "white"
    l4c1.style.backgroundColor = "white"
    l4c2.style.backgroundColor = "white"
    l4c3.style.backgroundColor = "white"
    l4c4.style.backgroundColor = "white"
    l5c1.style.backgroundColor = "white"
    l5c2.style.backgroundColor = "white"
    l5c3.style.backgroundColor = "white"
    l5c4.style.backgroundColor = "white"
    l6c1.style.backgroundColor = "white"
    l6c2.style.backgroundColor = "white"
    l6c3.style.backgroundColor = "white"
    l6c4.style.backgroundColor = "white"
    l7c1.style.backgroundColor = "white"
    l7c2.style.backgroundColor = "white"
    l7c3.style.backgroundColor = "white"
    l7c4.style.backgroundColor = "white"
    master1.style.backgroundColor = "white"
    master2.style.backgroundColor = "white"
    master3.style.backgroundColor = "white"
    master4.style.backgroundColor = "white"
    num = 0
    num2 = 0
    num3 = 0
    num4 = 0
    num5 = 0
    num6 = 0
    num7 = 0
    score = 0
    document.getElementById("line1").innerHTML = num
    document.getElementById("line2").innerHTML = num2
    document.getElementById("line3").innerHTML = num3
    document.getElementById("line4").innerHTML = num4
    document.getElementById("line5").innerHTML = num5
    document.getElementById("line6").innerHTML = num6                
    document.getElementById("line7").innerHTML = num7
    document.getElementById("scoresult").innerHTML = "score = "+ score + " of 3"
}
function round(){

if (((num==4)||(num2==4)||(num3==4)||(num4==4)||(num5==4)||(num6==4)||(num7==4))&&(score!=3)){
    if(score==1){(check1="yellow")+(check2="blue")+(check3="red")+(check4="green")}
else if(score==2){(check1="red")+(check2="green")+(check3="blue")+(check4="yellow")}
choice1=undefined
    choice2=undefined
    choice3=undefined
    choice4=undefined
    color1.style.backgroundColor = "white"
    color2.style.backgroundColor = "white"
    color3.style.backgroundColor = "white"
    color4.style.backgroundColor = "white"
    rred.style.visibility = "visible"
    yyellow.style.visibility = "visible"
    ggreen.style.visibility = "visible"
    bblue.style.visibility = "visible"
    confii.style.visibility = "visible"
    line1 = undefined
    line2 = undefined
    line3 = undefined
    line4 = undefined
    line5 = undefined
    line6 = undefined
    line7 = undefined
    l1c1.style.backgroundColor = "white"
    l1c2.style.backgroundColor = "white"
    l1c3.style.backgroundColor = "white"
    l1c4.style.backgroundColor = "white"
    l2c1.style.backgroundColor = "white"
    l2c2.style.backgroundColor = "white"
    l2c3.style.backgroundColor = "white"
    l2c4.style.backgroundColor = "white"
    l3c1.style.backgroundColor = "white"
    l3c2.style.backgroundColor = "white"
    l3c3.style.backgroundColor = "white"
    l3c4.style.backgroundColor = "white"
    l4c1.style.backgroundColor = "white"
    l4c2.style.backgroundColor = "white"
    l4c3.style.backgroundColor = "white"
    l4c4.style.backgroundColor = "white"
    l5c1.style.backgroundColor = "white"
    l5c2.style.backgroundColor = "white"
    l5c3.style.backgroundColor = "white"
    l5c4.style.backgroundColor = "white"
    l6c1.style.backgroundColor = "white"
    l6c2.style.backgroundColor = "white"
    l6c3.style.backgroundColor = "white"
    l6c4.style.backgroundColor = "white"
    master1.style.backgroundColor = "white"
    master2.style.backgroundColor = "white"
    master3.style.backgroundColor = "white"
    master4.style.backgroundColor = "white"
    num = 0
    num2 = 0
    num3 = 0
    num4 = 0
    num5 = 0
    num6 = 0
    num7 = 0
    document.getElementById("line1").innerHTML = num
    document.getElementById("line2").innerHTML = num2
    document.getElementById("line3").innerHTML = num3
    document.getElementById("line4").innerHTML = num4
    document.getElementById("line5").innerHTML = num5
    document.getElementById("line6").innerHTML = num6                
    document.getElementById("line7").innerHTML = num7
}}