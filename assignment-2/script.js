function pal()
 {
    var str = document.getElementById("palindrome").value;
    if (str === "") 
    {
        alert("You can't enter empty strings");
    } 
    else
     {
        var lc_str = str.toLowerCase().replace(/[^A-Za-z0-9]/, '');
        var rev_str = lc_str.split('').reverse().join('');
        if (rev_str === lc_str) 
        {
            document.getElementById("pals").value = "Its a palindrome";
            return true;
        } else 
        {
            document.getElementById("pals").value = "It isn't a palindrome.";
            return false;
        }
    }
}

function game() {
    var q = Math.floor(Math.random() * 1000);
    var a = q % 3;
    document.getElementById("val1").value = a;
    var w = Math.floor(Math.random() * 1000);
    var b = w % 3;
    document.getElementById("val2").value = b;
    if ((a === 0 && b === 0) || (a === 1 && b === 1)||(a === 2 && b === 2)) 
    {
        document.getElementById("winner").value = "Its a tie, try again.";
        return 0;
    }
    if ((a === 0 && b === 1) || (a === 1 && b === 0)) {
        document.getElementById("winner").value = "Human Survives!";
        return 0;
    }
    if ((a === 0 && b === 2) || (a === 2 && b === 0)) {
        document.getElementById("winner").value = "Nuclear Bomb Exoplodes!";
        return 0;
    }
    if ((a === 1 && b === 2) || (a === 2 && b === 1)) {
        document.getElementById("winner").value = "Cockroach wins!";
        return 0;
    }
} 
function ana() 
{
    var str1 = document.getElementById("aval1").value;
    var str2 = document.getElementById("aval2").value;
    if (str1 === "" || str2 === "") 
    {
        alert("You can't enter empty strings");
    } else {
        var lc_str1 = str1.toLowerCase().replace(/\s/, '');
        var lc_str2 = str2.toLowerCase().replace(/\s/, '');
        if (lc_str1.length !== lc_str2.length) {
            document.getElementById("anas").value = "Aren't anagram.";
            return false;
        } else {

            var stra = lc_str1.split('');
            var strb = lc_str2.split('');
            var sort1 = stra.sort().join('');
            var sort2 = strb.sort().join('');
            if (sort1 === sort2) {
                document.getElementById("anas").value = "The strings are anagram";
                return true;
            } else {
                document.getElementById("anas").value = "The strings aren't anagram";
                return false;
            }
        }
    }
}
function valid() {

    var name = document.validform.name.value;
    var number = document.validform.number.value;
    var email = document.validform.email.value;

    var nametest = /^[a-zA-Z\s]+$/i;
    var numbertest = /^[0-9]{10}$/i;
    var emailtest = /^\S+@\S+\.\S+$/i;

    if(name == ""){
        alert("Please enter your name.");
        return false;
    }
    else if(!(nametest.test(name))){
        alert("Please enter your name again!");
        return false;
    }

    if(number == ""){
        alert("Please enter your contact number.");
        return false;
    }
    else if(!(numbertest.test(number))){
        alert("Please enter your contact number again!");
        return false;
    }

    if(email == ""){
        alert("Please enter your Email.");
        return false;
    }
    else if(!(emailtest.test(email))){
        alert("Please check your email and enter again.");
        return false;
    }
    return true;
}


function get(num) 
{
    document.getElementById("result").value += num;
    return 0;
}

function clr() 
{
    document.getElementById("result").value = '';
    return 0;
}

function dot() 
{
    document.getElementById("result").value += '.';
    return 0;
}

function Sqrt() 
{
    let x = document.getElementById("result").value;
    return document.getElementById("result").value = Math.sqrt(x).toFixed(3);

}

function absol() 
{
    let x = document.getElementById("result").value;
    return document.getElementById("result").value = Math.abs(x);
}

function percentage() 
{
    document.getElementById("result").value += '*100/';
    return 0;
}

function equalto() 
{
    let a = document.getElementById("result").value;
    let b = eval(a);
    return document.getElementById("result").value = b;
}