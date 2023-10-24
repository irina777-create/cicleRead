//Вывести на сторінку в один рядок через кому числа від 10 до 20//
const numberStrings="";
for(const i=10;i<=20;i++){
    numberStrings+=i;
    if(i<20){
        numberStrings+=',';
    }
}