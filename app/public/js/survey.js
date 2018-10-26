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

//function to validate inputs and select values
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

// the pop up modal
let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myAlert");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");
// When the user clicks on <span> (x), close the modal
$("span").on("click", function() {
    $("#myModal").css("display", "none");
});

$("span").on("click", function() {
    $("#myAlert").css("display", "none");
});

// the closing of the modals anywhere on the window
$(window).on("click", function(event) {
    if (event.target == modal) {
        $("#myModal").css("display", "none");
    }
});

$(window).on("click", function(event) {
    if (event.target == modal2) {
        $("#myAlert").css("display", "none");
    }
});


// the submit function
const submitValues = function() {
        //array to hold the user answer values
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
            //all the values are pushed into the scores array
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
            //the object model for the ajax request to use
            const employeeInfo = {
                    name: name,
                    photo: photoLink,
                    scores: scores
                }
                // console.log(employeeInfo);
                //POST request for the front end
            $.ajax({
                url: '/api/employees',
                method: 'POST',
                data: employeeInfo
            }).then(function(data) {
                // console.log(data.scores);
                // ajax call to pull in employees for comparison
                $.ajax({
                    url: "/api/employees",
                    method: "GET"
                }).then(function(result) {
                    console.log(result); ///
                    result[0]; //employee one
                    result[1]; // employee two
                    //data for 1st employee
                    let a1 = Math.abs(data.scores[0] - result[0].scores[0]);
                    let a2 = Math.abs(data.scores[1] - result[0].scores[1]);
                    let a3 = Math.abs(data.scores[2] - result[0].scores[2]);
                    let a4 = Math.abs(data.scores[3] - result[0].scores[3]);
                    let a5 = Math.abs(data.scores[4] - result[0].scores[4]);
                    let a6 = Math.abs(data.scores[5] - result[0].scores[5]);
                    let a7 = Math.abs(data.scores[6] - result[0].scores[6]);
                    let a8 = Math.abs(data.scores[7] - result[0].scores[7]);
                    let a9 = Math.abs(data.scores[8] - result[0].scores[8]);
                    let a10 = Math.abs(data.scores[9] - result[0].scores[9]);

                    let totalDifference1 = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10;
                    console.log("totalDifference1 " + totalDifference1);
                    //data for 2nd employee
                    let b1 = Math.abs(data.scores[0] - result[1].scores[0]);
                    let b2 = Math.abs(data.scores[1] - result[1].scores[1]);
                    let b3 = Math.abs(data.scores[2] - result[1].scores[2]);
                    let b4 = Math.abs(data.scores[3] - result[1].scores[3]);
                    let b5 = Math.abs(data.scores[4] - result[1].scores[4]);
                    let b6 = Math.abs(data.scores[5] - result[1].scores[5]);
                    let b7 = Math.abs(data.scores[6] - result[1].scores[6]);
                    let b8 = Math.abs(data.scores[7] - result[1].scores[7]);
                    let b9 = Math.abs(data.scores[8] - result[1].scores[8]);
                    let b10 = Math.abs(data.scores[9] - result[1].scores[9]);

                    let totalDifference2 = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10;
                    console.log("totalDifference2 " + totalDifference2);
                    // final difference comparison
                    if (totalDifference1 < totalDifference2) {
                        $("#nameMatch").html(result[0].name);
                        $("#photoMatch").attr("src", result[0].photo);
                        $("#myModal").css("display", "block");
                    } else {
                        $("#nameMatch").html(result[1].name);
                        $("#photoMatch").attr("src", result[1].photo);
                        $("#myModal").css("display", "block");
                    }
                });
            });
            //clearing the input and select values
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
            $("#myAlert").css("display", "block");
        }
    }
    //the button that activates the function above
$("#submit").on("click", submitValues);