// firebase reference
var database = firebase.database();


$("#addTrain").on("click", function(event) {
  event.preventDefault();

  console.log('working');

  //user input to vars
  var Name = $('#trainName').val().trim();
  var Role = $("#destination").val().trim();
  var startDate = $("#firstTrain").val().trim();
  var Mthlyrate = $("#frequency").val().trim();

  //local object for train data
  var newEmp = {
    name: Name,
    role: Role,
    startdate: startDate,
    mthlyrate: Mthlyrate,
//  dateAdded: firebase.database.ServerValue.TIMESTAMP
  }

//dataRef.ref()

  //push new train object to firebase
  database.ref().push(newEmp);

  $('#trainName').val('');
  $('#destination').val('');
  $('#firstTrain').val('');
  $('#frequency').val('');

  // return false;
});


database.ref().on('child_added', function(childSnapshot) {

  var Name = childSnapshot.val().name;
  var Role = childSnapshot.val().role;
  var startDate = childSnapshot.val().startdate;
  var Mthlyrate = childSnapshot.val().mthlyrate;
  var Mthwork = moment(startdate).startOf('month').fromNow();
  // var Mthworkmult = moment(startDate). 
$('.tableTrain').append("<tr><td>" + Name + "</td><td>" + Role + "</td><td>" + startDate + "</td><td>" + "MthWork" + "</td><td>" + Mthlyrate + "</td><td>" + "TotesBill" + "</td></tr>");


});


// // create clock on jumbotron
// function GetClock(){
// var d=new Date();
// var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

// if(nhour==0){ap=" AM";nhour=12;}
// else if(nhour<12){ap=" AM";}
// else if(nhour==12){ap=" PM";}
// else if(nhour>12){ap=" PM";nhour-=12;}

// if(nmin<=9) nmin="0"+nmin;
// if(nsec<=9) nsec="0"+nsec;

// $('#clockbox').html(d);
// }

// window.onload=function(){
// GetClock();
// setInterval(GetClock,1000);
// }

