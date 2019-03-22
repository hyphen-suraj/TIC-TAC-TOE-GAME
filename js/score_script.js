document.querySelector('.final_scr_per').value=window.first_score;  
    document.querySelector('.final_scr_tie').value=window.second_score;
    document.querySelector('.final_scr_comp').value=window.third_score;

document.querySelector('.final_exit').addEventListener("click",function(){
  window.close();
  window.opener.close();
});



