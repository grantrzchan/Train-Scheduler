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
  var Mins_Away = null;
  var MinutesAway = null;
  var TimeNextArrival = null;
  var TimeNow = moment();

  //local object for new train data
  var newTrain = {
    name: TrainName,
    dest: Destination,
    firstChoo: FirstTrain,
    freq: Frequency,
 dateAdded: firebase.database.ServerValue.TIMESTAMP
  }

  dataRef.ref()

  //push new train object to firebase
  database.ref().push(newTrain);

  $('#trainName').val("");
  $('#destination').val("");
  $('#firstTrain').val("");
  $('#frequency').val("");

  // return false;
});


database.ref().on("child_added", function(childSnapshot) {

  TrainName = childSnapshot.val().name;
  Destination = childSnapshot.val().dest;
  FirstTrain = childSnapshot.val().firstChoo;
  Frequency = childSnapshot.val().freq;
  MinutesAway = ArrivingIn();
  TimeNextArrival = moment().add(MinutesAway, "minutes").format("HH:mm");
  console.log(moment(TimeNextArrival).format("HH:mm"));

$('.tableTrain').append("<tr><td>" + TrainName + "</td><td>" + Destination + "</td><td>" + Frequency + "</td><td>" + TimeNextArrival + "</td><td>" + MinutesAway + "</td></tr>");

});

//Function to determine Minutes Away, stored locally
function ArrivingIn(){
  //Determine first train service time, train service started 6 months ago
var FirstService = moment(FirstTrain,"hh:mm").subtract(6,"months");
console.log(moment().format("hh:mm"));
var t_remainder = FirstService%Frequency;
console.log(t_remainder);
Mins_Away = Frequency - t_remainder;
return  Mins_Away
}


