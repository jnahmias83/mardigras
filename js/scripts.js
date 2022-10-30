let sponsors = [
  {
    image: "walkons-logo.svg",
    title: "GAME DAY WITH A TASTE OF LOUISIANA",
    description:
      "There’s really no better way to describe the uniqueness of Walk-On’s Sports Bistreaux. We start every dish from scratch and use fresh ingredients to bring our mouthwatering, Cajun cuisine to life. And whether you’re here for dinner with the family, date night, cocktails with the girls or to watch a game on the big screen, we’re always happy to share our Louisiana culture with you.",
    url: "https://walk-ons.com/",
  },
  {
    image: "si_logo_L.webp",
    title: "Immerse yourself in style at our French Quarter hotel",
    description:
      "Brimming with style and grounded in our community, Sheraton New Orleans Hotel is the perfect home base for your downtown escape. Located on Canal Street, our hotel is steps from the buzz of the French Quarter, and also offers seamless access to notable NOLA points of interest including the Ernest N. Morial Convention Center, Caesars Superdome and Smoothie King Center. Relax in our refined guest rooms... ",
    url: "https://www.marriott.fr/hotels/travel/msyis-sheraton-new-orleans-hotel/",
  },
  {
    image: "ace-hotel-logo.png",
    title:
      "A stone’s throw from the French Quarter, in the soul of the Deep South.",
    description:
      "In 2016, Ace added another link to its chain of ultracool hotels when it opened an outpost in a renovated 1928 building in the Central Business District of New Orleans. While the Ace employees here are just as edgy as their counterparts elsewhere, they temper that cool with the warm ease of New Orleans’s locals.",
    url: "https://acehotel.com/blog/",
  },
  {
    image: "ritz-carlton-primary-black.png",
    title:
      "WITHIN A HISTORIC BEAUX ARTS BUILDING IN NEW ORLEANS’ FRENCH QUARTER, A HOTEL OFFERS LUXURY WITH A LOCAL TOUCH.",
    description:
      "Rich in history and personality, New Orleans is unlike any other US city. Honoring its spirit and elegance, The Ritz-Carlton, New Orleans invites visitors to its French Quarter retreat, set within a 1908 Beaux Arts building. Here, one can bask in the silence of the hotel’s beautiful courtyard, experience the mysticism of the city through the spa’s Voodoo Ritual or learn how to play the trumpet with in-house jazz musician Jeremy Davenport.",
    url: "https://www.ritzcarlton.com/en/hotels/new-orleans",
  },
  {
    image: "premium-parking.png",
    title: "New Orleans Parking",
    description:
      "Whether you are a resident of New Orleans or just passing through, Premium Parking is a great place to park and we will always have a space for you. <br/><br/> Welcome to the Big Easy! We know there is so much to do and so many places to go to in New Orleans. Through our website, you can search popular destinations and book your parking in advance. We want you to enjoy your time in the city and not worry about parking.",
    url: "https://www.premiumparking.com/city/new-orleans",
  },
  {
    image: "LCM_Color-Logo_Horizontal.webp",
    title:
      "When you make a child's potential visible, wonderful things happen.",
    description:
      "Louisiana Children's Museum has cleaning and safety procedures throughout our museum that protect the health and well-being of our guests, volunteers, and staff members. <br/><br/> Review our most up-to-date guidelines by following the link below.",
    url: "https://lcm.org/",
  },
  {
    image: "mod-hdr3.jpg",
    title:
      "The city of New Orleans has dropped their mask mandate, therefore wearing a face mask inside the Museum of Death is optional, but still recommended.",
    description:
      "We would like to take this opportunity to thank all of the visitors that we’ve had for your undying support over the last 25+ years. Your questions, comments, and even emotional outbursts have kept us above ground and entertained throughout the Museum’s history and we can’t wait to surprise you all with a spectacular new experience which will shock and amaze you all over again! Until we see you on the other side keep having great lives and thank you again for the continued support!",
    url: "http://www.museumofdeath.net/mod-hollywood-is-moving",
  },
  {
    image: "haunted-museum-logo.png",
    title: "Tour the Haunted Museum in Las Vegas",
    description:
      "oin us for a spirited adventure through Zak Bagans’ The Haunted Museum in Las Vegas, as seen on the Travel Channel’s Ghost Adventures! See original collectibles from haunted sites and hear the bone-chilling stories of the paranormal activity that surrounds them. This isn’t your average haunted house in Las Vegas; this is the go-to destination for paranormal enthusiasts and ghost hunters wanting to see pieces from the “Demon House,” Dr. Kevorkian’s death van, and even the Dybbuk Box. Come take a tour of the Haunted Museum!",
    url: "https://thehauntedmuseum.com/",
  },
];

function showSponsor(index) {
  let width = 'width:200px';

  if(index === 4)
    width = 'width:80px';

  document.getElementById("exampleModalLabel").innerHTML =
    sponsors[index].title;
  document.getElementById(
    "modal-body"
  ).innerHTML = `<div style='display:flex;justify-content:center;' class='container'><img style='${width}' src='images/${sponsors[index].image}'/></div><p style="margin-top:1rem;">${sponsors[index].description}</p><a style="float:right;" href="${sponsors[index].url}" target="_blank">>>See website</a>`;
}

let images = [
  "New_Orleans_Mardi_Gras_2.webp",
  "Mardi_Gras_New_Orleans_3.jpg",
  "Mardi+Gras+Big+Pic.jpg",
  "Mardi-Gras-Zulu-2017-177-1-768x480.jpg",
  "Mardi_Gras_New_Orleans_4.jpg",
  "flatten.webp",
  "images.jfif",
  "new-orleans-mardi-gras-colors.jpg",
  "home-header1.jpg.pagespeed.ce.WQQjjRhEG-.jpg",
];

function showImage(index) {
  document.getElementById(
    "modal-body-img"
  ).innerHTML = `<img id='modal-img' style='object-fit:cover;' src='images/${images[index]}'/>`;
}

function checkData(e) {
  e.preventDefault();
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (firstname == "" || lastname == "" || email == "" || message == "") {
    alert("Please to fill all the fields!");
  } else if (email.indexOf("@") === -1) {
    alert("Invalid email!");
  } else document.getElementById("form-id").submit();
}

let good_answers = [1, 3, 4, 1, 3, 1, 1, 1, 4, 1];
let grade = 0;

function checkAnswers(e) {
  e.preventDefault();

  let filled = true;

  for (let i = 0; i < good_answers.length; i++) {
    let index = i + 1;

    let opt = $("#ans_question_" + index + ":checked").attr("value");

    if (opt != 1 && opt != 2 && opt != 3 && opt != 4) {
      filled = false;
      break;
    }
  }

  if (!filled) alert("Please answer to all the questions!");
  else {
    for (let i = 0; i < good_answers.length; i++) {
      let index = i + 1;
      if (
        Number($("#ans_question_" + index + ":checked").val()) ===
        good_answers[i]
      ) {
        grade += 10;

        $("#good_ans_" + index).html(
          `<i class='fa-solid fa-check' style='color:#8cbf3f;font-size:40px;'></i>`
        );
      }
    }
    $("#trivia-result").append(grade);
  }
}

function resetTrivia(e) {
  e.preventDefault;

  grade = 0;

  $("#trivia-result").html("Your grade is: ");

  for (let i = 0; i < good_answers.length; i++) {
    let index = i + 1;
    $("input:radio[name='ans_question_"+index+"']").each(function (i) {
      this.checked = false;
    });

    $("#good_ans_" + index).empty();
  }
}
