let data={ "n":5,
"height":10,
"width":10
};
//wall
const wall = (n,height,width)=>{
    var area=height*width;
    if(area%n==0)
    return (area/n)+1;
}
let total=wall(data.n,data.height,data.width);
console.log(total)