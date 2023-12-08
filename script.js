var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);    //opening connection bw api and client
request.send();
request.onload = function()
{
    var data = request.response;
    var result = JSON.parse(data);

    //<<<<<<<<<    QUESTION 1   >>>>>>>>>>>>>
    console.log("QUESTION 1: COUNTRY NAME WITH REGION NAME ASIA");
    var cname = result.filter((reg)=>reg.region === "Asia");
    cname.map((x)=>console.log(x.name.common));

    //<<<<<<<<<<   QUESTION 2    >>>>>>>>>>>>
    console.log("QUESTION 2 : COUNTRY NAME WITH POPULATION LESS THAN 2LAKH");
    var popul = result.filter((ele)=>ele.population < 200000 );
    popul.map((y)=>console.log(y.name.common));

    //<<<<<<<<<<   QUESTION 3    >>>>>>>>>>>>
    console.log("QUESTION 3 : NAME,CAPITAL AND FLAG USING FOREACH");
    var popul = result.forEach((z)=>console.log(`Name: ${z.name.common} Region: ${z.capital} Flag: ${z.flag}`));

    //<<<<<<<<<<   QUESTION 4    >>>>>>>>>>>>
    console.log("QUESTION 4 : TOTAL POPULATION USING REDUCE");
    var totpopul = result.reduce((acc,cv)=>acc+cv.population,0 );
    console.log(totpopul);

    //<<<<<<<<<<   QUESTION 5    >>>>>>>>>>>>>
    console.log("QUESTION 5 : COUNTRY THAT USES US DOLLAR AS CURRENCY")
    var currency = result.filter((j)=>j.currencies && j.currencies.USD);
    currency.map((k)=>console.log(k.name.common));
    
}