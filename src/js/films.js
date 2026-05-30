/* ------------------------------------------------------------------
   LEBIVEST — The Films
   Cinematic gallery: silent autoplay loops, but only while in view
   (saves battery + bandwidth).
------------------------------------------------------------------ */
const reduceMotion =
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function safePlay(video) {
  const p = video.play();
  if (p && typeof p.catch === "function") p.catch(() => {});
}

export function mountFilms(root = document) {
  const films = root.querySelectorAll("[data-film]");
  if (!films.length) return;

  // Lazy autoplay — play when on screen, pause when scrolled away.
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) safePlay(entry.target);
          else entry.target.pause();
        });
      },
      { threshold: 0.35 }
    );
    films.forEach((video) => io.observe(video));
  } else {
    // Reduced motion / no observer support: expose native controls instead.
    films.forEach((video) => {
      video.removeAttribute("autoplay");
      video.setAttribute("controls", "");
    });
  }
}
