
function toggleSection(sectionId) {
const sections = document.querySelectorAll('.toggle-section');
sections.forEach(section => {
    if (section.id === sectionId) {
    section.style.display = "block";
    } else {
    section.style.display = "none";
    }
});
}
  