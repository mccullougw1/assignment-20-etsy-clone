const Backbone = require('Backbone')
const $ = require('jquery')

const apiKey = require("./secrets.js")

var UserModel = Backbone.Model.extend({
   parse: function(rawJSONRes){
      var attributes = rawJSONRes.results
      return attributes[0]
   },

   initialize: function(listingId){
      this.url = "https://openapi.etsy.com/v2/listings/" + listingId + apiKey
   }
})

var emptyModel = Backbone.Model.extend({

})

var ListingsCollection = Backbone.Collection.extend({
   model: emptyModel,
   parse: function(rawJSONRes){
      return rawJSONRes.results
   },

   initialize: function(){
      this.url = "https://openapi.etsy.com/v2/listings/active" + apiKey
   }
})


module.exports={
   ListingsCollection,
   UserModel
}
