const Backbone = require('Backbone')
const $ = require('jquery')

var {UserModel, ListingsCollection} = require('./models-collections.js')
var ViewTemplateConstructor = require('./tempContr.js')
var {allListingsTemplateFn, singleListingTemplateFn} = require('./listingTempConstr.js')



const appContainer = document.querySelector('#app-container')
const contentHeader = document.querySelector('.header')


var AppRouter = Backbone.Router.extend({
   routes: {
      "details/:id" : "showDetailsPage",
      "" : "showHomePage"
   },

   showDetailsPage: function(listingId){
      contentHeader.innerHTML = '<h3>Check out this shit</h3>'
      var detailListing = new UserModel(listingId)
      detailListing.fetch().then(function(){

      var singleListing = new ViewTemplateConstructor('.content-area', singleListingTemplateFn)
      singleListing.render(detailListing)
      })
   },

   showHomePage: function(){
      contentHeader.innerHTML = '<h3>Please buy some shit</h3>'
      var allListings = new ListingsCollection()
      allListings.fetch().then(function(){
         console.log(allListings)

      var userListing = new ViewTemplateConstructor('.content-area', allListingsTemplateFn)
      userListing.render(allListings)
      })
      
   },

   initialize: function(){
      Backbone.history.start()
   }


})

var app = new AppRouter();
