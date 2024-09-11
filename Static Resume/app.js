// app.ts
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    var toggleButtons = document.querySelectorAll(".toggle-btn");
    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var sectionId = this.dataset.section;
            console.log("Button clicked for section:", sectionId);
            var section = document.getElementById(sectionId);
            if (section) {
                console.log("Section found:", section);
                if (section.style.display === "none") {
                    section.style.display = "block";
                    console.log("Section is now visible");
                }
                else {
                    section.style.display = "none";
                    console.log("Section is now hidden");
                }
            }
            else {
                console.log("Section not found");
            }
        });
    });
});
