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
            <vs-col w="4">
              <div style="background-image: linear-gradient(30deg, rgb(93, 255, 95) , rgb(8, 217, 161));margin:10px;padding:25px;border-radius:15px;color:white;">
                <vs-row>
                  <vs-col w="3">
                    <div>
                      <span style="font-size:5vw;" class="material-icons">thumb_up</span>
                    </div>
                  </vs-col>
                  <vs-col w="7">
                    <vs-row>
                      <vs-col w="12">
                        <div class="bolders" style="float:left;font-size:2vw;">
                          Likes Today
                        </div>
                      </vs-col>
                      <vs-col w="12">
                        <div class="lighters" style="float:left;font-size:1.8vw;">
                          152
                        </div>
                      </vs-col>
                    </vs-row>
                  </vs-col>
                  <vs-col w="2" style="margin:auto;">
                    <vs-col w="12">
                      <span class="material-icons">arrow_upward</span>
                    </vs-col>
                    <vs-col w="12">
                      23.2%
                    </vs-col>
                  </vs-col>
                </vs-row>
              </div>
            </vs-col>
            <vs-col w="4">
              <div style="background-image: linear-gradient(30deg, rgb(255, 70, 100) , rgb(255, 180, 0));margin:10px;padding:25px;border-radius:15px;color:white;">
                <vs-row>
                  <vs-col w="3">
                    <div>
                      <span style="font-size:5vw;" class="material-icons">thumb_down</span>
                    </div>
                  </vs-col>
                  <vs-col w="7">
                    <vs-row>
                      <vs-col w="12">
                        <div class="bolders" style="float:left;font-size:2vw;">
                          Dislikes Today
                        </div>
                      </vs-col>
                      <vs-col w="12">
                        <div class="lighters" style="float:left;font-size:1.8vw;">
                          75
                        </div>
                      </vs-col>
                    </vs-row>
                  </vs-col>
                  <vs-col w="2" style="margin:auto;">
                    <vs-col w="12">
                      <span class="material-icons">arrow_upward</span>
                    </vs-col>
                    <vs-col w="12">
                      12.7%
                    </vs-col>
                  </vs-col>
                </vs-row>
              </div>
            </vs-col>
            <vs-col w="4">
              <div style="background-image: linear-gradient(30deg, rgb(93, 134, 255) , rgb(9, 8, 217));margin:10px;padding:25px;border-radius:15px;color:white;">
                <vs-row>
                  <vs-col w="3">
                    <div>
                      <span style="font-size:5vw;" class="material-icons">comment</span>
                    </div>
                  </vs-col>
                  <vs-col w="7">
                    <vs-row>
                      <vs-col w="12">
                        <div class="bolders" style="float:left;font-size:1.9vw;">
                          Comment Today
                        </div>
                      </vs-col>
                      <vs-col w="12">
                        <div class="lighters" style="float:left;font-size:1.8vw;">
                          24
                        </div>
                      </vs-col>
                    </vs-row>
                  </vs-col>
                  <vs-col w="2" style="margin:auto;">
                    <vs-col w="12">
                      <span class="material-icons">arrow_upward</span>
                    </vs-col>
                    <vs-col w="12">
                      5.6%
                    </vs-col>
                  </vs-col>
                </vs-row>
              </div>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col w="8" style="padding:5px;">
              <div style="background:white;padding:25px;border-radius:50px;">
                <line-chart :chart-data="datacollection" :options="options"></line-chart>
              </div>
            </vs-col>
            <!-- <vs-col w=""></vs-col> -->
            <vs-col w="4" style="padding:5px;">
              <div style="background:white;padding:25px;border-radius:50px;">
                <radar-chart :chart-data="datacollection" :options="options"></radar-chart>
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
import LineChart from '../../components/chartjs/LineChart';
// import BarChart from '../../components/chartjs/BarChart';
import RadarChart from '../../components/chartjs/RadarChart';
// import moment from 'moment';

export default {
  components: {
    LineChart,
    // BarChart,
    RadarChart
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
      labelget: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
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
              data: this.datalikechart,
              tension: 0.2
            },
            {
              label: 'Dislike',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              data: this.datadislikechart,
              tension: 0.2
            }
          ],
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
              data: this.datalikechart,
              tension: 0.2
            },
            {
              label: 'Dislike',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              data: this.datadislikechart,
              tension: 0.2
            }
          ],
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