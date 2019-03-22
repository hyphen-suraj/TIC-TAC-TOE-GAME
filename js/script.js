


/****  variables for DOM manipulation***/


var one=document.querySelector('.inp_pic0');
var two=document.querySelector('.inp_pic1');
var three=document.querySelector('.inp_pic2');
var four=document.querySelector('.inp_pic3');
var five=document.querySelector('.inp_pic4');
var six=document.querySelector('.inp_pic5');
var seven=document.querySelector('.inp_pic6');
 var eight=document.querySelector('.inp_pic7');
var nine=document.querySelector('.inp_pic8');
var score1=document.querySelector('.player1');
var score2=document.querySelector('.player2');
var draw=document.querySelector('.tie');
var re_start=document.querySelector('.restart');
var quit=document.querySelector('.exit');




var flag=0;

/*** win function that put 'o' when two 'o' are already there***/



var col1_win=function(){
     if(one.value==='o'&&four.value==='o'&&seven.value==='')
         {
            seven.value='o';
             flag=1;
         }
        
         else if(one.value==='o'&&seven.value==='o'&&four.value===''){
            four.value='o';
             flag=1;
         }
         else if(four.value==='o'&&seven.value==='o'&&one.value===''){
            one.value='o';
             flag=1;
         }
};



var col2_win=function(){
     if(two.value==='o'&&five.value==='o'&&eight.value==='')
         {
            eight.value='o';
             flag=1;
         }
        
         else if(two.value==='o'&&eight.value==='o'&&five.value===''){
            five.value='o';
             flag=1;
         }
         else if(five.value==='o'&&eight.value==='o'&&two.value===''){
            two.value='o';
             flag=1;
         }
};




var col3_win=function(){
     if(three.value==='o'&&six.value==='o'&&nine.value==='')
         {
            nine.value='o';
             flag=1;
         }
        
         else if(three.value==='o'&&nine.value==='o'&&six.value===''){
            six.value='o';
             flag=1;
         }
         else if(six.value==='o'&&nine.value==='o'&&three.value===''){
            three.value='o';
             flag=1;
         }
};



var row1_win=function(){
     if(one.value==='o'&&two.value==='o'&&three.value==='')
         {
            three.value='o';
             flag=1;
         }
        
         else if(three.value==='o'&&two.value==='o'&&one.value===''){
            one.value='o';
             flag=1;
         }
         else if(one.value==='o'&&three.value==='o'&&two.value===''){
            two.value='o';
             flag=1;
         }
};





var row2_win=function(){
     if(four.value==='o'&&five.value==='o'&&six.value==='')
         {
            six.value='o';
             flag=1;
         }
        
         else if(six.value==='o'&&five.value==='o'&&four.value===''){
            four.value='o';
             flag=1;
         }
         else if(four.value==='o'&&six.value==='o'&&five.value===''){
            five.value='o';
             flag=1;
         }
};




var row3_win=function(){
     if(seven.value==='o'&&eight.value==='o'&&nine.value==='')
         {
            nine.value='o';
             flag=1;
         }
        
         else if(nine.value==='o'&&eight.value==='o'&&seven.value===''){
            seven.value='o';
             flag=1;
         }
         else if(seven.value==='o'&&nine.value==='o'&&eight.value===''){
            eight.value='o';
             flag=1;
         }
};


var dig1_win=function(){
         
        if(one.value==='o'&&five.value==='o'&&nine.value==='')
         {
            nine.value='o';
             flag=1;
         }
        
         else if(nine.value==='o'&&five.value==='o'&&one.value===''){
            one.value='o';
             flag=1;
         }
         else if(one.value==='o'&&nine.value==='o'&&five.value===''){
            five.value='o';
             flag=1;
         }
          
};




var dig2_win=function(){
         
        if(three.value==='o'&&seven.value==='o')
         {
            seven.value='o';
             flag=1;
         }
        
         else if(seven.value==='o'&&five.value==='o'&&three.value===''){
            three.value='o';
             flag=1;
         }
         else if(three.value==='o'&&seven.value==='o'&&five.value===''){
            five.value='o';
             flag=1;
         }
          
};

/*** win 1 function that put 'o' when one 'o' are already there***/

