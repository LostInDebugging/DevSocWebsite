document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tabcolumn button");
    const paragraphs = document.querySelectorAll(".infotext p");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("contains_data");

            paragraphs.forEach(p => p.style.display = "none");

            const targetParagraph = document.getElementById(targetId);
            if (targetParagraph) {
                targetParagraph.style.display = "block";
            }
        });
    });

    paragraphs.forEach(p => p.style.display = "none");
    document.getElementById("intro").style.display = "block";
});
