canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=6;
ctx.arc(160,200 ,100,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=6;
ctx.arc(370,200 ,100,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=6;
ctx.arc(580,200 ,100,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=6;
ctx.arc(260,340 ,100,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=6;
ctx.arc(480,340 ,100,0,Math.PI*2);
ctx.stroke();
