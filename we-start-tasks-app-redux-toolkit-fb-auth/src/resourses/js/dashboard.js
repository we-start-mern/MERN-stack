/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')

})()


// for select category
new TomSelect("#input-tags",{
  persist: false,
  createOnBlur: true,
  create: true
});

new TomSelect(".select-beast",{
  create: true,
  sortField: {
    field: "text",
    direction: "asc"
  }
});