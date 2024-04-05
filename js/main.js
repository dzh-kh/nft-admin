const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".mobile-sidebar__close-btn");
const sidebarBtn = document.querySelector(".mobile-sidebar__open-btn");

//drawing a separation line while scrolling the sidebar

const onSidebarScroll = (e) => {
  if (e.target.scrollTop) {
    e.target.children[0].classList.add("overlapping");
  } else {
    e.target.children[0].classList.remove("overlapping");
  }
};

//mobile sidebar switching logic
sidebar.addEventListener("scroll", onSidebarScroll);

const onClick = (e) => {
  sidebar.classList.toggle("sidebar--open");
};

const onOutsideClick = (e) => {
  if (
    !e.target.closest(sidebar)
  ) {
    sidebar.classList.remove("sidebar--open");
  }
};

closeBtn.addEventListener("click", onClick);

sidebarBtn.addEventListener("click", onClick);

document.addEventListener("click", onOutsideClick);