var col1_win1=function(){
    if(one.value=='o'&&four.value===''&&seven.value==='')
        {
            four.value='o';
            flag=1;
        }
    
    else if(one.value==''&&four.value==='o'&&seven.value==='')
        {
            one.value='o';
            flag=1;
        }
    
    else if(one.value==''&&four.value===''&&seven.value==='o')
        {
            four.value='o';
            flag=1;
        }
};




var col2_win1=function(){
    if(two.value=='o'&&five.value===''&&eight.value==='')
        {
            five.value='o';
            flag=1;
        }
    
    else if(two.value==''&&five.value==='o'&&eight.value==='')
        {
            two.value='o';
            flag=1;
        }
    
    else if(two.value==''&&five.value===''&&eight.value==='o')
        {
            five.value='o';
            flag=1;
        }
};







var col3_win1=function(){
    if(three.value=='o'&&six.value===''&&nine.value==='')
        {
            six.value='o';
            flag=1;
        }
    
    else if(three.value==''&&six.value==='o'&&nine.value==='')
        {
            three.value='o';
            flag=1;
        }
    
    else if(three.value==''&&six.value===''&&nine.value==='o')
        {
            six.value='o';
            flag=1;
        }
};






var row1_win1=function(){
    if(one.value=='o'&&two.value===''&&three.value==='')
        {
            two.value='o';
            flag=1;
        }
    
    else if(one.value==''&&two.value==='o'&&three.value==='')
        {
            three.value='o';
            flag=1;
        }
    
    else if(one.value==''&&two.value===''&&three.value==='o')
        {
            two.value='o';
            flag=1;
        }
};




var row2_win1=function(){
    if(four.value=='o'&&five.value===''&&six.value==='')
        {
            five.value='o';
            flag=1;
        }
    
    else if(four.value==''&&five.value==='o'&&six.value==='')
        {
            four.value='o';
            flag=1;
        }
    
    else if(four.value==''&&five.value===''&&six.value==='o')
        {
            five.value='o';
            flag=1;
        }
};




var row3_win1=function(){
    if(seven.value=='o'&&eight.value===''&&nine.value==='')
        {
            eight.value='o';
            flag=1;
        }
    
    else if(seven.value==''&&eight.value==='o'&&nine.value==='')
        {
            seven.value='o';
            flag=1;
        }
    
    else if(seven.value==''&&eight.value===''&&nine.value==='o')
        {
            eight.value='o';
            flag=1;
        }
};







var dig1_win1=function(){
    if(one.value=='o'&&five.value===''&&nine.value==='')
        {
            nine.value='o';
            flag=1;
        }
    
    else if(one.value==''&&five.value==='o'&&nine.value==='')
        {
            nine.value='o';
            flag=1;
        }
    
    else if(one.value==''&&five.value===''&&nine.value==='o')
        {
            five.value='o';
            flag=1;
        }
};






var dig2_win1=function(){
    if(three.value=='o'&&five.value===''&&seven.value==='')
        {
            seven.value='o';
            flag=1;
        }
    
    else if(three.value==''&&five.value==='o'&&seven.value==='')
        {
            seven.value='o';
            flag=1;
        }
    
    else if(three.value==''&&five.value===''&&seven.value==='o')
        {
            five.value='o';
            flag=1;
        }
};

/*** win 2 function that put 'o' when no 'o'    there***/

var col1_win2=function(){
    if(one.value!=='x'&&four.value!=='x'&&seven.value!=='x'){
        one.value='o';
        flag=1;
    }
};

var col2_win2=function(){
    if(two.value!=='x'&&five.value!=='x'&&eight.value!=='x'){
        two.value='o';
        flag=1;
    }
};


var col3_win2=function(){
    if(three.value!=='x'&&six.value!=='x'&&nine.value!=='x'){
        three.value='o';
        flag=1;
    }
};





var row1_win2=function(){
    if(one.value!=='x'&&two.value!=='x'&&three.value!=='x'){
        one.value='o';
        flag=1;
    }
};



var row2_win2=function(){
    if(four.value!=='x'&&five.value!=='x'&&six.value!=='x'){
        four.value='o';
        flag=1;
    }
};



var row3_win2=function(){
    if(seven.value!=='x'&&eight.value!=='x'&&nine.value!=='x'){
        seven.value='o';
        flag=1;
    }
};


var dig1_win2=function(){
    if(one.value!=='x'&&five.value!=='x'&&nine.value!=='x'){
        one.value='o';
        flag=1;
    }
};




