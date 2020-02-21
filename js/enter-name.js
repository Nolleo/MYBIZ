function LikeIceCream(){

    var LikeScore = prompt("On a scale of 1-10, How much do you like ICE CREAM?");
    
    var score = LikeScore;
    var rate = score;
    var name = enterName();
    
    if (LikeScore >= 10 ) {
        confirm(name + ", with a score of " + rate + ", you are COOL and ready for ice cream!");
    } else if (score > 5 && score <10) {
        confirm(name + ", with a score of " + rate + ", MIGHT be ready for ice cream.");
    } else if (score < 5) {
        confirm(name + ", with a score of " + rate + ", you are NOT ready for ice cream.");
    } else if (score > 0) {
        confirm(name + ", with a score of " + rate + ", you need to leave NOW!");
    }
     
    return score;
    
}

function IceCreamScale(){

    var cones = LikeIceCream();
    var cone = Number(cones);
    console.log(cone);
    var message = '<img src="images/iceCreamCone.png" width="30px"/>'
    var items = '';
    for(var i = 0; i <= cone; i++){
        items += message;
    }
    console.log(message)
    return items; 

}

function enterName(){

    var customerName = prompt("Hello fellow ice cream lover! Please enter your name", "<enter YOUR NAME here>");
    
    var name;
    
    if (customerName != null) {
        name = customerName;

    }
    confirm("Is " + name + " ready for fresh COOL ice cream?"); 
    console.log('this is the name', name);
    document.write("ICE CREAM for " + name + "!");

    return name;
    
}



function personalGreeting(){

    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    
    if (hourNow > 18) {
        greeting = 'Evening is a great time for ice cream!';
    } else if (hourNow > 12) {
        greeting = 'Afternoon is a great time for ice cream!!';
    } else if (hourNow > 0) {
        greeting = 'Morning is a great time for ice cream!!';
    } else {
        greeting = 'It is ALWAYS a great time for ice cream!'
    }
    
   return greeting;

}

