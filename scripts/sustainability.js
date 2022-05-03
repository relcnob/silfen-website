var options = {
  series: [435, 80, 35, 5],
  labels: ["Air", "Road", "Rail", "Sea"],
  colors: ["#82cfff", "#4c565c", "#B41730", "#10689c"],
  chart: {
    type: "donut",
  },
  dataLabels: {
    enabled: true,
  },
  title: {
    text: "Greenhouse gas emission by type of transportation in g CO2/ton-km",
    style: {
      fontSize: "12px",
    },
  },
};

var chart = new ApexCharts(document.querySelector("#shipping-chart"), options);

chart.render();

// water chart
var options2 = {
  fill: {
    type: "image",
    image: {
      src: ["silfen-website/assets/img/water-texture.jpg"],
      width: undefined, // optional
      height: undefined, //optional
    },
  },
  series: [2700, 55],
  chart: {
    height: 350,
    type: "bar",
    name: "Water consumption per t-shirt",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },

  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },

  series: [
    {
      name: "Water consumption",
      data: [
        {
          x: "Conventional cotton",
          y: 2700,
        },
        {
          x: "Organic cotton",
          y: 234,
        },
      ],
    },
  ],
  xaxis: {
    categories: ["Conventional cotton", "Organic cotton"],
    position: "top",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + " L";
      },
    },
  },
  title: {
    text: "Water consumption per T-shirt",
    floating: true,
    offsetY: 330,
    align: "center",
    style: {
      fontSize: "12px",
      color: "#444",
    },
  },
};

var chart2 = new ApexCharts(document.querySelector("#water-chart"), options2);
chart2.render();