var dig2_win2=function(){
    if(three.value!=='x'&&five.value!=='x'&&seven.value!=='x'){
        three.value='o';
        flag=1;
    }
};

/*** function that put 'o' at random   ***/
var random=function(){
    if(one.value==='')
        one.value='o';
    else if(two.value==='')
        two.value='o';
    else if(three.value==='')
        three.value='o';
    else if(four.value==='')
        four.value='o';
    else if(five.value==='')
        five.value='o';
    else if(six.value==='')
        six.value='o';
    else if(seven.value==='')
        seven.value='o';
    else if(eight.value==='')
        eight.value='o';
    else if(nine.value==='')
        nine.value='o';
};



var person_score=0;
var comp_score=0;
var tie_score=0;
var temp=0;

/*** function that calculate the score   ***/
var win_fun=function(){
    if(one.value==='x'&&two.value==='x'&&three.value==='x'){
        person_score++;
        temp=1;
       
        
    }
    else if(one.value==='o'&&two.value==='o'&&three.value==='o'){
        comp_score++;
        temp=1;
        
        
    }
    else if(four.value==='x'&&five.value==='x'&&six.value==='x'){
        person_score++;
        temp=1;
       
    }
     else if(four.value==='o'&&five.value==='o'&&six.value==='o'){
        comp_score++;
        temp=1;
         
        
    }
      else if(seven.value==='x'&&eight.value==='x'&&nine.value==='x'){
        person_score++;
        temp=1;
          
        
    }
     else if(seven.value==='o'&&eight.value==='o'&&nine.value==='o'){
        comp_score++;
        temp=1;
         
        
    }
    else if(one.value==='x'&&four.value==='x'&&seven.value==='x'){
        person_score++;
        temp=1;
        
        
    }
    else if(one.value==='o'&&four.value==='o'&&seven.value==='o'){
         comp_score++;
        temp=1;
       
        
    }
     else if(two.value==='x'&&five.value==='x'&&eight.value==='x'){
        person_score++;
        temp=1;
         
        
    }
     else if(two.value==='o'&&five.value==='o'&&eight.value==='o'){
         comp_score++;
        temp=1;
         
        
    }
     else if(three.value==='x'&&six.value==='x'&&nine.value==='x'){
        person_score++;
        temp=1;
        
        
    }
     else if(three.value==='o'&&six.value==='o'&&nine.value==='o'){
        comp_score++;
        temp=1;
      
        
    }
    else if(one.value==='x'&&five.value==='x'&&nine.value==='x'){
        person_score++;
        temp=1;
       
        
    }
    else if(one.value==='o'&&five.value==='o'&&nine.value==='o'){
        comp_score++;
       
        temp=1;
        
    }
    else if(three.value==='x'&&five.value==='x'&&seven.value==='x'){
        person_score++;
       
        temp=1;
        
    }
    else if(three.value==='o'&&five.value==='o'&&seven.value==='o'){
         comp_score++;
        
        temp=1;
        
    }
    setTimeout(function(){
    if(temp===1){
        one.value='';
        two.value='';
        three.value='';
        four.value='';
        five.value='';
        six.value='';
        seven.value='';
        eight.value='';
        nine.value='';
        score1.value=person_score;
score2.value=comp_score;
        temp=0;
    }
        }, 350);
};

/**** function that calculate the draw score***********/
var draw_score=0;
var draw_fun=function(){
    if( one.value!==''&&two.value!==''&&three.value!==''&&four.value!==''&&five.value!==''&&six.value!==''&&seven.value!==''&&eight.value!==''&&nine.value!==''){
        one.value='';
        two.value='';
        three.value='';
        four.value='';
        five.value='';
        six.value='';
        seven.value='';
        eight.value='';
        nine.value='';
        draw_score++;
        draw.value=draw_score;
        
        
    }
};


/**** functions  that execute when user click ******/


