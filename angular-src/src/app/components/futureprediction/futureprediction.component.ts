import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Chart } from "chart.js";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDVhMmYzNTU2M2UyMjBhOTQ5YjBmOTIiLCJlbWFpbCI6ImoxYW4uaG9uZ0B5YW5kZXguY29tIiwibmFtZSI6ImJyYXMiLCJleHAiOjE1NjY4MzI4OTIsImlhdCI6MTU2NjIyODA5Mn0.DfPAVVsaNCV3urx35HQdWIeXTV4ybe3lVQl4E_aA37M"
  })
};

declare var google: any;

function test(pl) {
  futurepredictionComponent.credentials.lat = pl.geometry.location.lat();
  futurepredictionComponent.credentials.lng = pl.geometry.location.lng();
}

function send_DisToPettah(distance) {
  futurepredictionComponent.credentials.distance = distance;
}

function minimum_distance_list(minimum_distance) {
  futurepredictionComponent.credentials.minimum_distance_list.push(
    minimum_distance
  );
}

function xx(pp) {
  futurepredictionComponent.credentials.pre_data = pp;
  console.log(futurepredictionComponent.credentials.pre_data);
  for (var j = 0; j < 30; j++) {
    var xyz = futurepredictionComponent.credentials.pre_data[j];
    for (var i = 0; i < 4; i++) {
      var yyy = xyz.slice(1 + 15 * i, 11 + 15 * i);
      if (yyy < 3) {
        futurepredictionComponent.credentials.pre_data_list.push(yyy * 10);
        futurepredictionComponent.credentials.pre_data_list_as_lkr.push(
          yyy * 100000000
        );
      } else {
        futurepredictionComponent.credentials.pre_data_list.push(yyy);
        futurepredictionComponent.credentials.pre_data_list_as_lkr.push(
          yyy * 10000000
        );
      }
    }
  }
  //  alert(futurepredictionComponent.credentials.pre_data_list[119]);
}

