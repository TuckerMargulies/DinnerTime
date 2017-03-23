   var express   = require('express'),
    server       = express(),
    bodyParser   = require('body-parser'),
    PORT         = process.env.PORT || 3000,
    ejs          = require('ejs'),
    mongoose     = require ('mongoose'),
    MONGO_URI    = process.env.MONGOLAB_URI || "mongodb://localhost:27017",
    db           = mongoose.connection,
    Schema       = mongoose.Schema;
    Dinner       = require('./models/recipe.js'),
    jquery       = require('jquery'),
    expressEjsLaouts  = require ('express-ejs-layouts'),
    methodOverride    = require ('method-override');



//// router /////
server.use(express.static('./public'));
server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(expressEjsLaouts)
server.use(methodOverride("_method"))


server.get('/', function (req, res, next) {
  res.render('new')
})
// ///// home screen /////
// server.get('/', function (req, res, next){
//   Dinner.find( function (err, foundRecipe) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log("foundRecipe " + foundRecipe)
//       res.render('home', {
//         Recipe:foundRecipe
//       })
//     }
//   })
// })

//
// //// render recipe entry form /////
// server.get('/admin', function (req, res, next){
//   Dinner.find( function (err, foundRecipe) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log("foundRecipe " + foundRecipe)
//       res.render('admin', {
//         Recipe:foundRecipe
//       })
//     }
//   })
// })
//
// ////delet recipe /////
// server.delete('/admin/:id/delete', function (req, res){
//   Dinner.remove({
//     _id:req.params.id
//   }, function (err) {
//     if(err){
//       console.log(err)
//     } else {
//       res.redirect(301, '/admin')
//     }});
// });
//
// ////edit recipe route////
// server.patch('/admin/:id/edit', function (req, res) {
//   Dinner.findById(req.params.id, function (err, foundRecipe){
//     if (err) {
//       console.log(err)
//     } else {
//       foundRecipe.update(req.body, function (seconderr, recipe){
//         if (seconderr){
//           console.log(seconderr)
//         } else {
//           res.redirect(301, '/admin')
//         }});
//     }});
// });
//
// ////// render admin page ///////
//
// server.get('/admin', function (req, res, next){
//           res.render('admin')
//     		});
//
// ///create new recipe ////
server.post('/new', function (req, res, next){
          var newRecipe = req.body
          var dinnerSchema = new Dinner (newRecipe)
          dinnerSchema.save ( function (err, dinner){
            if(err){
              console.log(err)
            } else {
              console.log('save')
              res.redirect('/')
            }
          });
    		});

//// database set up ///////
db.on('error', console.error.bind(console, 'database connection error:'));

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI + '/dinnertime', function () {
  console.log('Database is running....')
});

mongoose.set('debug', true);


//// server /////
server.listen(PORT, function(){
  console.log("Fork is listening on " + PORT);
});