one.addEventListener("click",function(){
    if(one.value===""){
   one.value='x';
    win_fun();
        draw_fun();
    var one_fun=setTimeout(function(){
       col2_win();
        if(flag===0)
            col3_win();
        if(flag===0)
        row2_win();
        
       if(flag===0)
        row3_win();
        
        if(flag===0)
        dig2_win();
        /*** conditions that defends user from wining***/
        
        
       if(flag===0)
            {
         if(two.value==="x" && three.value===""){
        three.value="o";
             flag=1;
         }
        else   if(three.value==="x" &&two.value===""){
        two.value="o";
            flag=1;
        }
        else if(four.value==="x"&&seven.value===""){
            seven.value="o";
            flag=1;
        }
        else if(seven.value==="x"&&four.value===""){
            four.value='o';
            flag=1;
        }
        else if(five.value==="x"&&nine.value===""){
            nine.value='o';
            flag=1;
        }
                
            }
        
         
      if(flag===0){
              if(six.value==='x'&&five.value==='o'&&three.value===''){
                  three.value='o';
                  flag=1;
              }
          }
        
        
      if(flag===0)
            dig2_win1();
        
        
        if(flag===0)
            col2_win1();
        
        if(flag===0)
            col3_win1();
        if(flag===0)
            row2_win1();
        
        if(flag===0)
            row3_win1();
        
       
            
            if(flag===0){
            if(five.value===''){
                five.value='o';
                console.log('1');
                flag=1;
            }
        }
         if(flag===0)
            col2_win2();
        if(flag===0)
             col3_win2();
        if(flag===0)
            row2_win2();
        if(flag===0)
         row3_win2();
        
        if(flag===0)
           dig2_win2();  
        
        if(flag===0)
  random();
           
        
        win_fun();
         draw_fun();
}, 500);
    }
    flag=0;
});





two.addEventListener("click",function(){
    
    if(two.value===""){
   two.value='x';
        win_fun();
         draw_fun();
      var two_fun=setTimeout(function(){
        
           col1_win();
        if(flag===0)
            col3_win();
       if(flag===0)
        row2_win();
        
       if(flag===0)
        row3_win();
        
        if(flag===0)
        dig2_win();
        
          
           if(flag===0)
        dig1_win();
          
           /*** conditions that defends user from wining***/
          if(flag===0){
              
         if (one.value==='x'&& three.value===""){
              three.value='o';
             flag=1;
         }
          else if (three.value==='x'&&one.value===""){
              one.value='o';
              flag=1;
          }
          else if(five.value==='x'&&eight.value===""){
              eight.value='o';
              flag=1;
          }
          else if (eight.value==='x'&& five.value===""){
              five.value='o';
              flag=1;
          }
          }
          
          
          
           
      if(flag===0){
              if(seven.value==='x'&&five.value==='o'&&one.value===''){
                  one.value='o';
                  flag=1;
              }
          }
      
        
      if(flag===0){
              if(nine.value==='x'&&five.value==='o'&&three.value===''){
                  three.value='o';
                  flag=1;
              }
          }
          
          
          
          
          
          if(flag===0)
            dig1_win1();
          if(flag===0)
            dig2_win1();
          
          
           if(flag===0)
            col1_win1();
        
        if(flag===0)
            col3_win1();
        if(flag===0)
            row2_win1();
        
        if(flag===0)
            row3_win1();
        
          
          
              if(flag===0){
            if(five.value===''){
                five.value='o';
                  console.log('2');
                  flag=1;
            }
        }
          
          
           if(flag===0)
            col1_win2();
        if(flag===0)
             col3_win2();
        if(flag===0)
            row2_win2();
        if(flag===0)
         row3_win2();
        if(flag===0)
         dig1_win2();
        if(flag===0)
           dig2_win2();  
          
          
        if(flag===0)
   random();
        
          
   win_fun();     
      draw_fun(); 
         
          
}, 500);
    
    }
    flag=0; 
});



three.addEventListener("click",function(){
    if(three.value===""){
   three.value='x';
        win_fun();
         draw_fun();
var three_fun=setTimeout(function(){
     
         col1_win();
        if(flag===0)
            col2_win();
         if(flag===0)
        row2_win();
        
      if(flag===0)
        row3_win();
       
          
           if(flag===0)
        dig1_win();
    /*** conditions that defends user from wining***/
        
          if(flag===0){
    if(one.value==='x'&&two.value===""){
        two.value='o';
        flag=1;
    }
    else if(two.value==='x'&&one.value===""){
        one.value='o';
        flag=1;
    }
     else if(six.value==='x'&&nine.value===""){
        nine.value='o';
         flag=1;
     }
     else if(nine.value==='x'&&six.value===""){
        six.value='o';
         flag=1;
     }
     else if(five.value==='x'&&seven.value===""){
        seven.value='o';
         flag=1;
     }
     else if(seven.value==='x'&&five.value===""){
        five.value='o';
         flag=1;
     }
          }
    
    
     
      if(flag===0){
              if(four.value==='x'&&five.value==='o'&&one.value===''){
                  one.value='o';
                  flag=1;
              }
          }
    if(flag===0)
            dig1_win1();
     if(flag===0)
            col1_win1();
        
        if(flag===0)
            col2_win1();
        if(flag===0)
            row2_win1();
        
        if(flag===0)
            row3_win1();
        
        if(flag===0){
            if(five.value===''){
                five.value='o';
            console.log('3');
            flag=1;
            }
        }
    
     if(flag===0)
            col2_win2();
        if(flag===0)
             col1_win2();
        if(flag===0)
            row2_win2();
        if(flag===0)
         row3_win2();
        if(flag===0)
         dig1_win2();
         
          
    if(flag===0)
     random();
         
    
    win_fun();
     draw_fun();
}, 500);
     
    
    }
    flag=0;
});








