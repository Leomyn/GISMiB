/* eslint-disable camelcase */
const image_input = document.querySelector("#image_input");
let uploaded_image = "";
// eslint-disable-next-line no-unused-vars
const descriptionInput = document.getElementById("descprition_input");
const upload_input = document.getElementById("upload_input");
let image = null;

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        console.log(reader.result);
        image = `url(${uploaded_image})`;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    // eslint-disable-next-line no-invalid-this
    reader.readAsDataURL(this.files[0]);
    // console.log(image_input.value);
});

upload_input.addEventListener("click", function createEntry() {
    entry = document.createElement("img");
    entry.style.backgroundImage = image;
    entry.classList.add("image-element");
    desc = document.createElement("div");
    desc.classList.add("description");
    document.getElementById("entry").appendChild(entry);
    document.getElementById("description_input").appendChild(desc);
    console.log(desc);
    console.log(entry);
    return;
});

