  var ctx = document.getElementsByClassName("barra-chart");
  const leitor = [53, 51, 57, 61, 50];
  const naoLeitor = [47, 49, 43, 39, 50];


  var chartGraph = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
      datasets: [
        {
        label: "Leitor",
        data: leitor,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: "pink",
       },
        {
          data: naoLeitor,
          label: "Não Leitor",
          backgroundColor: "purple",
        },
      ],
    },



  options: {
    title: {
      fontSize: 20,
      text: "Porcentagem de leitores por região",
    },
    yAxis: {
      title: {
        text: "Porcentagem",
        fontSize: 20,
        color: "red",
      },
    },
  }
});
 