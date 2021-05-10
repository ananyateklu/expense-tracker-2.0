import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./styles.css";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          width: 380,
          type: "Donut",
        },
        plotOptions: {
          pie: {
            startAngle: 0,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        legend: {
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
        },
        title: {
          text: "Expenses",
        },
        labels: ["Utilities", "School", "Shopping", "Transportation", "Food"],

        theme: {
          palette: "palette2", // upto palette10
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 380,
              },
              //   legend: {
              //     position: 'bottom'
              //   }
            },
          },
        ],
      },
      series: [
        this.props.utility,
        this.props.school,
        this.props.hobby,
        this.props.transport,
        this.props.food,
      ],
      labels: ["A", "B", "C", "D", "E"],
    };
  }

  render() {
    return (
      <div className="Donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default Donut;
