let page = 1;
let isLoading = false;
let endOfData = false;

function fetchData() {
  if (endOfData || isLoading) {
    return;
  }

  isLoading = true;

  document.getElementById("loading-message").style.display = "block";

  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
    .then((response) => response.json())
    .then((data) => {
      const contentContainer = document.getElementById("content-container");
      if (data.length === 0) {
        endOfData = true;
      } else {
        data.forEach((item) => {
          const newItem = document.createElement("div");
          newItem.className = "post-item";
          newItem.textContent = `${item.id}. ${item.title}`;
          contentContainer.appendChild(newItem);
        });

        page++;
      }

      isLoading = false;
      document.getElementById("loading-message").style.display = "none";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      isLoading = false;
      document.getElementById("loading-message").style.display = "none";
    });
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    !isLoading
  ) {
    fetchData();
  }
});

fetchData();