four.addEventListener("click",function(){
    if(four.value===""){
   four.value='x';
    win_fun();
         draw_fun();
 var four_fun=setTimeout(function(){
     
       col2_win();
        if(flag===0)
            col3_win();
        if(flag===0)
        row1_win();
        
       if(flag===0)
        row3_win();
       
          
          if(flag===0)
        dig1_win();
      if(flag===0)
        dig2_win();
         if(flag===0){
     
      /*** conditions that defends user from wining***/
     
        if(one.value==='x'&&seven.value===""){
        seven.value='o';
            flag=1;
        }
      else if(seven.value==='x'&&one.value===""){
        one.value='o';
          flag=1;
      }
      else if(five.value==='x'&&six.value===""){
        six.value='o';
          flag=1;
      }
      else if(six.value==='x'&&five.value===""){
        five.value='o';
          flag=1;
      }
         }
     
     
     
     if(flag===0){
              if(three.value==='x'&&five.value==='o'&&one.value===''){
                  one.value='o';
                  flag=1;
              }
          }
     
if(flag===0){
              if(nine.value==='x'&&five.value==='o'&&seven.value===''){
                  seven.value='o';
                  flag=1;
              }
          }     
     if(flag===0)
            dig1_win1();
          if(flag===0)
            dig2_win1();
     if(flag===0)
            col2_win1();
        
        if(flag===0)
            col3_win1();
        if(flag===0)
            row1_win1();
        
        if(flag===0)
            row3_win1();
        
         if(flag===0){
            if(five.value===''){
                five.value='o';
             console.log('4');
             flag=1;
            }
         
        }
     
      if(flag===0)
            col2_win2();
        if(flag===0)
             col3_win2();
        if(flag===0)
            row1_win2();
        if(flag===0)
         row3_win2();
        if(flag===0)
         dig1_win2();
        if(flag===0)
           dig2_win2();  
     if(flag===0)
   random();
          
     win_fun();
      draw_fun();
}, 500);
     
    
    }
    flag=0;
});




five.addEventListener("click",function(){
    if(five.value===""){
   five.value='x';
    win_fun();
 var five_fun=setTimeout(function(){
        
       col1_win();
        if(flag===0)
            col3_win();
        if(flag===0)
        row1_win();
        
     if(flag===0)
        row3_win();
       
          /*** conditions that defends user from wining***/ 
          
        if(flag===0){
     
     
    if(two.value==='x'&&eight.value===""){
        eight.value='o';
        flag=1;
    }
      else if(eight.value==='x'&&two.value===""){
        two.value='o';
              flag=1;
    }
      else if(four.value==='x'&&six.value===""){
        six.value='o';
                flag=1;
    }
      else if(six.value==='x'&&four.value===""){
        four.value='o';
              flag=1;
    }
      else if(three.value==='x'&&seven.value===""){
        seven.value='o';
              flag=1;
    }
      else if(seven.value==='x'&&three.value===""){
        three.value='o';
              flag=1;
    }
      else if(one.value==='x'&&nine.value===""){
        nine.value='o';
              flag=1;
    }
      else if(nine.value==='x'&&one.value===""){
        one.value='o';
              flag=1;
    }
        }
     
     
      if(flag===0)
            col1_win1();
        
        if(flag===0)
            col3_win1();
        if(flag===0)
            row1_win1();
        
        if(flag===0)
            row3_win1();
        
      if(flag===0)
            col1_win2();
        if(flag===0)
             col3_win2();
        if(flag===0)
            row1_win2();
        if(flag===0)
         row3_win2();
          
     
     
     if(flag===0)
     random();
         
     win_fun();
      draw_fun();
}, 500);
     
    
    }
    flag=0;
});





