function moveElement(ele,x_final,y_final,interval){//ele為元素物件
    var x_pos=ele.offsetLeft;
    var y_pos=ele.offsetTop;
    var dist=0;
    if(ele.movement){//防止懸停
      clearTimeout(ele.movement);
    }
    if(x_pos==x_final&&y_pos==y_final){//先判斷是否需要移動
      return;
    }
    dist=Math.ceil(Math.abs(x_final-x_pos)/10);//分10次移動完成
    x_pos = x_pos<x_final ? x_pos+dist : x_pos-dist;
     
    dist=Math.ceil(Math.abs(y_final-y_pos)/10);//分10次移動完成
    y_pos = y_pos<y_final ? y_pos+dist : y_pos-dist;
     
    ele.style.left=x_pos+'px';
    ele.style.top=y_pos+'px';
     
    ele.movement=setTimeout(function(){//分10次移動，自呼叫10次
      moveElement(ele,x_final,y_final,interval);
    },interval)
  }