(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    // STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using the 'speak' method or either helloSpeaker's or byeSpeaker's
    // 'speak' method.
    // See Lecture 50, part 1
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      } else {
        helloSpeaker(names[i]);
      }
    }
    
})();