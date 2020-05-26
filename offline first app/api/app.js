class People {
  constructor(cell, email, location, name, phone, picture, gender) {
    this.cell = cell;
    this.email = email;
    this.location = location;
    this.name = name;
    this.phone = phone;
    this.picture = picture;
    this.gender = gender;
  }
}
const page = document.querySelector(`body`);
const person1 = [];
const promise = [];

for (let x = 0; x < 10; x++) {
  promise.push(fetch(`https://randomuser.me/api/`));
}

Promise.all(promise)
  .then((res) => Promise.all(res.map((ele) => ele.json())))
  .then((res) => res.map((ele) => ele.results[0]))
  .then((ele) => {
    ele.forEach((ele1) =>
      person1.push(
        new People(
          ele1.cell,
          ele1.email,
          ele1.location,
          ele1.name,
          ele1.phone,
          ele1.picture,
          ele1.gender
        )
      )
    );

    for (person of person1) {
      console.log(person);
      page.insertAdjacentHTML(
        `afterbegin`,
        `
<div class="card">
      <div class="details">
        <div class="user_photo horizontal_center" id="user_photo">
          
          <img src="${person.picture.large}" />
        </div>
        <p id="user_title">Hi, My name is</p>
        <p id="user_value">${person.name.title} ${person.name.first} ${person.name.last}</p>
      </div>
      <ul class="vaslues_list horizontal_center" id="values_list">
        <li
          data-title="Hi, My name is"
          data-value="Dawn Terry"
          data-label="name"
          class="active"
        >Hi, My name is: ${person.name.first} ${person.name.last}</li>
        <li
          data-title="My email address is"
          data-value="dawn.terry@example.com"
          data-label="email"
          data-caps="false"
        >My email address is: ${person.email}</li>
        <li
          data-title="My birthday is"
          data-value="1/2/1974"
          data-label="birthday"
        >My birthday is: ${person.email}</li>
        <li
          data-title="My address is"
          data-value="2169 Marsh Ln"
          data-label="location"
        >My address is: ${person.location["city"]} ${person.location["country"]} ${person.location["state"]}</li>
        <li
          data-title="My phone number is"
          data-value="(015)-251-6147"
          data-label="phone"
        >My phone number is: ${person.cell}</li>
        <li
          data-title="My password is"
          data-value="enrique"
          data-label="pass"
          data-caps="false"
        >My password is: ${person.email}</li>
      </ul>
    </div>
`
      );
    }
  });

