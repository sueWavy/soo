// do something!

const class_name = "star-rating-container";
const css_theme = "star-rating/theme.css";

const loadStyle = (href) => {
  if (document.querySelector(`link[href="${href}"]`)) return;

  const $link = document.createElement("link");
  $link.href = href;
  $link.rel = "stylesheet";

  const $lastLink = document.createElement("link:last-of-type");
  document.head.insertBefore($link, $lastLink.nextElementSibling);
};

const render = ($container) => {
  const { maxRating = 5 } = $container.dataset;

  if (maxRating === "0") {
    throw new Error(`최소 max는 1 이상!`);
  }

  $container.innerHTML = `
  <div class=${class_name}>
    ${Array.from(
      { length: maxRating },
      (_, i) => `<i class="bx bxs-star" data-value="${i + 1}"></i>`
    ).join("")} 
  </div>
  `;
};

const StarRating = ($container) => {
  loadStyle(css_theme);
  render($container);

  const $stars = [...$container.querySelectorAll("i")];

  $container.onmouseover = ({ target }) => {
    if (!target.matches("i")) {
      return;
    }

    const { value } = target.dataset;

    $stars.forEach(($star, index) => {
      $star.classList.toggle("hovered", index < value ? true : false);
    });
  };

  $container.onmouseover = () => {
    $stars.forEach(($star) => {
      $star.classList.remove("hovered");
    });
  };

  $container.onclick = ({ target }) => {
    if (!target.matches("i")) {
      return;
    }

    const { value } = target.dataset;

    $stars.forEach(($star, i) => {
      $star.classList.toggle("selected", i < value);
    });

    $container.dispatchEvent(
      new CustomEvent("rating-change", {
        detail: value,
        bubbles: true,
      })
    );
  };
};

export default StarRating;