six.addEventListener("click",function(){
    if(six.value===""){
   six.value='x';
    win_fun();
  var six_fun=setTimeout(function(){
      
        col1_win();
        if(flag===0)
            col2_win();
        if(flag===0)
        row1_win();
        
       if(flag===0)
        row3_win();
       
          
           if(flag===0)
        dig1_win();
        if(flag===0)
        dig2_win();
          if(flag===0){
     
      
       /*** conditions that defends user from wining***/
      
      
      if(three.value==='x'&&nine.value===""){
        nine.value='o';
          flag=1;
      }
       else if(nine.value==='x'&&three.value===""){
        three.value='o';
               flag=1;
      }
       else if(five.value==='x'&&four.value===""){
        four.value='o';
                  flag=1;
      }
       else if(four.value==='x'&&five.value===""){
        five.value='o';
          flag=1;
      }
      
          }
      
      
      if(flag===0){
              if(one.value==='x'&&five.value==='o'&&three.value===''){
                  three.value='o';
                  flag=1;
              }
          }
      
        
      if(flag===0){
              if(seven.value==='x'&&five.value==='o'&&nine.value===''){
                  nine.value='o';
                  flag=1;
              }
          }
      
      
      if(flag===0)
            dig1_win1();
          if(flag===0)
            dig2_win1();
      
       if(flag===0)
            col2_win1();
        
        if(flag===0)
            col1_win1();
        if(flag===0)
            row1_win1();
        
        if(flag===0)
            row3_win1();
        
          if(flag===0){
            if(five.value===''){
                five.value='o';
              console.log('6');
              flag=1;
            }
        }
      
       if(flag===0)
            col2_win2();
        if(flag===0)
             col1_win2();
        if(flag===0)
            row1_win2();
        if(flag===0)
         row3_win2();
        if(flag===0)
         dig1_win2();
        if(flag===0)
           dig2_win2();  
      
      if(flag===0)
  random();
         
      win_fun();
       draw_fun();
}, 500);
     
    
    }
    flag=0;
});
seven.addEventListener("click",function(){

    
     if(seven.value===""){
    seven.value='x';
          draw_fun();
         win_fun();
  var seven_fun=setTimeout(function(){
       
      
        col2_win();
        if(flag===0)
            col3_win();
         if(flag===0)
        row1_win();
        
      if(flag===0)
        row2_win();
       
          
         if(flag===0)
        dig1_win();
        
         if(flag===0){
     
      
      
       /*** conditions that defends user from wining***/
      
      
      
         if(four.value==='x'&&one.value===""){
        one.value='o';
             flag=1;
         }
     else if(one.value==='x'&&four.value===""){
        four.value='o';
                  flag=1;
         }
     else if(eight.value==='x'&&nine.value===""){
        nine.value='o';
           flag=1;
         }
     else if(nine.value==='x'&&eight.value===""){
        eight.value='o';
              flag=1;
         }
     else if(five.value==='x'&&three.value===""){
        three.value='o';
         flag=1;
         }
     else if(three.value==='x'&&five.value===""){
        five.value='o';
     flag=1;
         }
         }
       
      if(flag===0){
              if(two.value==='x'&&five.value==='o'&&one.value===''){
                  one.value='o';
                  flag=1;
              }
          }
      
       
      
      if(flag===0)
            dig1_win1();
       if(flag===0)
            col2_win1();
        
        if(flag===0)
            col3_win1();
        if(flag===0)
            row1_win1();
        
        if(flag===0)
            row2_win1();
        
          
          if(flag===0){
            if(five.value===''){
                five.value='o';
              console.log('7');
              flag=1;
            }
        }
      
       if(flag===0)
            col2_win2();
        if(flag===0)
             col3_win2();
        if(flag===0)
            row2_win2();
        if(flag===0)
         row1_win2();
        if(flag===0)
         dig1_win2();
          
      
      
      if(flag===0)
 random();
         
      win_fun();
       draw_fun();
}, 500);
     
    
    }
    flag=0;
});

