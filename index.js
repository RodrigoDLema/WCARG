const pally = require('pa11y')

async function run() {
        const results = await pally ('https://www.eventbrite.com/');

        //const results = pa11y('https://www.eventbrite.com/', {standard: 'WCAG2A'});
        //console.log(results.pageUrl)

let seleccionados = [];

let wcag = ["WCAG2AA.Principle4.Guideline4_1.4_1_1", "WCAG2AA.Principle4.Guideline4_1.4_1_2", "WCAG2AA.Principle1.Guideline1_3.1_3_1", "WCAG2AA.Principle1.Guideline1_4.1_4_3"];

//console.log(results.issues)

results.issues.forEach(element => {

     // let str1= element.code.substring(0,37);
     // if (element.code.substring(0,37).includes("WCAG2AA.Principle4.Guideline4_1.4_1_1")) { 

        for (i = 0; i < wcag.length; i++) {
                if (element.code.substring(0,37).includes(wcag[i])) {    
                        // si lo incluye agregalo al array de los seleccionados
                        seleccionados.push(wcag[i]);
                }            
        } 
        
});

console.log(seleccionados)

let resultado = seleccionados.filter((item,index)=>{
  return seleccionados.indexOf(item) === index;
})

console.log(resultado)

if (resultado.length > 8){
        console.log(results.pageUrl + " NO ES ACCESIBLE")
}
else {
        console.log(results.pageUrl + " ES ACCESIBLE")
}

}




run();
