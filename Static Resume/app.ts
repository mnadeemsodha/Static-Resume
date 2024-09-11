// app.ts
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const sectionId = (this as HTMLButtonElement).dataset.section;
            console.log("Button clicked for section:", sectionId);

            const section = document.getElementById(sectionId as string);
            if (section) {
                console.log("Section found:", section);

                if (section.style.display === "none") {
                    section.style.display = "block";
                    console.log("Section is now visible");
                } else {
                    section.style.display = "none";
                    console.log("Section is now hidden");
                }
            } else {
                console.log("Section not found");
            }
        });
    });
});
