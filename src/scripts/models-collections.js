const Backbone = require('Backbone')
const $ = require('jquery')

var UserModel = Backbone.Model.extend({
   parse: function(rawJSONRes){
      var attributes = rawJSONRes.results
      return attributes[0]
   },

   initialize: function(listingId){
      this.url = "https://openapi.etsy.com/v2/listings/" + listingId + ".js?api_key=0rciid5wyihqs6m8beo63i3t&includes=Images&callback=?"
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
      this.url = "https://openapi.etsy.com/v2/listings/active.js?api_key=0rciid5wyihqs6m8beo63i3t&includes=Images&callback=?"
   }
})


module.exports={
   ListingsCollection,
   UserModel
}
