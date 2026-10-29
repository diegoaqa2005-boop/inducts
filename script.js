const rows = [
["Argentina","ARG",2020,45.38,0.0097,385.5,-0.099,75.9,0.115],
["Argentina","ARG",2021,45.81,0.0095,487.2,0.107,75.4,0.088],
["Argentina","ARG",2022,46.23,0.0092,631.1,0.050,76.1,0.068],
["Argentina","ARG",2023,46.44,0.0085,621.8,-0.016,76.5,0.061],
["Argentina","ARG",2024,46.65,0.0081,604.4,-0.035,76.8,0.076],
["Bolivia","BOL",2020,11.78,0.0141,36.7,-0.088,64.5,0.079],
["Bolivia","BOL",2021,11.93,0.0138,40.4,0.061,63.6,0.052],
["Bolivia","BOL",2022,12.08,0.0136,44.3,0.036,64.9,0.043],
["Bolivia","BOL",2023,12.23,0.0135,45.8,0.031,65.4,0.040],
["Bolivia","BOL",2024,12.39,0.0134,47.1,0.025,65.8,0.039],
["Brasil","BRA",2020,213.20,0.0065,1476.1,-0.033,74.0,0.138],
["Brasil","BRA",2021,214.33,0.0053,1649.6,0.048,72.8,0.132],
["Brasil","BRA",2022,215.31,0.0046,1920.1,0.030,73.4,0.093],
["Brasil","BRA",2023,215.89,0.0045,2173.7,0.029,74.2,0.078],
["Brasil","BRA",2024,216.42,0.0045,2210.0,0.028,74.6,0.071],
["Chile","CHL",2020,19.30,0.0092,254.1,-0.061,79.4,0.107],
["Chile","CHL",2021,19.46,0.0083,316.8,0.113,78.9,0.089],
["Chile","CHL",2022,19.60,0.0072,301.0,0.021,79.5,0.079],
["Chile","CHL",2023,19.62,0.0045,335.5,0.002,80.1,0.087],
["Chile","CHL",2024,19.63,0.0038,345.0,0.023,80.4,0.085],
["Colombia","COL",2020,50.93,0.0119,270.4,-0.072,74.8,0.159],
["Colombia","COL",2021,51.52,0.0115,318.5,0.108,72.8,0.138],
["Colombia","COL",2022,51.87,0.0108,343.8,0.073,73.7,0.112],
["Colombia","COL",2023,52.32,0.0090,363.5,0.006,74.6,0.102],
["Colombia","COL",2024,52.70,0.0082,386.0,0.016,75.1,0.098],
["Ecuador","ECU",2020,17.59,0.0145,99.3,-0.078,73.7,0.061],
["Ecuador","ECU",2021,17.80,0.0138,106.2,0.042,72.2,0.048],
["Ecuador","ECU",2022,18.00,0.0125,115.0,0.062,73.6,0.038],
["Ecuador","ECU",2023,18.10,0.0118,118.8,0.024,74.3,0.036],
["Ecuador","ECU",2024,18.19,0.0115,121.5,0.012,74.8,0.037],
["Paraguay","PRY",2020,6.62,0.0132,35.4,-0.008,73.2,0.076],
["Paraguay","PRY",2021,6.70,0.0128,40.0,0.040,70.3,0.068],
["Paraguay","PRY",2022,6.78,0.0122,41.7,0.002,71.8,0.067],
["Paraguay","PRY",2023,6.82,0.0119,43.0,0.047,72.5,0.060],
["Paraguay","PRY",2024,6.86,0.0118,45.2,0.038,73.0,0.057],
["Perú","PER",2020,33.36,0.0142,206.2,-0.110,73.7,0.130],
["Perú","PER",2021,33.72,0.0135,225.9,0.134,72.4,0.108],
["Perú","PER",2022,34.05,0.0115,242.6,0.027,73.4,0.078],
["Perú","PER",2023,34.20,0.0105,267.6,-0.006,74.2,0.070],
["Perú","PER",2024,34.35,0.0102,282.5,0.031,74.7,0.065],
["Uruguay","URY",2020,3.43,0.0008,53.7,-0.063,78.4,0.104],
["Uruguay","URY",2021,3.43,0.0005,61.4,0.053,75.4,0.093],
["Uruguay","URY",2022,3.42,-0.0002,71.2,0.047,78.0,0.079],
["Uruguay","URY",2023,3.42,0.0005,77.2,0.004,78.5,0.081],
["Uruguay","URY",2024,3.42,0.0012,80.5,0.032,78.8,0.078],
["Venezuela","VEN",2020,28.20,-0.0085,47.3,-0.300,71.1,0.091],
["Venezuela","VEN",2021,28.52,0.0112,50.5,0.010,70.6,0.088],
["Venezuela","VEN",2022,28.84,0.0114,58.2,0.080,71.1,0.085],
["Venezuela","VEN",2023,29.12,0.0125,62.0,0.040,71.5,0.082],
["Venezuela","VEN",2024,29.40,0.0145,65.5,0.042,71.8,0.080]
].map(r=>({country:r[0],iso:r[1],year:r[2],population:r[3],populationGrowth:r[4],gdp:r[5],gdpGrowth:r[6],life:r[7],unemployment:r[8],informality:r[8]}));
// El PDF contiene una tabla con columnas potencialmente desalineadas en la extracción de texto.
// Se conservan los valores visibles; la columna final se muestra como valor de la tabla y requiere validación.
const metricInfo = {
 population:{label:"Población",unit:"millones de habitantes",factor:1,format:v=>v.toFixed(2),explanation:"La población compara el tamaño de los países. No mide por sí sola el bienestar ni la calidad de vida."},
 populationGrowth:{label:"Crecimiento poblacional",unit:"porcentaje (%)",factor:100,format:v=>(v*100).toFixed(2)+"%",explanation:"Un valor positivo indica aumento de población y uno negativo, disminución. Aquí los datos decimales se convierten a porcentaje."},
 gdpGrowth:{label:"Crecimiento real del PIB",unit:"porcentaje (%)",factor:100,format:v=>(v*100).toFixed(1)+"%",explanation:"Por encima de cero indica crecimiento de la producción; por debajo de cero indica contracción. No explica por sí solo cómo se distribuyen los ingresos."},
 life:{label:"Esperanza de vida",unit:"años",factor:1,format:v=>v.toFixed(1),explanation:"Es una estimación estadística de vida promedio bajo las condiciones del periodo, no una predicción individual."},
 unemployment:{label:"Desempleo (valor de la tabla)",unit:"valor convertido a porcentaje",factor:100,format:v=>(v*100).toFixed(1)+"%",explanation:"Los datos del PDF aparecen como decimales. Se multiplican por 100 para mostrar el porcentaje; conviene confirmar la definición y columna en el Excel original."},
 informality:{label:"Informalidad laboral (valor de la tabla)",unit:"valor convertido a porcentaje",factor:100,format:v=>(v*100).toFixed(1)+"%",explanation:"Se muestra el valor disponible en la última columna numérica del PDF como una referencia provisional. Verifica la columna de informalidad en el Excel original antes de usarla."}
};
let mainChart, trendChart;
const $ = id => document.getElementById(id);
function dataForYear(year){return rows.filter(r=>r.year===Number(year));}
function selectedMetric(){return $("metricSelect").value;}
function valueFor(row,metric){return row[metric];}
function makeMainChart(){
  const metric=selectedMetric(), year=$("yearSelect").value, info=metricInfo[metric];
  const yearRows=dataForYear(year).sort((a,b)=>valueFor(b,metric)-valueFor(a,metric));
  const labels=yearRows.map(r=>r.country);
  const values=yearRows.map(r=>valueFor(r,metric)*info.factor);
  const selected=$("countrySelect").value;
  const bg=yearRows.map(r=>r.country===selected?"#087e8b":"#b9d6dc");
  if(mainChart) mainChart.destroy();
  mainChart=new Chart($("mainChart"),{
    type:"bar",
    data:{labels,datasets:[{label:info.label,data:values,backgroundColor:bg,borderRadius:6,borderSkipped:false}]},
    options:{responsive:true,maintainAspectRatio:false,indexAxis:"y",
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>` ${info.format(valueFor(yearRows[ctx.dataIndex],metric))}`}}},
      scales:{x:{grid:{color:"#e8eef2"},ticks:{callback:v=>metric==="population"?v: v}},y:{grid:{display:false}}},
      animation:{duration:350}
    }
  });
  $("chartTitle").textContent=`${info.label} por país`;
  $("chartSubtitle").textContent=`Año ${year} · ${info.unit}`;
  $("chartExplanation").textContent=info.explanation;
}
function makeTrendChart(){
  const metric=selectedMetric(), country=$("countrySelect").value, info=metricInfo[metric];
  const countryRows=rows.filter(r=>r.country===country).sort((a,b)=>a.year-b.year);
  if(trendChart) trendChart.destroy();
  trendChart=new Chart($("trendChart"),{
    type:"line",
    data:{labels:countryRows.map(r=>r.year),datasets:[{label:info.label,data:countryRows.map(r=>valueFor(r,metric)*info.factor),borderColor:"#087e8b",backgroundColor:"rgba(8,126,139,.13)",fill:true,tension:.28,pointRadius:5,pointHoverRadius:7}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>` ${info.format(countryRows[ctx.dataIndex][metric])}`}}},
      scales:{x:{grid:{display:false}},y:{grid:{color:"#e8eef2"}}}}
  });
  $("trendSubtitle").textContent=`${country}, 2020–2024 · ${info.unit}`;
}
function renderTable(){
 const year=$("yearSelect").value;
 $("dataTable").innerHTML=dataForYear(year).map(r=>`<tr>
 <td><strong>${r.country}</strong></td><td>${r.population.toFixed(2)}</td>
 <td>${(r.populationGrowth*100).toFixed(2)}%</td><td>${(r.gdpGrowth*100).toFixed(1)}%</td>
 <td>${r.life.toFixed(1)} años</td><td>${(r.unemployment*100).toFixed(1)}%</td>
 <td>${(r.informality*100).toFixed(1)}%*</td></tr>`).join("");
}
function update(){makeMainChart();makeTrendChart();renderTable();}
["metricSelect","yearSelect","countrySelect"].forEach(id=>$(id).addEventListener("change",update));
update();
