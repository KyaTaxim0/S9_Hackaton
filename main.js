/*Ejercicio 1*/

function suma(n1, n2) {
    let sumRpta;
    sumRpta=n1+n2;
    return sumRpta;  
}

function operacion() {
    let num1, num2;
  
    // Obtener los valores para la operacion
    num1 = parseInt(document.getElementById("ej1_num1").value);
    num2 = parseInt(document.getElementById("ej1_num2").value);
  
    
    //Obtiene la etiqueta que mostrara el resultado y llama a la funcion suma(num1,num2) para que retorne el resultado;
    document.getElementById("rpta1").innerHTML = "La suma es: "+ suma(num1,num2);
}


/*Ejercicio 2*/

function getRandomGrade(min=0,max=20) {
    return Math.random() * (max - min) + min;
  }

function Avg() {
    let avgRpta;
    let sumaP=0;

    for(let i=1;i<5;i++){
        grade=Math.round(getRandomGrade());
        sumaP=sumaP+grade;
        document.getElementById("grade"+i).innerHTML = "Nota"+i+": "+ grade;
    }

    avgRpta = sumaP/4
  
    document.getElementById("rpta2").innerHTML = "El promedio es: "+ avgRpta;

}


/*Ejercicio 3*/

function rect(b, a) {
    let rect_a;
    rect_a=b*a;
    return rect_a;  
}

function tria(b,a) {
    let tria_a;
    tria_a=(b*a)/2;
    return tria_a;  
}


function circ(r) {
    let circ_a;
    let pi = 3.1415;
    circ_a=pi*(r^2);
    return circ_a;  
}


function areas() {
    let e = document.getElementById("op_area");
    var strUser = e.options[e.selectedIndex].value;
    let bas,alt,rad;
  
    // Obtener los valores para la operacion
    bas = parseInt(document.getElementById("ej3_base").value);
    alt = parseInt(document.getElementById("ej4_altura").value);
    rad = parseInt(document.getElementById("ej5_radio").value);
  
    
    //Obtiene la etiqueta que mostrara el resultado y llama a la funcion suma(num1,num2) para que retorne el resultado;
    switch (strUser) {
        case "rec":
            document.getElementById("rpta3").innerHTML = "El Area del Rectangulo es: "+ rect(bas, alt);
          break;
        case "tri": // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
            document.getElementById("rpta3").innerHTML = "El Area del Triangulo es: "+ tria(bas,alt);
            break;
        case "cir": // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
            document.getElementById("rpta3").innerHTML = "El Area de la Circunferencia es: "+ circ(rad);
        break;
        default:
            document.getElementById("rpta3").innerHTML = "Operacion no definida";
      }
}

/*Ejercicio 6*/

let days = [];


function addDayData(){
    let day = {
        dayname : document.getElementById("op_day").options[document.getElementById("op_day").selectedIndex].value,
        hours : parseInt(document.getElementById("ej6_hrs").value),
        salaryperhr : parseInt(document.getElementById("ej6_sal").value)
    }
    days.push(day);

}

function sueldoS(){
    let sumaD = 0;
    let ind = 0;

    while (ind < days.length) {
        sumaD = sumaD + (days[ind].hours*days[ind].salaryperhr);
        ind++
    }

    let ss = sumaD/days.length;

    document.getElementById("rpta6").innerHTML = "El Salario por los "+ days.length +" dias trabajados es de :" + ss;
}

/*Ejercicio 7*/

let inches = [];


function addInch(){
    let conver = {
        inch : parseInt(document.getElementById("ej7_plg").value) ,
        meter : (parseInt(document.getElementById("ej7_plg").value)/39.37).toFixed(4)
    }

    inches.push(conver);
}

function viewMeters(){
    let texto7 = '';


    for(let i=0;i< inches.length;i++){
        texto7 = texto7 + "Pedido N" + i + " : " + inches[i].inch + "'' a " + inches[i].meter + "m. "
    }


    document.getElementById("rpta7").innerHTML = texto7;
}

/*Ejercicio 8*/

let dol = [];


function addSol(){
    let converSD = parseInt(document.getElementById("ej8_sol").value);

    dol.push(converSD);
}

function converSoDo(nSol){
    let nDol = nSol*3.601;
    return nDol;
}

function viewDollars(){
    let texto8 = '';


    for(let i=0;i< dol.length;i++){
        texto8 = texto8 + "Cantidad N" + i + " : $" + dol[i] + " a S/." + converSoDo(dol[i]) + ". ";
    }


    document.getElementById("rpta8").innerHTML = texto8;
}

/*Ejercicio 9*/

let staff = [];


function addPersonal(){
    let person = {
        name : document.getElementById("ej9_pers").value ,
        birthday : document.getElementById("ej9_bday").value
    }

    staff.push(person);
}

