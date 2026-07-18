const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];

function activate(id, focus = false, updateHash = true) {
  const target = tabs.find((tab) => tab.dataset.tab === id) || tabs[0];
  tabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab === target)));
  panels.forEach((panel) => { panel.hidden = panel.dataset.panel !== target.dataset.tab; });
  if (updateHash) history.replaceState(null, '', `#${target.dataset.tab}`);
  if (focus) target.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activate(tab.dataset.tab));
  tab.addEventListener('keydown', (event) => {
    const keys = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    activate(tabs[(keys[event.key] + tabs.length) % tabs.length].dataset.tab, true);
  });
});

window.addEventListener('hashchange', () => activate(location.hash.slice(1), false, false));
activate(location.hash.slice(1), false, Boolean(location.hash));