eight.addEventListener("click",function(){
    if(eight.value===""){
   eight.value='x';
        win_fun();
         draw_fun();
 var eight_fun=setTimeout(function(){
     
     
        col1_win();
        if(flag===0)
            col3_win();
     if(flag===0)
        row1_win();
        
        if(flag===0)
        row2_win();
       
          
          if(flag===0)
        dig1_win();
        if(flag===0)
        dig2_win();
         if(flag===0){
     
      
     
      /*** conditions that defends user from wining***/
     
     
    if(seven.value==='x'&&nine.value===""){
        nine.value='o';
        flag=1;
    }
      else if(nine.value==='x'&&seven.value===""){
        seven.value='o';
               flag=1;
    }
      else if(five.value==='x'&&two.value===""){
        two.value='o';
       flag=1;
    }
      else if(two.value==='x'&&five.value===""){
        five.value='o';
          flag=1;
    }
     
         }
     
     
       
      if(flag===0){
              if(one.value==='x'&&five.value==='o'&&seven.value===''){
                  seven.value='o';
                  flag=1;
              }
          }
      
        
      if(flag===0){
              if(three.value==='x'&&five.value==='o'&&three.value===''){
                  nine.value='o';
                  flag=1;
              }
          }
     
     
       if(flag===0)
            dig1_win1();
          
      if(flag===0)
            dig2_win1();
     
       if(flag===0)
            col1_win1();
        
        if(flag===0)
            col3_win1();
        if(flag===0)
            row1_win1();
        
        if(flag===0)
            row2_win1();
      
     
         if(flag===0){
            if(five.value===''){
                five.value='o';
             console.log('8');
             flag=1;
            }
        }
      if(flag===0)
            col1_win2();
        if(flag===0)
             col3_win2();
        if(flag===0)
            row2_win2();
        if(flag===0)
         row1_win2();
        if(flag===0)
         dig1_win2();
        if(flag===0)
           dig2_win2();  
     
     
     
      if(flag===0)
     
 random();
           
     win_fun();
      draw_fun();
}, 500);
     
    
    }
    flag=0;
});

nine.addEventListener("click",function(){
    if(nine.value===""){
   nine.value='x';
        win_fun();
         draw_fun();
   var nine_fun=setTimeout(function(){
       
       
       
        col1_win();
        if(flag===0)
            col2_win();
        if(flag===0)
        row1_win();
        
      if(flag===0)
        row2_win();
       
        if(flag===0)
        dig2_win();
         if(flag===0){
     
      
        /*** conditions that defends user from wining***/
       
        if(eight.value==='x'&&seven.value===""){
        seven.value='o';
            flag=1;
        }
        else if(seven.value==='x'&&eight.value===""){
        eight.value='o';
                  flag=1;
        }
        else if(three.value==='x'&&six.value===""){
        six.value='o';
            flag=1;
        }
        else if(six.value==='x'&&three.value===""){
        three.value='o';
             flag=1;
        }
        else if(five.value==='x'&&one.value===""){
        one.value='o';
         flag=1;
        }
        else if(one.value==='x'&&five.value===""){
        five.value='o';
     flag=1;
        }
       
         }
       
        if(flag===0){
              if(two.value==='x'&&five.value==='o'&&three.value===''){
                  three.value='o';
                  flag=1;
              }
          }
       
       if(flag===0)
            dig2_win1();
     
       if(flag===0)
            col1_win1();
        
        if(flag===0)
            col2_win1();
        if(flag===0)
            row1_win1();
        
        if(flag===0)
            row2_win1();
        
          
      
       
         if(flag===0){
            if(five.value===''){
                five.value='o';
             console.log('9');
             flag=1;
            }
        }
       
        if(flag===0)
            col2_win2();
        if(flag===0)
             col1_win2();
        if(flag===0)
            row2_win2();
        if(flag===0)
         row1_win2();
       
        if(flag===0)
           dig2_win2();  
       
       
       
        if(flag===0)
    random();
         
       win_fun();
        draw_fun();
}, 500);
     
    
    }
    flag=0;
});

/**** restart function ********/


re_start.addEventListener("click",function(){
    one.value='';
    two.value='';
    three.value='';
    four.value='';
    five.value='';
    six.value='';
    seven.value='';
     eight.value='';
     nine.value='';
    score1.value=0;
     score2.value=0;
    draw.value=0;
    person_score=0;
    comp_score=0;
    draw_score=0;
    
});

/**** quit function ***************/         

quit.addEventListener("click",function(){
    
 document.querySelector('.body').style.opacity=0.1;
   
});


 










