function calcDate(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
    
    return years
}

function viewInfo(){
    let today = new Date();

    let texto9 = '';

    for(let i=0;i< staff.length;i++){

        let past = new Date(staff[i].birthday);
        texto9 += staff[i].name + " tiene " + calcDate(today,past) + " edad .";
    }


    document.getElementById("rpta9").innerHTML = texto9;
}

/*Ejercicio 10*/

let people = [];


function addPerson(){
    let persn = {
        name : document.getElementById("ej10_per").value ,
        age : document.getElementById("ej10_age").value
    }

    people.push(persn);
}

function calcMin() {
    
    let minage = people[0].age;
    let minper = people[0].name;
    let message;

    for (let i = 0; i<people.length ; i++){
        if(minage>people[i].age){
            minage = people[i].age;
            minper = people[i].name;
        }
    }

    message = minper + 'es la persona con menor edad y su edad es: ' + minage;
    return message;
}

function viewDetail(){
    document.getElementById("rpta10").innerHTML = calcMin();
}

/*Ejercicio 11*/

let employees = [];


function addEmployee(){
    let employee = {
        name : document.getElementById("ej11_pers").value ,
        date_ini : document.getElementById("ej11_inid").value
    }

    employees.push(employee);
}

function calcBonus(year) {

    let bonus;
    
    switch (year) {
        case 1:
            bonus = "$100";
          break;
        case 2:
            bonus = "$200";
          break;
        case 3:
            bonus = "$300";
          break;
        case 4:
            bonus = "$400";
          break;
        case 5:
            bonus = "$500";
          break;
        default:
            bonus = "$1000";
    }
    
    return bonus
}

function viewBonusDetail(){
    let today = new Date();

    let texto11 = '';

    for(let i=0;i< employees.length;i++){
        let past = new Date(employees[i].date_ini);

        texto11 += employees[i].name + " tiene " + calcDate(today,past) + " anios trabajando . Le corresponde : "+calcBonus(calcDate(today,past)) + " . ";
    }

    document.getElementById("rpta11").innerHTML = texto11;
}

/*Ejercicio 12*/

let salary_ini = 1500;

function percent(amount){
    let newamount;

    newamount = amount * 0.1;

    return newamount
}

function viewSalaryDetail(){

    let yearW = parseInt(document.getElementById("ej12_year").value);
    let texto12 = '';

    for (let i = 0 ; i < yearW ; i++){
        salary_ini = salary_ini + percent(salary_ini);
        texto12 += 'Anio' + i + 'recibe : $' + salary_ini +" . ";
    }

    document.getElementById("rpta12").innerHTML = texto12;

}

/*Ejercicio 13*/

let students = []

function addStudent(){
    let student = {
        name : document.getElementById("ej13_name").value,
        grade : parseInt(document.getElementById("ej13_grade").value)
    }

    students.push(student);
}

function viewStudentsList(){
    let i=0;
    let texto13 = '';

    do {
        if (students[i].grade >= 12){
            texto13 += students[i].name +" aprobo con nota " + students[i].grade + " . ";
        }else{
            texto13 += students[i].name +" desaprobo con nota " + students[i].grade + " . ";
        }
        i++;
    }while (i < students.length)

    document.getElementById("rpta13").innerHTML = texto13
}


/*Ejercicio 14*/

let countG = 0,countW = 0,countR = 0;


var buttonG = document.getElementById("green")
buttonG.onclick = function() {
  countG += 1;
  buttonG.innerHTML = "Verde: " + countG;
  document.getElementById("rpta14").innerHTML = 'Total de Focos: ' + (countG + countW + countR);
};

var buttonW = document.getElementById("white")
buttonW.onclick = function() {
  countW += 1;
  buttonW.innerHTML = "Blanco: " + countW;
  document.getElementById("rpta14").innerHTML = 'Total de Focos: ' + (countG + countW + countR);
};

var buttonR = document.getElementById("red")
buttonR.onclick = function() {
  countR += 1;
  buttonR.innerHTML = "Rojo: " + countR;
  document.getElementById("rpta14").innerHTML = 'Total de Focos: ' + (countG + countW + countR);
};


/*Ejercicio 15*/

let electionDate = new Date ('2021-04-16');

function verifyAge(){

    let bdate = new Date(document.getElementById("ej15_bday").value);
    let texto15;
    let agePerson = calcDate(electionDate,bdate);

    if(agePerson >= 18){
        texto15 = "Con edad :" + agePerson + " iras a elecciones";
    }else{
        texto15 = "Con edad :" + agePerson + " espera a las proximas elecciones";
    }

    document.getElementById("rpta15").innerHTML = texto15;
}

