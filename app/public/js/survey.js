const emp = require("../data/employees.js");
// const express = require("express");

console.log(emp);

//GET request for API Employee List link
$("a").on("click", function() {
    $.ajax({
        url: "/api/employees",
        method: "GET"
    }).then(function(response) {
        window.location.replace('/api/employees');
    });
});

//GET request for survey page
$("#goToSurvey").on("click", function() {
    $.ajax({
        url: "/survey",
        method: "GET"
    }).then(function(response) {
        window.location.replace('/survey');
    });
});

//function to validate select value
const validation = function() {
    let name = document.getElementById("name").value;
    let photoLink = document.getElementById("photoLink").value;

    let ans1 = parseInt(document.getElementById("One").value);
    let ans2 = parseInt(document.getElementById("Two").value);
    let ans3 = parseInt(document.getElementById("Three").value);
    let ans4 = parseInt(document.getElementById("Four").value);
    let ans5 = parseInt(document.getElementById("Five").value);
    let ans6 = parseInt(document.getElementById("Six").value);
    let ans7 = parseInt(document.getElementById("Seven").value);
    let ans8 = parseInt(document.getElementById("Eight").value);
    let ans9 = parseInt(document.getElementById("Nine").value);
    let ans10 = parseInt(document.getElementById("Ten").value);
    if (name && photoLink && ans1 && ans2 && ans3 && ans4 && ans5 && ans6 && ans7 && ans8 && ans9 && ans10) {
        return true;
    }
}


const submitValues = function() {
    //array to hold the answer values
    const scores = [];
    let name = $("#name").val();
    let photoLink = $("#photoLink").val();
    if (validation()) {
        let ans1 = parseInt($('#One').val());
        let ans2 = parseInt($('#Two').val());
        let ans3 = parseInt($('#Three').val());
        let ans4 = parseInt($('#Four').val());
        let ans5 = parseInt($('#Five').val());
        let ans6 = parseInt($('#Six').val());
        let ans7 = parseInt($('#Seven').val());
        let ans8 = parseInt($('#Eight').val());
        let ans9 = parseInt($('#Nine').val());
        let ans10 = parseInt($('#Ten').val());
        scores.push(ans1);
        scores.push(ans2);
        scores.push(ans3);
        scores.push(ans4);
        scores.push(ans5);
        scores.push(ans6);
        scores.push(ans7);
        scores.push(ans8);
        scores.push(ans9);
        scores.push(ans10);

        const employeeInfo = {
            name: name,
            photo: photoLink,
            scores: scores
        }

        console.log(employeeInfo);
        //please don't forget the matching modal!

        //POST request for the front end
        $.ajax({
            url: '/api/employees',
            method: 'POST',
            data: employeeInfo
        }).then(function(data) {

            console.log(data.scores);
            // console.log(data);
        });



        $("#name").val('');
        $("#photoLink").val('');
        $('#One').val('');
        $('#Two').val('');
        $('#Three').val('');
        $('#Four').val('');
        $('#Five').val('');
        $('#Six').val('');
        $('#Seven').val('');
        $('#Eight').val('');
        $('#Nine').val('');
        $('#Ten').val('');
    } else {
        console.log("There is an error");
        alert("One or more fields is missing.Try again!");
    }
}


$("#submit").on("click", submitValues);