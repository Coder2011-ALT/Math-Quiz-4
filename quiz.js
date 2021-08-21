let operation = "";
let name1 = localStorage.getItem("Name 1: ");
let name2 = localStorage.getItem("Name 2: ");
let score1 = 0;
let score2 = 0;
let answer_turn = "player1";
let question_turn = "player2";
document.getElementById("player1_name").innerHTML = name1 + ": ";
document.getElementById("player2_name").innerHTML = name2 + ": ";
document.getElementById("player1_score").innerHTML = score1;
document.getElementById("player2_score").innerHTML = score2;
document.getElementById("player_question").innerHTML = "Question Turn - " + name1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + name2;

// function mult() {
//     console.log("multiplication");
//     operation = "multiplication";
//     window.location = "quiz.html";
// }

// function sub() {
//     console.log("subtraction");
//     operation = "subtraction";
//     window.location = "quiz.html";
// }

// function add() {
//     console.log("addition");
//     operation = "addition";
//     window.location = "quiz.html";
// }

// function divi() {
//     console.log("division");
//     operation = "division";
//     window.location = "quiz.html";
// }

function send() {
    console.log("sending operation...");
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    mult_ans = parseInt(num1) * parseInt(num2);
    localStorage.setItem("Answer:", mult_ans);
    mult_ques = "<h4>" + num1 + "X" + num2 + "</h4>";
    mult_ans_inp = "<br> Answer: <input type=\"text\" id=\"ans\">"
    mult_check_btn = "<br><br><button class=\"btn btn-info\" onclick=\"check()\">Check</button>"
    row = mult_ques + mult_ans_inp + mult_check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    //  if (operation == "multiplication") {
    //     console.log("mult");
    //     num1 = document.getElementById("number1").value;
    //     num2 = document.getElementById("number2").value;
    //     mult_ans = parseInt(num1) * parseInt(num2);
    //     mult_ques = "<h4>" + num1 + "X" + num2 + "</h4>";
    //     mult_ans_inp = "<br> Answer: <input type=\"text\" id=\"ans\">"
    //     mult_check_btn = "<br><br><button class=\"btn btn-info\" onclick=\"check()\">Check</button>"
    //     row = mult_ques + mult_ans_inp + mult_check_btn;
    //     document.getElementById("output").innerHTML = row;
    //     document.getElementById("number1").value = "";
    //     document.getElementById("number2").value = "";
    // }
    // if (operation == "addition") {
    //     console.log("add");
    //     num1 = document.getElementById("number1").value;
    //     num2 = document.getElementById("number2").value;
    //     add_ans = parseInt(num1) + parseInt(num2);
    //     add_ques = "<h4>" + num1 + "+" + num2 + "</h4>";
    //     add_ans_inp = "<br> Answer: <input type=\"text\" id=\"ans\">"
    //     add_check_btn = "<br><br><button class=\"btn btn-info\" onclick=\"check()\">Check</button>"
    //     row = add_ques + add_ans_inp + add_check_btn;
    //     document.getElementById("output").innerHTML = row;
    //     document.getElementById("number1").value = "";
    //     document.getElementById("number2").value = "";
    // }
    // if (operation == "division") {
    //     console.log("divide");
    //     num1 = document.getElementById("number1").value;
    //     num2 = document.getElementById("number2").value;
    //     divi_ans = parseInt(num2) / parseInt(num1);
    //     divi_ques = "<h4>" + num2 + "/" + num1 + "</h4>";
    //     divi_ans_inp = "<br> Answer: <input type=\"text\" id=\"ans\">"
    //     divi_check_btn = "<br><br><button class=\"btn btn-info\" onclick=\"check()\">Check</button>"
    //     row = divi_ques + divi_ans_inp + divi_check_btn;
    //     document.getElementById("output").innerHTML = row;
    //     document.getElementById("number1").value = "";
    //     document.getElementById("number2").value = "";
    // }
    // if (operation == "subtraction") {
    //     console.log("sub");
    //     num1 = document.getElementById("number1").value;
    //     num2 = document.getElementById("number2").value;
    //     sub_ans = parseInt(num1) - parseInt(num2);
    //     sub_ques = "<h4>" + num1 + "-" + num2 + "</h4>";
    //     sub_ans_inp = "<br> Answer: <input type=\"text\" id=\"ans\">"
    //     sub_check_btn = "<br><br><button class=\"btn btn-info\" onclick=\"check()\">Check</button>"
    //     row = sub_ques + sub_ans_inp + sub_check_btn;
    //     document.getElementById("output").innerHTML = row;
    //     document.getElementById("number1").value = "";
    //     document.getElementById("number2").value = "";
    // } 
}

function check() {
    get_answer = document.getElementById("ans").value;
    actual_answer = num1 * num2;
    console.log("User answer = ", get_answer, "Actual Answer = ", actual_answer);
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            score1 += 1;
            document.getElementById("player1_score").innerHTML = score1;
        }
        else {
            score2 += 1;
            document.getElementById("player2_score").innerHTML = score2;
        }

        if (question_turn == "player2") {
            question_turn = "player1";
            answer_turn == "player_2";
            document.getElementById("player_question").innerHTML = "Question Turn - " + name1;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + name2;
        }
        else {
            question_turn = "player2";
            answer_turn = "player1";
            document.getElementById("player_question").innerHTML = "Question Turn - " + name2;
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + name1;
        }
    }

}