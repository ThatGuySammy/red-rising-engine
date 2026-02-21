const STORAGE_KEY = "rr_engine_state";

function defaultState() {
  return {
    turn: 0,
    phase: "Red Origin",
    rage: 0,
    hope: 50,
    log: []
  };
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : defaultState();
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function render(state) {
  document.getElementById("turn").textContent = state.turn;
  document.getElementById("phase").textContent = state.phase;
  document.getElementById("rage").textContent = state.rage;
  document.getElementById("hope").textContent = state.hope;
}

let state = loadState();
render(state);

document.getElementById("nextTurn").onclick = () => {
  state.turn += 1;
  state.rage += Math.floor(Math.random() * 3);
  state.hope += Math.floor(Math.random() * 2);
  state.log.push(`Turn ${state.turn} advanced.`);
  saveState(state);
  render(state);
};
