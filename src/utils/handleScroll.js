export const handleScroll = (event, id) => {
  event.preventDefault();
  const route = window.location.pathname;
  if(route === '/form') {
    window.location.replace('/#' + id)
    return
  }
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};