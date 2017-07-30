// firebase reference
var database = firebase.database();


$("#addTrain").on("click", function(event) {
  event.preventDefault();

  console.log('working');

  //user input to vars
  var TrainName = $('#trainName').val().trim();
  var Destination = $("#destination").val().trim();
  var FirstTrain = $("#firstTrain").val().trim();
  var Frequency = $("#frequency").val().trim();

  //local object for new train data
  var newTrain = {
    name: TrainName,
    dest: Destination,
    firstChoo: FirstTrain,
    freq: Frequency
//  dateAdded: firebase.database.ServerValue.TIMESTAMP
  }

//dataRef.ref()

  //push new train object to firebase
  database.ref().push(newTrain);

  $('#trainName').val('');
  $('#destination').val('');
  $('#firstTrain').val('');
  $('#frequency').val('');

  // return false;
});


database.ref().on('child_added', function(childSnapshot) {

  var TrainName = childSnapshot.val().name;
  var Destination = childSnapshot.val().dest;
  var FirstTrain = childSnapshot.val().firstChoo;
  var Frequency = childSnapshot.val().freq;
  // var Mthworkmult = moment(startDate). 
$('.tableTrain').append("<tr><td>" + TrainName + "</td><td>" + Destination + "</td><td>" + FirstTrain + "</td><td>" + Frequency + "</td><td>" + "MinutesAway" + "</td></tr>");


});



