const pally = require('pa11y')

async function run() {
        const results = await pally ('https://www.eventbrite.com/');

        //const results = pa11y('https://www.eventbrite.com/', {standard: 'WCAG2A'});
        //console.log(results.pageUrl)

let seleccionados = [];

let wcag = [ 
"WCAG2A.Principle1.Guideline1_1.1_1_1",
"WCAG2A.Principle1.Guideline1_2.1_2_1",
"WCAG2A.Principle1.Guideline1_2.1_2_2",
"WCAG2A.Principle1.Guideline1_2.1_2_3",
"WCAG2AA.Principle1.Guideline1_2.1_2_4",
"WCAG2AA.Principle1.Guideline1_2.1_2_5",
"WCAG2A.Principle1.Guideline1_3.1_3_1",
"WCAG2A.Principle1.Guideline1_3.1_3_2",
"WCAG2A.Principle1.Guideline1_3.1_3_3",
"WCAG2A.Principle1.Guideline1_4.1_4_1",
"WCAG2A.Principle1.Guideline1_4.1_4_2",
"WCAG2AA.Principle1.Guideline1_4.1_4_3",
"WCAG2AA.Principle1.Guideline1_4.1_4_4",
"WCAG2AA.Principle1.Guideline1_4.1_4_5",
"WCAG2A.Principle2.Guideline2_1.2_1_1",
"WCAG2A.Principle2.Guideline2_1.2_1_2",
"WCAG2A.Principle2.Guideline2_2.2_2_1",
"WCAG2A.Principle2.Guideline2_2.2_2_2",
"WCAG2A.Principle2.Guideline2_3.2_3_1",
"WCAG2A.Principle2.Guideline2_4.2_4_1",
"WCAG2A.Principle2.Guideline2_4.2_4_2",
"WCAG2A.Principle2.Guideline2_4.2_4_3",
"WCAG2A.Principle2.Guideline2_4.2_4_4",
"WCAG2AA.Principle2.Guideline2_4.2_4_5",
"WCAG2AA.Principle2.Guideline2_4.2_4_6",
"WCAG2AA.Principle2.Guideline2_4.2_4_7",
"WCAG2A.Principle3.Guideline3_1.3_1_1",
"WCAG2AA.Principle3.Guideline3_1.3_1_2",
"WCAG2A.Principle3.Guideline3_2.3_2_1",
"WCAG2A.Principle3.Guideline3_2.3_2_2",
"WCAG2AA.Principle3.Guideline3_2.3_2_3",
"WCAG2AA.Principle3.Guideline3_2.3_2_4",
"WCAG2A.Principle3.Guideline3_3.3_3_1",
"WCAG2A.Principle3.Guideline3_3.3_3_2",
"WCAG2AA.Principle3.Guideline3_3.3_3_3",
"WCAG2AA.Principle3.Guideline3_3.3_3_4",
"WCAG2A.Principle4.Guideline4_1.4_1_1",
"WCAG2A.Principle4.Guideline4_1.4_1_2"];
//console.log(results.issues)

let wcag1 = ["WCAG2A.Principle1.Guideline1_1.1_1_1",
"WCAG2A.Principle1.Guideline1_2.1_2_1",
"WCAG2A.Principle1.Guideline1_2.1_2_2",
"WCAG2A.Principle1.Guideline1_2.1_2_3",
"WCAG2AA.Principle1.Guideline1_2.1_2_4",
"WCAG2AA.Principle1.Guideline1_2.1_2_5",
"WCAG2A.Principle1.Guideline1_3.1_3_1",
"WCAG2A.Principle1.Guideline1_3.1_3_2",
"WCAG2A.Principle1.Guideline1_3.1_3_3",
"WCAG2A.Principle1.Guideline1_4.1_4_1",
"WCAG2A.Principle1.Guideline1_4.1_4_2",
"WCAG2AA.Principle1.Guideline1_4.1_4_3",
"WCAG2AA.Principle1.Guideline1_4.1_4_4",
"WCAG2AA.Principle1.Guideline1_4.1_4_5"];

let wcag2 = ["WCAG2A.Principle2.Guideline2_1.2_1_1",
"WCAG2A.Principle2.Guideline2_1.2_1_2",
"WCAG2A.Principle2.Guideline2_2.2_2_1",
"WCAG2A.Principle2.Guideline2_2.2_2_2",
"WCAG2A.Principle2.Guideline2_3.2_3_1",
"WCAG2A.Principle2.Guideline2_4.2_4_1",
"WCAG2A.Principle2.Guideline2_4.2_4_2",
"WCAG2A.Principle2.Guideline2_4.2_4_3",
"WCAG2A.Principle2.Guideline2_4.2_4_4",
"WCAG2AA.Principle2.Guideline2_4.2_4_5",
"WCAG2AA.Principle2.Guideline2_4.2_4_6",
"WCAG2AA.Principle2.Guideline2_4.2_4_7"];

let wcag3 = ["WCAG2A.Principle3.Guideline3_1.3_1_1",
"WCAG2AA.Principle3.Guideline3_1.3_1_2",
"WCAG2A.Principle3.Guideline3_2.3_2_1",
"WCAG2A.Principle3.Guideline3_2.3_2_2",
"WCAG2AA.Principle3.Guideline3_2.3_2_3",
"WCAG2AA.Principle3.Guideline3_2.3_2_4",
"WCAG2A.Principle3.Guideline3_3.3_3_1",
"WCAG2A.Principle3.Guideline3_3.3_3_2",
"WCAG2AA.Principle3.Guideline3_3.3_3_3",
"WCAG2AA.Principle3.Guideline3_3.3_3_4"];

let wcag4 = ["WCAG2A.Principle4.Guideline4_1.4_1_1",
"WCAG2A.Principle4.Guideline4_1.4_1_2"];


results.issues.forEach(element => {

     // let str1= element.code.substring(0,37);
     // if (element.code.substring(0,37).includes("WCAG2AA.Principle4.Guideline4_1.4_1_1")) { 

        for (i = 0; i < wcag.length; i++) {
                if (element.code.substring(0,37).includes(wcag[i])) {    
                        // si lo incluye agregalo al array de los seleccionados
                        seleccionados.push(wcag[i]);
                }            
        } 
        for (i = 0; i < wcag1.length; i++) {
                if (element.code.substring(0,37).includes(wcag1[i])) {    
                        // si lo incluye agregalo al array de los seleccionados
                        seleccionados.push(wcag1[i]);
                }            
        } 

        for (i = 0; i < wcag2.length; i++) {
                if (element.code.substring(0,37).includes(wcag2[i])) {    
                        // si lo incluye agregalo al array de los seleccionados
                        seleccionados.push(wcag2[i]);
                }            
        } 

        for (i = 0; i < wcag3.length; i++) {
                if (element.code.substring(0,37).includes(wcag3[i])) {    
                        // si lo incluye agregalo al array de los seleccionados
                        seleccionados.push(wcag3[i]);
                }            
        } 

        for (i = 0; i < wcag4.length; i++) {
                if (element.code.substring(0,37).includes(wcag4[i])) {    
                        // si lo incluye agregalo al array de los seleccionados
                        seleccionados.push(wcag4[i]);
                }            
        } 
});

console.log("Cantidad repetidas  " + seleccionados)

let resultado = seleccionados.filter((item,index)=>{
  return seleccionados.indexOf(item) === index;
})

console.log("Los códigos con error son  " + resultado)

if (resultado.length > 8){
        console.log(results.pageUrl + " NO ES ACCESIBLE")
}
else {
        console.log(results.pageUrl + " ES ACCESIBLE")
}

}




run();
