/* INTRO */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").classList.add("hide");
  }, 2200);
});

/* SKILLS */
const bars = document.querySelectorAll(".bar");
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const level = entry.target.dataset.level;
      entry.target.querySelector(".fill").style.width = level + "%";
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
bars.forEach(bar => skillObserver.observe(bar));

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
reveals.forEach(el => revealObserver.observe(el));

/* PROJECT MODAL */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
