function findKeyframesRule(rule)
{
        // gather all stylesheets into an array
        var ss = document.styleSheets;
        
        // loop through the stylesheets
        for (var i = 0; i < ss.length; i++) {
            
            // loop through all the rules
             for (var j = 0; j < ss[i].cssRules.length; j++) {
            //for (var j = 0; j < ss[i].getCssRules){

                    console.log("rule=" + ss[i].cssRules[j]);
            }
        }
}
    

function test1(){
    findKeyframesRule("twist");
}