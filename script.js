let chessboard = document.querySelector(".chess-board")
chessboard.style.width="500px"
chessboard.style.height="500px"
chessboard.style.background="black"
chessboard.style.display="flex"
chessboard.style.flexWrap="wrap"
chessboard.style.border="1px solid black";
chessboard.style.margin="auto"
let cwidth = chessboard.getBoundingClientRect().width;
let cheight = chessboard.getBoundingClientRect().height;

rows =8;
boxes = Math.pow(rows,2);



function startwithblack(addimg){
    let boxes = document.createElement('div');
    for(let i=0;i<rows;i++){
        let box = document.createElement('div');
        box.style.width=Math.floor(cwidth/rows) +"px";
        box.style.height=Math.floor(cheight/rows) +"px";
        if((i+1) % 2 == 0){
            box.style.background="white"
            if(addimg){
            let img =getblackcoin();
            img.style.width = Math.floor(cwidth/rows) +"px";
            img.style.height = Math.floor(cheight/rows) +"px";
            box.appendChild(img)
            }
        }
        else{
            box.style.background="black"
            if(addimg){
            let img =getwhitecoin();
            img.style.width = Math.floor(cwidth/rows) +"px";
            img.style.height = Math.floor(cheight/rows) +"px";
            box.appendChild(img)
            }
        }
        boxes.appendChild(box);
    }
    boxes.style.display="flex";
    boxes.style.flexWrap="wrap";
return boxes;
    
}
function startwithwhite(addimg){
    let boxes = document.createElement('div');
    for(let i=0;i<rows;i++){
        let box = document.createElement('div');
        box.style.width=Math.floor(cwidth/rows) +"px";
        box.style.height=Math.floor(cheight/rows) +"px";
        if((i+1) % 2 == 0){
            box.style.background="black"
            if(addimg){
            let img =getwhitecoin();
            img.style.width = Math.floor(cwidth/rows) +"px";
            img.style.height =Math.floor(cheight/rows) +"px";
            box.appendChild(img)
            }
        }
        else{
            box.style.background="white"
            if(addimg){
            let img =getblackcoin();
            img.style.width = Math.floor(cwidth/rows) +"px";
            img.style.height = Math.floor(cheight/rows) +"px";
            box.appendChild(img)
            }
        }
        boxes.appendChild(box);
    }
    boxes.style.display="flex";
    boxes.style.flexWrap="wrap";
    return boxes;
}


function formboard(){
    for(let i=0;i<rows;i++){
        if((i+1) %2 ==0){
           chessboard.appendChild(startwithblack((i <2 || i >= rows-2)))
        }
        else{
            chessboard.appendChild(startwithwhite((i <2 || i >= rows-2)))
        }
    }
}
function getblackcoin(){
    let img = document.createElement('img');
    img.src='./images/black.png';
    return img

}
function getwhitecoin(){
    let img = document.createElement('img');
    img.src='./images/white.png';
    return img;
}

formboard()