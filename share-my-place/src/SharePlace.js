class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("click", this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Your browser does not support the location feature, please use a more modern website or manually enter an address"
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        console.log(coordinates);
      },
      (error) => {
        alert(
          "Could not locate you unfortunately. Please enter the address manually"
        );
      }
    );
  }

  findAddressHandler() {}
}

new PlaceFinder();
