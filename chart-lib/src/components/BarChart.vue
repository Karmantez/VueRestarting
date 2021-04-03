<template>
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  props: {
    chartData: { type: Object, default: () => {} },
  },
  mounted() {
    // var ctx = document.getElementById('barChart');

    // 💡 해당 컴포넌트 안에서만 찾는다.
    var ctx = this.$refs.barChart;

    new this.$_ChartJS(ctx, {
      type: 'bar',
      data: this.chartData,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
};
</script>

<style></style>
