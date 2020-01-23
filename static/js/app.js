// // YOUR CODE HERE!
// from data.js
var tableData = data;
var len =tableData.length;
// console.log(len);

var tbody = d3.select("tbody");



function init() {
data.forEach(function(UFO) {
  // console.log(UFO);
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(function([key, value]) {
    // console.log(key, value);
  var cell = tbody.append("td");
  cell.text(value);
  });
});
}



var _filteredData;
var _date_ele= d3.select("#form-control-date");

var _date_value= _date_ele.value;
// console.log(_date_value);


function filtered_display() {
  tableData.forEach(function(UFO1) {
    // console.log(UFO);
    
    var row = tbody.append("tr");
    Object.entries(UFO1).forEach(function([key, value]) {
      // console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
    });
  });
  }

function my_filteredata(){
    if (_date_value != "") {
     tableData = tableData.filter(function (date) {
     var mydd = date.datetime;
     //return mydd === _date_value;
     return date.datetime === "_date_value";
     console.log(_date_value);
     console.log(date.datetime);
     filtered_display();
  });
}
}

function handleSubmit(){
d3.select("tbody").selectAll("tr").remove();
    
    
my_filteredata();
  }

var _filter_btn = d3.select("#filter-btn");
_filter_btn.on("click", function() {
handleSubmit();

});

init();