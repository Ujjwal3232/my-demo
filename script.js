document.addEventListener("DOMContentLoaded", function () {
    const category = document.getElementById("category");
    const subCategory = document.getElementById("sub-category");

    const subCategories = {
        beginner: {
            label: "Select Language",
            options: ["Python", "C", "Java","C++"]
        },
        intermediate: {
            label: "Select UI Framework",
            options: ["React", "Angular", "Vue.js"]
        },
        advanced: {
            label: "Select Field",
            options: ["Machine Learning", "Cybersecurity", "Competitive Programming"]
        }
    };

    category.addEventListener("change", function () {
        subCategory.innerHTML = `<option value="">${category.value ? subCategories[category.value].label : "Select Option"}</option>`;
        subCategory.disabled = !category.value;

        if (category.value) {
            subCategories[category.value].options.forEach(sub => {
                const option = document.createElement("option");
                option.value = sub.toLowerCase().replace(/\s+/g, "-");
                option.textContent = sub;
                subCategory.appendChild(option);
            });
        }
    });
});

