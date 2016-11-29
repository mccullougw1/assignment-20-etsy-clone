var Backbone = require('Backbone')
var $ = require('jquery')
var React = require('react')

// var ViewTemplateConstructor = require('./tempContr.js')

var allListingsTemplateFn = function(collectionData){

   var bigStr = collectionData.models.map(function(listingObj){

      return `

         <div class="col-xs-12 col-sm-4">
            <div class="thumbnail user-card" id="${listingObj.get('listing_id')}">
               <img class="profile-img" src="${listingObj.get('Images')[0].url_170x135}">
               <div class='caption'>
               <h5>${listingObj.get('title')}</h5>
               </div>
               <div class="price">
               <h6 class="text-muted">$${listingObj.get('price')}</h6>
               </div>
            </div>
         </div>

      `
   }).join('')

   return bigStr

}



var singleListingTemplateFn = function(modelData){
   console.log(modelData)

    return `
         <div class="single-listing">
         <div class="row">
         <div class="col-sm-6">
            <img class="profile-img" src="${modelData.get('Images')[0].url_570xN}">
         </div>

         <div class='col-sm-6' >
            <h3>${modelData.get('title')}</h5>

            <h4 class="text-muted">$${modelData.get('price')}</h4>
         </div>
         </div>
         </div>
      `
}

// Single Listing view is functional if you change the hash manually, did not finish troubleshooting events to route there dynamically

let MultiConstructor = Backbone.View.extend({
   el: '#app-container',
   events: {
      'click .user-card' : 'routeToListing'
   },

   routeToListing: function(evt){
      window.location.hash = 'listing/${evt.currentTarget.listing_id}'
   }
})


module.exports={
         allListingsTemplateFn,
         singleListingTemplateFn
      }
