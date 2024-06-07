function showHidCont(){
    const DescCont = document.getElementById("DescriptionContent");
    const ArrowAn = document.getElementById("ArrowImg").style;
    if(DescCont.style.display == "none"){
        DescCont.style.display = "block";
        ArrowAn.transform = "rotate(0deg)";
        ArrowAn.margin = "15px 0% 0% 0.5%";
        ArrowAn.width = "25px";
    }
    else{
        DescCont.style.display = "none";
        ArrowAn.transform = "rotate(270deg)";
        ArrowAn.margin = "0.5% 0% 0% 0.5%";
        ArrowAn.width = "20px";
    }
}