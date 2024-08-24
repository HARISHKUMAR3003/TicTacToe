var player='X'
var cnt=0;
var result=""
Done=true


function play(val)
{
    if(Done)
    {    
    var b=document.getElementById(val)
    if(player==='X'  && !b.textContent){
        b.innerText=player;
        b.style="background-color:rgb(5, 89, 255)"
        player='O'
    }
    else if(player==='O' && !b.textContent){

        b.innerText=player;
        b.style="background-color:rgb(255, 0, 183);"
        player='X'
    }
    else{
        return;
    }

    if(checkwin())
    {
        document.getElementById('res').innerHTML=result;
        document.getElementById('res').style="padding:10px;";
        Done=false;
        return;
    }

    cnt++;
    if(cnt===9)
    {
        cnt=0;
        result="it's a tie!"
        document.getElementById('res').innerHTML=result;
        document.getElementById('res').style="padding:10px;";
        return;
    }
}
}


function checkwin() {
    const winningCombinations = [
        ['b1', 'b2', 'b3'],
        ['b4', 'b5', 'b6'],
        ['b7', 'b8', 'b9'],
        ['b1', 'b4', 'b7'],
        ['b2', 'b5', 'b8'],
        ['b3', 'b6', 'b9'],
        ['b1', 'b5', 'b9'],
        ['b3', 'b5', 'b7']
    ];
    for(var i=0;i<winningCombinations.length;i++)
    {
        let a=document.getElementById(winningCombinations[i][0])
        let b=document.getElementById(winningCombinations[i][1])
        let c=document.getElementById(winningCombinations[i][2])
                if(a && a.textContent===b.textContent && a.textContent===c.textContent && a.textContent==='X'){
                    result="'X' won!"
                    return true;
                }
                else if(a && a.textContent===b.textContent && a.textContent===c.textContent && a.textContent==='O')
                {
                    result="'O' Won!"
                    return true;
                }
            }
            return false;
        }


function restart()
{
    document.getElementById('b1').textContent="";
    document.getElementById('b2').textContent="";
    document.getElementById('b3').textContent="";
    document.getElementById('b4').textContent="";
    document.getElementById('b5').textContent="";
    document.getElementById('b6').textContent="";
    document.getElementById('b7').textContent="";
    document.getElementById('b8').textContent="";
    document.getElementById('b9').textContent="";
    document.getElementById('res').textContent="";
    document.getElementById('res').style="padding:0px;";
    document.getElementById('b1').style="background-color:black;";
    document.getElementById('b3').style="background-color:black;";
    document.getElementById('b2').style="background-color:black;";
    document.getElementById('b4').style="background-color:black;";
    document.getElementById('b5').style="background-color:black;";
    document.getElementById('b6').style="background-color:black;";
    document.getElementById('b7').style="background-color:black;";
    document.getElementById('b8').style="background-color:black;";
    document.getElementById('b9').style="background-color:black;";
    Done=true;
    cnt=0;
}


