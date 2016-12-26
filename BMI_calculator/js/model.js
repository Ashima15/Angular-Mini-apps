app.service("bmiservice",function(){
    
   this.bmicalculator = function(x,y){
       console.log("inside");
     return x/(y*y); 
   },
   this.typefinder = function(obj){
       
       if(obj<19)
           return "Underweight";
        else if (obj>=19&&obj<=24)
            return "Normal";
       else
           return "Overweight";
   }
});