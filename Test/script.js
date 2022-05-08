const image_input = document.querySelector("#image_input");
// eslint-disable-next-line no-var
var uploaded_image = "";
// const description_input = document.getElementById("description-input");

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