/* eslint-disable camelcase */
const image_input = document.querySelector("#image_input");
let uploaded_image = "";

// eslint-disable-next-line no-unused-vars
const descriptionInput = document.getElementById("descprition_input");

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    // eslint-disable-next-line no-invalid-this
    reader.readAsDataURL(this.files[0]);
    console.log(image_input.value);
});

/* upload_input.addEventListener("click",enterEvent);

 function createEntry(){
    entry = document.createElement("eintrag");
    let image = uploaded_image.src;
    const description = descriptionInput.value;
};
*/