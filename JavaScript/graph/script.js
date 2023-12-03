const graphWidths = {
  button1: 0,
  button2: 0,
  button3: 0,
};

function increaseValue(button) {
  graphWidths[button] += 5;
  updateGraph(button);
}

function resetGraphs() {
  graphWidths.button1 = 0;
  graphWidths.button2 = 0;
  graphWidths.button3 = 0;
  updateGraph("button1");
  updateGraph("button2");
  updateGraph("button3");
}

function updateGraph(button) {
  const graph = document.getElementById(`graph-${button}`);
  graph.style.width = graphWidths[button] * 20 + "px";
}
