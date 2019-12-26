var tableData = data;
function updateInfo(){
var inputfecha = d3.select("#inputfecha");
var outputfecha = d3.select("#outputfecha");
var input1 = d3.select("#respuesta1");
var input2 = d3.select("#respuesta2");
var input3 = d3.select("#respuesta3");
var input4 = d3.select("#respuesta4");
var input5 = d3.select("#respuesta5");
var input6 = d3.select("#respuesta6");
var input7 = d3.select("#respuesta7");
debugger
var dateParser = d3.timeParse("%_d/%_m/%Y"); 
var dateInputText0 = d3.select("#inputFecha");

var new_table0 = tableData.filter(info => info.datetime> new Date(dateInputText0.property("value")).getTime());  

if(Object.entries(new_table0).length===0 ){
  new_table0 = tableData
}

var dateInputText1 = d3.select("#outputFecha");

var new_table1 = new_table0.filter(info => info.datetime<= new Date(dateInputText1.property("value")).getTime());  

if(Object.entries(new_table1).length===0 ){
  new_table1 = new_table0
}
debugger


      //displayData(new_table1);
      var dateInputText2 = d3.select("#oferta1");
      var new_table2 = new_table1.filter(info => info.branch===dateInputText2.property("value"));  
      if(Object.entries(new_table2).length===0 ){
        new_table2 = new_table1
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
      var x3 = [];
      var x1a = [], y1a = [], totals1={};
      var x2a = [], y2a = [], totals2={};
      var sub1a = 0, sub2a = 0;
      var x1b = [], y1b = [];
      var x2b = [], y2b = [];
      var sub1b = 0, sub2b = 0;
      var x1c = [], y1c = [];
      var x2c = [], y2c = [];
      var acm1c = 0, acm2c = 0;
//debugger
new_table5.forEach(function(item){
  if(Object.values(totals1) < parseFloat(item[input1.property("value")])){ 
    totals1[item] = parseFloat(item[input1.property("value")]);
  }
  if(Object.values(totals2) < parseFloat(item[input2.property("value")])){ 
    totals2[item] = parseFloat(item[input2.property("value")]);
  }
});


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
          acm1c += row[input1.property("value")];
          y1c.push( acm1c );
          acm2c += row[input2.property("value")];
          y2c.push( acm2c );
          x2.push(row['branch']);
          x3.push(row['shift']);
          x1a.push( row[input3.property("value")] );
          x2a.push( row[input4.property("value")] );
          x1b.push( row[input5.property("value")] );
          x2b.push( row[input6.property("value")] );
          x1c.push( row[input7.property("value")] );
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

var trace1c = {
  x: x1,
  y: y1c,
  visible : "legendonly",
  mode: "markers",
  type: "scatter",
  name: input1.property("value"),
  marker: {
    color: "orange",
    symbol: "hexagram"
  }
};

var trace2c = {
  x: x1,
  y: y2c,
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
var data0 = [trace1, trace2, trace1c, trace2c];
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

        //Build a Pie Chart
        var trace1e = {
          values: y1,
          labels: x2,
          type: 'pie',
          text: x2,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data2 = [trace1e];

      var layout2 = {
          title: input1.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot2", data2, layout2);



        //Build a Pie Chart
        var trace2e = {
          values: y2,
          labels: x2,
          type: 'pie',
          text: x2,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data3 = [trace2e];

      var layout3 = {
          title: input2.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot3", data3, layout3);

        //Build a Pie Chart
        var trace1f = {
          values: y1,
          labels: x3,
          type: 'pie',
          text: x3,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data4 = [trace1f];

      var layout4 = {
          title: input1.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot4", data4, layout4);



        //Build a Pie Chart
        var trace2f = {
          values: y2,
          labels: x3,
          type: 'pie',
          text: x3,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data5 = [trace2f];

      var layout5 = {
          title: input2.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot5", data5, layout5);


        //Build a Pie Chart
        var trace1g = {
          values: x1a,
          labels: x2,
          type: 'pie',
          text: x2,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data6 = [trace1g];

      var layout6 = {
          title: input3.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot6", data6, layout6);



        //Build a Pie Chart
        var trace2h = {
          values: x1a,
          labels: x3,
          type: 'pie',
          text: x3,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data7 = [trace2h];

      var layout7 = {
          title: input3.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot7", data7, layout7);


        //Build a Pie Chart
        var trace1i = {
          values: x2a,
          labels: x2,
          type: 'pie',
          text: x2,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data8 = [trace1i];

      var layout8 = {
          title: input4.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot8", data8, layout8);



        //Build a Pie Chart
        var trace2j = {
          values: x2a,
          labels: x3,
          type: 'pie',
          text: x3,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data9 = [trace2j];

      var layout9 = {
          title: input4.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot9", data9, layout9);


        //Build a Pie Chart
        var trace1k = {
          values: x1b,
          labels: x2,
          type: 'pie',
          text: x2,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data10 = [trace1k];

      var layout10 = {
          title: input5.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot10", data10, layout10);



        //Build a Pie Chart
        var trace2l = {
          values: x1b,
          labels: x3,
          type: 'pie',
          text: x3,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data11 = [trace2l];

      var layout11 = {
          title: input5.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot11", data11, layout11);

        //Build a Pie Chart
        var trace1m = {
          values: x2b,
          labels: x2,
          type: 'pie',
          text: x2,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data12 = [trace1m];

      var layout12 = {
          title: input6.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot12", data12, layout12);



        //Build a Pie Chart
        var trace2n = {
          values: x2b,
          labels: x3,
          type: 'pie',
          text: x3,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data13 = [trace2n];

      var layout13 = {
          title: input6.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot13", data13, layout13);

        //Build a Pie Chart
        var trace1o = {
          values: x1c,
          labels: x2,
          type: 'pie',
          text: x2,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data14 = [trace1o];

      var layout14 = {
          title: input7.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot14", data14, layout14);



        //Build a Pie Chart
        var trace2o = {
          values: x1c,
          labels: x3,
          type: 'pie',
          text: x3,
          textinfo: 'percent',
          hoverinfo: 'label+text+value+percent'
      };
      var data15 = [trace2o];

      var layout15 = {
          title: input7.property("value")
          //`Top Ten Measurements for Sample ${sample}`,
      };

Plotly.newPlot("plot15", data15, layout15);


}
updateInfo();

