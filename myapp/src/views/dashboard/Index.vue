<template>
  <div class="home">
    <div class="square backgrounds" style="margin-top:-30px;height:350px;margin-bottom:0%;">
      <div class="container" style="margin-left:8vh;">
        <div class="grid" style="padding-top:100px;">
          <vs-row style="margin-bottom:30px;">
              <vs-col offset="1" w="11"><h1 style="float:left;color:white;font-size:45px;">Welcome Ricko Tiaka</h1></vs-col>
              <vs-col offset="1" w="4" style="display:inherit !important;">
                <vs-button
                  icon
                  color="danger"
                  gradient
                  style="margin-right:20px;"
                >
                  <span class="material-icons">home</span>
                </vs-button>
                <span style="margin-top:auto;margin-bottom:auto;font-size:20px;"><b>/</b><span> Dashboard</span></span>
              </vs-col>
          </vs-row>
          <vs-row>
            <vs-col w="6" style="padding:5px;">
              <div style="background:white;padding:25px;border-radius:50px;">
                <radar-chart :chart-data="datacollection" :options="options"></radar-chart>
              </div>
            </vs-col>
            <!-- <vs-col w=""></vs-col> -->
            <vs-col w="6" style="padding:5px;">
              <div style="background:white;padding:25px;border-radius:50px;">
                <bar-chart :chart-data="datacollection" :options="options"></bar-chart>
              </div>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
import RadarChart from '../../components/chartjs/RadarChart';
import BarChart from '../../components/chartjs/BarChart';
// import moment from 'moment';

export default {
  components: {
    RadarChart,
    BarChart
  },
  data() {
    return {
      datacollection: {},
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      datalikeget: null,
      datalikechart: [],
      datadislikeget: null,
      datadislikechart: [],
      labelget: ['day One', 'day Two', 'day Three', 'day Four', 'day Five']
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/rest-api/dislikesstatic/')
      .then(response => {
        this.datadislikeget = response.data
        this.datadislikeget.forEach(value => {
          this.datadislikechart.push(value.dislikes)
        });
        this.datacollection = {
          labels: this.labelget,
          datasets: [{
              label: 'Like',
              borderColor: 'rgb(99, 197, 255)',
              backgroundColor: 'rgba(99, 197, 255, 0.2)',
              data: this.datalikechart
            },
            {
              label: 'Dislike',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              data: this.datadislikechart
            }
          ]
        }
      })
      .catch(er => {
        console.log(er)
    })
    axios.get('http://127.0.0.1:8000/rest-api/likesstatic/')
      .then(response => {
        this.datalikeget = response.data
        this.datalikeget.forEach(value => {
          this.datalikechart.push(value.likes)
        });
        this.datacollection = {
          labels: this.labelget,
          datasets: [{
              label: 'Like',
              borderColor: 'rgb(99, 197, 255)',
              backgroundColor: 'rgba(99, 197, 255, 0.2)',
              data: this.datalikechart
            },
            {
              label: 'Dislike',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              data: this.datadislikechart
            }
          ]
        }
      })
      .catch(er => {
        console.log(er)
    })
  },
  methods: {

  },
  watch: {
    chartData() {
      this.$data._chart.update()
    }
  }
  // methods: {
  //   fillData () {
  //     this.datacollection.data;
  //   },
  // }
} 
</script>
<style>

</style>