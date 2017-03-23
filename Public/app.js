
var total = document.getElementById("total").value
var array = []
var selectionarray = []

var makeDinner = {
  button: $('.GetDinner'),

  arraybuilder: function () {
    for (i = 0; i < total; i++ ) {
      array.push(i)
    }
      console.log("first array " + array)
  },

  randomizer: function () {
      var i = 0,
          j = 0,
          temp = null

      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      console.log(array)
    },

  start: function () {
    makeDinner.button.on('click', function(){
    var numberofrecipies = document.getElementById("numberofrecipies").value

      makeDinner.randomizer()
      for (i = 0; i < numberofrecipies; i++){
        $(".result" + array[i]).toggleClass("hidden")
        console.log("array i" + array[i])
      }
    })
  }
}
makeDinner.arraybuilder()
makeDinner.start()