function Line_Chart_Per_Year() {
  // alert(futurepredictionComponent.credentials.pre_data_list[119]);
  for (var i = 0; i < 10; i++) {
    let per_year_sum: number = 0;
    for (var j = 0; j < 12; j++) {
      per_year_sum += parseFloat(
        futurepredictionComponent.credentials.pre_data_list[i * 12 + j]
      );
      // alert(per_year_sum);
    }
    futurepredictionComponent.credentials.pre_data_list_per_year.push(
      per_year_sum / 12
    );
  }
  // alert(futurepredictionComponent.credentials.pre_data_list_per_year)
  futurepredictionComponent.credentials.LineChartPerYear = new Chart(
    "lineChart_per_year",
    {
      type: "line",
      data: {
        labels: [
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
          "2025",
          "2026",
          "2027"
        ],
        datasets: [
          {
            label: "Average Land Price Per Year",
            data: [
              futurepredictionComponent.credentials.pre_data_list_per_year[0],
              futurepredictionComponent.credentials.pre_data_list_per_year[1],
              futurepredictionComponent.credentials.pre_data_list_per_year[2],
              futurepredictionComponent.credentials.pre_data_list_per_year[3],
              futurepredictionComponent.credentials.pre_data_list_per_year[4],
              futurepredictionComponent.credentials.pre_data_list_per_year[5],
              futurepredictionComponent.credentials.pre_data_list_per_year[6],
              futurepredictionComponent.credentials.pre_data_list_per_year[7],
              futurepredictionComponent.credentials.pre_data_list_per_year[8],
              futurepredictionComponent.credentials.pre_data_list_per_year[9]
            ],
            fill: false,
            lineTension: 0.1,
            borderColor: "red",
            borderWidth: 1
          }
        ]
      },

      options: {
        title: {
          text: "Per Year Chart",
          display: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }
  );
}

function Line_Chart_Per_Month() {
  var year = futurepredictionComponent.credentials.per_month;
  // alert(year);
  // alert(futurepredictionComponent.credentials.pre_data_list[119]);
  for (
    var j = (parseInt(year) - 2018) * 12;
    j < (parseInt(year) - 2018) * 12 + 12;
    j++
  ) {
    futurepredictionComponent.credentials.pre_data_list_per_month.push(
      futurepredictionComponent.credentials.pre_data_list[j]
    );
  }
  // alert(futurepredictionComponent.credentials.pre_data_list_per_month)
  futurepredictionComponent.credentials.LineChartPerYear = new Chart(
    "lineChart_per_month",
    {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Average Land Price Per Month",
            // data: [ futurepredictionComponent.credentials.pre_data_list[0] ,7,3,5,2,10,15,16,19,3,1,9],
            data: [
              futurepredictionComponent.credentials.pre_data_list_per_month[0],
              futurepredictionComponent.credentials.pre_data_list_per_month[1],
              futurepredictionComponent.credentials.pre_data_list_per_month[2],
              futurepredictionComponent.credentials.pre_data_list_per_month[3],
              futurepredictionComponent.credentials.pre_data_list_per_month[4],
              futurepredictionComponent.credentials.pre_data_list_per_month[5],
              futurepredictionComponent.credentials.pre_data_list_per_month[6],
              futurepredictionComponent.credentials.pre_data_list_per_month[7],
              futurepredictionComponent.credentials.pre_data_list_per_month[8],
              futurepredictionComponent.credentials.pre_data_list_per_month[9],
              futurepredictionComponent.credentials.pre_data_list_per_month[10],
              futurepredictionComponent.credentials.pre_data_list_per_month[11]
            ],
            fill: false,
            lineTension: 0.1,
            borderColor: "red",
            borderWidth: 1
          }
        ]
      },

      options: {
        title: {
          text: "Per Month Chart",
          display: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }
  );
}

@Component({
  selector: "app-futureprediction",
  templateUrl: "./futureprediction.component.html",
  styleUrls: ["./futureprediction.component.css"]
})
export class futurepredictionComponent implements OnInit {
  title = "A6withChartJs";
  LineChart = [];
  BarChart = [];

  public static credentials = {
    lat: "",
    lng: "",
    distance: "",
    minimum_distance_list: new Array(),
    pre_data: {},
    pre_data_list: new Array(),
    pre_data_list_as_lkr: new Array(),
    pre_data_list_per_year: new Array(),
    pre_data_list_per_month: new Array(),
    LineChartPerYear: [],
    LineChartPerMonth: [],
    per_month: ""
  };
  public prices = {
    pre_data: [],
    per_month: ""
  };

  @ViewChild("mapRed") mapRed: ElementRef;
  constructor(private http: HttpClient) {}
  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error);
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    var map = new google.maps.Map(this.mapRed.nativeElement, {
      center: { lat: 6.9271, lng: 79.8621 },
      zoom: 14,
      mapTypeId: "roadmap"
    });

    var input = document.getElementById("pac-input");

    var searchBox = new google.maps.places.SearchBox(input);

    map.addListener("bounds_changed", function() {
      searchBox.setBounds(map.getBounds());
    });
    var markers = [];
    searchBox.addListener("places_changed", function() {
      var places = searchBox.getPlaces();
      markers = [];
      var bounds = new google.maps.LatLngBounds();
      var place = places[0];
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      markers.push(
        new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        })
      );
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.union(place.geometry.location);
      }
      var service = new google.maps.places.PlacesService(map);
      var building = ["hospital", "bank", "school"];
      test(place);
      for (var i = 0; i < building.length; i++) {
        service.nearbySearch(
          {
            location: place.geometry.location,
            radius: 1500,
            type: building[i]
          },
          function(results, status) {
            // alert(results.length)
            if (results.length == 0) {
              console.log("0");
            } else {
              if (status !== "OK") return;
              // alert(results[0].geometry.location.lat());
              var rad = function(x) {
                return (x * Math.PI) / 180;
              };
              // let number: number = 0;
              let total_distance: number = 0;
              let average_distance: number = 0;
              let build_number: number = 0;
              // let passed: array = [];
              var passed = [];
              var filterDistance = function(p) {
                var R = 6378137; // Earth’s mean radius in meter
                var dLat = rad(
                  p.geometry.location.lat() - place.geometry.location.lat()
                );
                var dLong = rad(
                  p.geometry.location.lng() - place.geometry.location.lng()
                );
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(rad(place.geometry.location.lat())) *
                    Math.cos(rad(p.geometry.location.lat())) *
                    Math.sin(dLong / 2) *
                    Math.sin(dLong / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                return d; // returns the distance in meter
              };
              var DisToTown = function() {
                var R = 6378137; // Earth’s mean radius in meter
                var dLat = rad(6.9329 - place.geometry.location.lat());
                var dLong = rad(79.8554 - place.geometry.location.lng());
                var a =
                  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(rad(place.geometry.location.lat())) *
                    Math.cos(rad(6.9329)) *
                    Math.sin(dLong / 2) *
                    Math.sin(dLong / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c;
                return d; // returns the distance in meter
              };

              var DisToPettah = DisToTown();
              send_DisToPettah(DisToPettah);
              // alert(DisToPettah) ;

              // alert(results.length);
              var distance_list = [];
              for (var j = 0; j < results.length; j++) {
                distance_list.push(filterDistance(results[j]));
                // alert(filterDistance(results[j]));
                if (filterDistance(results[j]) < 1500) {
                  total_distance += filterDistance(results[j]);
                  build_number += 1;
                  passed.push(results[j]);
                }
              }
              // alert(distance_list);
              var dist = Math.min.apply(null, distance_list);
              minimum_distance_list(dist);
              // alert(dist);
              if (build_number !== 0) {
                average_distance = total_distance / build_number;
              } else {
                average_distance = 0;
              }
              for (var i = 0; i < passed.length; i++) {
                var image = {
                  url: passed[i].icon,
                  size: new google.maps.Size(71, 71),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(17, 34),
                  scaledSize: new google.maps.Size(25, 25)
                };
                var marker = new google.maps.Marker({
                  map: map,
                  icon: image,
                  title: passed[i].name,
                  position: passed[i].geometry.location
                });
                bounds.extend(passed[i].geometry.location);
              }
              map.fitBounds(bounds);
              map.setZoom(15);
            }
          }
        );
      }
    });

    // alert(json);
  }

  send_data_10_year() {
    // alert('ok');
    var data = {
      minimum_distance_list: [],
      distance: "",
      lat: "",
      lng: ""
    };
    data.distance = futurepredictionComponent.credentials.distance;
    data.minimum_distance_list =
      futurepredictionComponent.credentials.minimum_distance_list;
    data.lat = futurepredictionComponent.credentials.lat;
    data.lng = futurepredictionComponent.credentials.lng;
    return this.http
      .post("http://localhost:8080/users/send_data_10_year", data, httpOptions)
      .subscribe(prediction_data_10_year => {
        // console.log(prediction_data_10_year),/

        futurepredictionComponent.credentials.pre_data_list = [];
        futurepredictionComponent.credentials.pre_data_list_as_lkr = [];
        futurepredictionComponent.credentials.pre_data_list_per_month = [];
        futurepredictionComponent.credentials.pre_data_list_per_year = [];
        xx(prediction_data_10_year),
          (this.prices.pre_data =
            futurepredictionComponent.credentials.pre_data_list_as_lkr);
      });
  }

  per_year() {
    Line_Chart_Per_Year();
  }

  per_month() {
    futurepredictionComponent.credentials.per_month = this.prices.per_month;
    // alert(futurepredictionComponent.credentials.per_month);
    Line_Chart_Per_Month();
  }
}
