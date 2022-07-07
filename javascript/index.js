const demo = document.getElementById('featured-speakers');

const arrProject = [
  {
    image:
      'images/merlin_172182855_00e3e9db-4891-42c4-8cde-b9a60edd582f-mobileMasterAt3x.jpg',
    name: 'Tom Bray',
    devInfo: 'Software Developer, co-author of the original XML specification',
    description:
      'He worked for Amazon Web Services from December 2014 until May 2020 when he quit due to concerns.',
  },

  {
    image: 'images/daneil.jpg',
    name: 'Daniel Ek',
    devInfo: 'Software Developer, Entrepreneur',
    description:
      'Swedish billionaire entrepreneur and technologist. He is the co-founder and CEO of music streaming service Spotify',
  },

  {
    image: 'images/Buchheit.jpg',
    name: 'Paul Buchheit',
    devInfo: 'Software Engineer, co-author of the original XML specification',
    description:
      'He developed the original prototype of Google AdSense as part of his work on Gmail',
  },

  {
    image: 'images/max-lechvin.jpeg',
    name: 'Max Lechvin',
    devInfo: 'Software Developer,Entrepreneur',
    description:
      'Ukrainian-American software engineer and businessman. In 1998, he co-founded the company that eventually became PayPal.',
  },

  {
    image: 'images/cutleronxbox.png',
    name: 'Dave Cutler',
    devInfo: 'Software Developer',
    description:
      "He developed several computer operating systems, namely Microsoft's Windows NT, and Digital Equipment Corporation's RSX-11M, VAXELN, and VMS",
  },

  {
    image: 'images/elon.jpg',
    name: 'Elon Musk',
    devInfo: 'Software Developer',
    description: 'Owner Of Tesla',
  },
];

function addProjects(n) {
  const { name, devInfo, description, image } = arrProject[n];

  demo.innerHTML += `
        <div class="speaker-info">
          <img
            class="speaker-img"
            alt=""
            src=${image}
          />
          <div class="info-1">
            <span class="name">${name}</span>
            <br />
            <span class="info-subheading">
              ${devInfo}
            </span>
            <hr />
            <br />

            <p class="speaker-work">
              ${description}
            </p>
          </div>
        </div>
  `;
}

for (let i = 0; i < arrProject.length; i += 1) {
  addProjects(i);
}
