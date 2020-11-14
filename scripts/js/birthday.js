function round1Dp(val) {
    return Math.round(val * 10) / 10;
  }

  window.onload = function () {
    // months in JS are zero indexed
    const birthdayWillow = new Date(2020, 7, 16);
    const today = new Date();
    console.log("willow birthday: ", birthdayWillow);
    console.log("today: ", today);
    // hours*minutes*seconds*milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.abs(
      (today.getTime() - birthdayWillow.getTime()) / oneDay
    );
    const roughDays = round1Dp(diffDays);
    const roughMonths = round1Dp(diffDays / 30);
    const roughYears = round1Dp(diffDays / 365);
    document.getElementById(
      "willow-birthday"
    ).innerHTML = birthdayWillow.toLocaleDateString();
    document.getElementById("total-days").innerHTML = roughDays;
    document.getElementById("total-months").innerHTML = roughMonths;
    document.getElementById("total-years").innerHTML = roughYears;
  };