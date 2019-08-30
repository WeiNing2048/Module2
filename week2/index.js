var Botkit = require("botkit");
const request = require("request");
if (!process.env.token) {
  console.log("Error: Specify token in environment");
  process.exit(1);
}
var controller = Botkit.slackbot({
  debug: false
});
controller
  .spawn({
    token: process.env.token
  })
  .startRTM(function(err) {
    if (err) {
      throw new Error(err);
    }
  });

controller.hears(
  ["hi", "hello", "howdy"],
  "direct_message,direct_mention,mention",
  function(bot, message) {
    bot.reply(message, "Hello there! :wave:");
  }
);

controller.hears(["wod"], "direct_message,direct_mention,mention", function(
  bot,
  message
) {
  var students = [
    "Wen Ling",
    "Jia Hui",
    "Wei Ning",
    "Erin",
    "Wee Vian",
    "Melissa",
    "Nico",
    "Satish"
  ];
  var randomNum = Math.floor(Math.random() * students.length);
  var selectedStudent = students[randomNum];
  var messages = [
    selectedStudent + " is quite clever to do the exercise",
    "I think " + selectedStudent + " will love to share with us :grinning:",
    selectedStudent + " show us your guts!!!!",
    "Why don't " + selectedStudent + " try try?"
  ];
  var randomMessage = Math.floor(Math.random() * messages.length);
  bot.reply(message, messages[randomMessage]);
  //students[randomNum] + " willing to do the exercise :sunglasses:"
});

controller.hears(["trip"], "direct_message, direct_mention, mention", function(
  bot,
  message
) {
  bot.startConversation(message, function(err, convo) {
    var place = "";
    var days = 0;
    var persons = 0;
    convo.addQuestion(
      "Where do you want to go?",
      function(response, convo) {
        place = response.text;
        bot.reply(message, place + " is a nice place.");
        convo.next();
      },
      {},
      "default"
    );

    convo.addQuestion(
      "How many people joining?",
      function(response, convo) {
        persons = response.text;
        bot.reply(
          message,
          "I think " + persons + " of us go together are just fine."
        );
        convo.next();
      },
      {},
      "default"
    );

    convo.addQuestion(
      "How long will the trip be?",
      function(response, convo) {
        days = response.text;
        var randomPrice = 100 + Math.floor(Math.random() * 500);
        var finalPrice = randomPrice * persons * days;
        convo.say(
          "Alright, let me check....Price per person is RM " +
            randomPrice +
            ". So " +
            persons +
            " persons for " +
            days +
            " days to " +
            place +
            " is RM " +
            finalPrice
        );
        convo.next();
      },
      {},
      "default"
    );
  });
});

controller.hears(
  ["weather"],
  "direct_message, direct_mention, mention",
  function(bot, message) {
    bot.startConversation(message, function(err, convo) {
      var city = "";
      convo.addQuestion(
        "Where are you now?",
        function(response, convo) {
          city = response.text;
          bot.reply(message, city + " is a fantastic city :heart_eyes:.");

          var url = "https://api.openweathermap.org/data/2.5/weather?q=";
          var token = "&appId=9fd7a449d055dba26a982a3220f32aa2";
          request(url + city + token, function(error, response, body) {
            console.error("error:", error);
            console.log("statusCode:", response && response.statusCode);
            console.log("body:", body);
            var jsonBody = JSON.parse(body); //string to Json
            //var jsonBody = JSON.stringify(body); // Json to string
            var deg = jsonBody.main.temp - 273.15;
            convo.say(
              "The weather is " +
                jsonBody.weather[0].main +
                " and the temperature is " +
                Math.round(deg, 2) +
                "\xB0C"
            );
          });
          convo.next();
        },
        {},
        "default"
      );
    });
  }
);
