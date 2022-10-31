
//area ber korar function
function areaOfTriangle(){

    let a = document.getElementById("arm_a").value; //arm_a id er tag a user je input debe amra ta a variable a store korlam
    let b = document.getElementById("arm_b").value; //arm_b id er tag a user je input debe amra ta a variable b store korlam
    let c = document.getElementById("arm_c").value; //arm_c id er tag a user je input debe amra ta a variable c store korlam
    
    //userinput string a hoy tai take number a convert korlam
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);

    //tribhuj er porishima ber korar shutro
    const p = (a + b + c) / 2;

    //tribhuj aer area ber korar shutro
    const area = Math.sqrt (p*((p-a)*(p-b)*(p-c)));

    //are ke user er kase show korlam
    document.getElementById("result").innerHTML =  area;
}

//input field clear korar function
function deleteMe(){
    document.getElementById("result").innerHTML = "Area of the Triangle";
    document.getElementById("arm_a").value = "";
    document.getElementById("arm_b").value = "";
    document.getElementById("arm_c").value = "";
}
