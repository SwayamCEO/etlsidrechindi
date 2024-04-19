
        
        
     var final_total=0;
     var final_avg=0.0;
     var msg;
     function result()
     {
         if(final_avg<30)
             {
                 msg="Needs Exclusive Training!";
             }
         else if(final_avg<60)
                 {
                 msg="Needs Concurrent Training!"
                 }
         else if(final_avg<80)
                 {
                 msg="Needs Concurrent Training along with other Training!"
                 }
         else{
             msg="Promoted for Skill Training"
         }
         
        alert("total="+final_total+"\naverage="+final_avg+"\n"+msg);

     }

        
   window.onload = function() {
        var i = 0, input, inputs = document.getElementById('f1').getElementsByTagName('input');
        while (input = inputs.item(i++)){
            if (input.name.match(/q/g)){
            input.onclick = sumRadios;
            }
        }
      }
    function sumRadios(){
        var total=0,sectionOneTotal=0,sectionTwoTotal=0,sectionThreeTotal=0,sectionFourTotal=0,sectionFiveTotal=0,sectionSixTotal=0,sectionSevenTotal=0,sectionEightTotal=0;
        var i = 0, input, inputs = document.getElementById('sectionOneId').getElementsByTagName('input');
        while (input = inputs.item(i++)){
            if (input.name.match(/q/g)){
                if(input.checked){
                    sectionOneTotal += Number(input.value);
                }
            }
        }
        
        document.getElementById('getavg1').value=(sectionOneTotal/9) * 100;
        document.getElementById('sectionOneTotal').value=sectionOneTotal;
		
		 var i = 0, input, inputs = document.getElementById('sectionTwoId').getElementsByTagName('input');
        while (input = inputs.item(i++)){
            if (input.name.match(/q/g)){
                if(input.checked){
                    sectionTwoTotal += Number(input.value);
                }
            }
        }
        
        document.getElementById('getavg2').value=(sectionTwoTotal/27) * 100;
        document.getElementById('sectionTwoTotal').value=sectionTwoTotal;
		
		 var i = 0, input, inputs = document.getElementById('sectionThreeId').getElementsByTagName('input');
        while (input = inputs.item(i++)){
            if (input.name.match(/q/g)){
                if(input.checked){
                    sectionThreeTotal += Number(input.value);
                }
            }
        }
        
        document.getElementById('getavg3').value=(sectionThreeTotal/27) * 100;
        document.getElementById('sectionThreeTotal').value=sectionThreeTotal;
		
		 var i = 0, input, inputs = document.getElementById('sectionFourId').getElementsByTagName('input');
        while (input = inputs.item(i++)){
            if (input.name.match(/q/g)){
                if(input.checked){
                    sectionFourTotal += Number(input.value);
                }
            }
        }
        
        document.getElementById('getavg4').value=(sectionFourTotal/84) * 100;
        document.getElementById('sectionFourTotal').value=sectionFourTotal;
		
		 var i = 0, input, inputs = document.getElementById('sectionFiveId').getElementsByTagName('input');
        while (input = inputs.item(i++)){
            if (input.name.match(/q/g)){
                if(input.checked){
                    sectionFiveTotal += Number(input.value);
                }
            }
        }
        
        document.getElementById('getavg5').value=(sectionFiveTotal/21) * 100;
        document.getElementById('sectionFiveTotal').value=sectionFiveTotal;
		
		 var i = 0, input, inputs = document.getElementById('sectionSixId').getElementsByTagName('input');
        while (input = inputs.item(i++)){
            if (input.name.match(/q/g)){
                if(input.checked){
                    sectionSixTotal += Number(input.value);
                }
            }
        }
        
        document.getElementById('getavg6').value=(sectionSixTotal/30) * 100;
        document.getElementById('sectionSixTotal').value=sectionSixTotal;
		
		 var i = 0, input, inputs = document.getElementById('sectionSevenId').getElementsByTagName('input');
        while (input = inputs.item(i++)){
            if (input.name.match(/q/g)){
                if(input.checked){
                    sectionSevenTotal += Number(input.value);
                }
            }
        }
        
        document.getElementById('getavg7').value=(sectionSevenTotal/18) * 100;
        document.getElementById('sectionSevenTotal').value=sectionSevenTotal;
		
		 var i = 0, input, inputs = document.getElementById('sectionEightId').getElementsByTagName('input');
        while (input = inputs.item(i++)){
            if (input.name.match(/q/g)){
                if(input.checked){
                    sectionEightTotal += Number(input.value);
                }
            }
        }
        
        document.getElementById('getavg8').value=(sectionEightTotal/18) * 100;
        document.getElementById('sectionEightTotal').value=sectionEightTotal;
		
		 
        document.getElementById('grandtotal').value=sectionOneTotal+sectionTwoTotal+sectionThreeTotal+sectionFourTotal+sectionFiveTotal+sectionSixTotal+sectionSevenTotal+sectionEightTotal;
        
         document.getElementById('grandavg').value=((sectionOneTotal+sectionTwoTotal+sectionThreeTotal+sectionFourTotal+sectionFiveTotal+sectionSixTotal+sectionSevenTotal+sectionEightTotal)/234)*100;
        
         final_total=sectionOneTotal+sectionTwoTotal+sectionThreeTotal+sectionFourTotal+sectionFiveTotal+sectionSixTotal+sectionSevenTotal;
        final_avg=((sectionOneTotal+sectionTwoTotal+sectionThreeTotal+sectionFourTotal+sectionFiveTotal+sectionSixTotal+sectionSevenTotal)/237)*100;
    }
        
      