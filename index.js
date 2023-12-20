function updateSliderValue(value) {
    // Update the displayed percentage
    document.getElementById("sliderValue").innerText = value + "%";
  }
function print_all() {
    // Getting the form data
    form = document.getElementById('forms');
    form_values = new FormData(form);
    // Printing the form data
    form_values.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  }
