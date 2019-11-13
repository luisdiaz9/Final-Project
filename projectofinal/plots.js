var tableData = data;
function updateInfo(){

var input1 = d3.select("#respuesta1");
var input2 = d3.select("#respuesta2");
//debugger


      //displayData(new_table1);
      var dateInputText2 = d3.select("#oferta1");
      var new_table2 = tableData.filter(info => info.branch===dateInputText2.property("value"));  
      if(Object.entries(new_table2).length===0 ){
        new_table2 = tableData
      }
      //      debugger
      //displayData(new_table2);
      var dateInputText3 = d3.select("#oferta2");
      var new_table3 = new_table2.filter(info => info.shift===parseFloat(dateInputText3.property("value")));
      if(Object.entries(new_table3).length===0 ){
        new_table3 = new_table2
      }

      var dateInputText5 = d3.select("#oferta3");
      var new_table5 = new_table3.filter(info => info.volumen===parseFloat(dateInputText5.property("value")));
      if(Object.entries(new_table5).length===0 ){
        new_table5 = new_table3
      }

      var x1 = [], y1 = [];
      var x2 = [], y2 = [];
      var x1a = [], y1a = [], totals1={};
      var x2a = [], y2a = [], totals2={};
      var sub1a = 0, sub2a = 0;
      var x1b = [], y1b = [];
      var x2b = [], y2b = [];
      var sub1b = 0, sub2b = 0;
//debugger
new_table5.forEach(function(item){
  if(Object.values(totals1) < parseFloat(item[input1.property("value")])){ 
    totals1[item] = parseFloat(item[input1.property("value")]);
  }
  if(Object.values(totals2) < parseFloat(item[input2.property("value")])){ 
    totals2[item] = parseFloat(item[input2.property("value")]);
  }
});

      var dateParser = d3.timeParse("%_d/%_m/%Y"); 
     Object.entries(new_table5).forEach(([key]) => {
          row = new_table5[key];
          x1.push( dateParser(moment(row['datetime']).format('DD/MM/YYYY')) );
          y1.push( row[input1.property("value")] );
          y2.push( row[input2.property("value")] );
          sub1a = row[input1.property("value")] / parseFloat(Object.values(totals1)[0]);
          y1a.push( sub1a * 100 );
          sub2a = row[input2.property("value")] / parseFloat(Object.values(totals2)[0]);
          y2a.push( sub2a * 100);
          sub1b = (row[input1.property("value")] / row[input2.property("value")]) - 1;
          y1b.push( sub1b * 100 );
          sub2b = (row[input2.property("value")] / row[input1.property("value")]) - 1;
          y2b.push( sub2b * 100);
      });

// Create the Traces
var trace1 = {
  x: x1,
  y: y1,

  mode: "markers",
  type: "scatter",
  name: input1.property("value"),
  marker: {
    color: "orange",
    symbol: "hexagram"
  }
};

var trace2 = {
  x: x1,
  y: y2,

  mode: "markers",
  type: "scatter",
  name: input2.property("value"),
  marker: {
    color: "#2077b4",
    symbol: "diamond-x"
  }
};

var trace1a = {
  x: x1,
  y: y1a,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name:  input1.property("value"),
  marker: {
    color: "orange",
    symbol: "hexagram"
  }
};

var trace2a = {
  x: x1,
  y: y2a,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name:  input2.property("value"),
  marker: {
    color: "#2077b4",
    symbol: "diamond-x"
  }
};


var trace1b = {
  x: x1,
  y: y1b,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input1.property("value"),
  marker: {
    color: "orange",
    symbol: "hexagram"
  }
};

var trace2b = {
  x: x1,
  y: y2b,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input2.property("value"),
  marker: {
    color: "#2077b4",
    symbol: "diamond-x"
  }
};



// Create the data array for the plot
var data0 = [trace1, trace2];
var data1 = [trace1a, trace2a, trace1b, trace2b];
// Define the plot layout
var layout = {
  autosize: true,

  title: dateInputText2.property("value") ,
  xaxis: { 
title: "",
tickformat: '%d-%m-%Y',
    type: 'date', 
automargin: true

 },
  yaxis: { title: "Number of Employees", type: "linear", automargin: true }
};

var layout0 = {
  autosize: true,

  title: dateInputText2.property("value") ,
  xaxis: { 
title: "",
tickformat: '%d-%m-%Y',
    type: 'date', 
automargin: true

 },
  yaxis: { title: "Headcount Over or Under Applied (%)", type: "linear", automargin: true }
};



Plotly.newPlot("plot", data0, layout);
Plotly.newPlot("plot1", data1, layout0);

}
updateInfo();

