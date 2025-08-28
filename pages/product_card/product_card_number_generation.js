var resultСounter = 0;

document.addEventListener("DOMContentLoaded", function () {
  setCounterValue(resultСounter);

  document.getElementById("number-plus").onclick = function () {
    setCounterValue(++resultСounter);
  };

  document.getElementById("number-minus").onclick = function () {
    setCounterValue(--resultСounter);
  };
});
function setCounterValue(value) {
  document.getElementById("result").innerHTML = value;
  document.getElementById("number-minus").disabled = value <= 0;
  document.getElementById("number-plus").disabled = value >= 10;
}
