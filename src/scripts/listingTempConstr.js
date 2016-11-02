var Backbone = require('Backbone')
var $ = require('jquery')


var allListingsTemplateFn = function(collectionData){

   var bigStr = collectionData.models.map(function(listingObj){

      return `

         <div class="col-xs-12 col-sm-4">
            <div class="thumbnail user-card">
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

         <div class='col-sm-6'>
            <h3>${modelData.get('title')}</h5>

            <h4 class="text-muted">$${modelData.get('price')}</h4>
         </div>
         </div>
         </div>
      `
}


// let MultiConstructor = ViewTemplate.extend({
//    el: '.content-area',
//    events: {
//       'click .e-listing' : 'routeToListing'
//    },
   //
   // routeToListing: function(evt){
   //    window.location.hash = 'listing/${evt.currentTarget.id}'
   // }
// })


module.exports={
         allListingsTemplateFn,
         singleListingTemplateFn
      }
