let btn = document.querySelector('#newquote');
let person = document.querySelector('.person');
let quote = document.querySelector('.quote');

const quotes = [
  {
    quote: ' “Confront the dark parts of yourself, and work to banish them with illumination and forgiveness. Your willingness to wrestle with your demons will cause your angels to sing.” ',
    person: 'August Wilson'
  }, {
    quote: ' “The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis.”',
    person: ' Dante Alighieri'
  }, {
    quote: ' “Put light against light – you have nothing. Put dark against dark – you have nothing. It’s the contrast of light and dark that each gives the other one meaning.” ',
    person: 'Bob Ross'
  }, {
    quote: '. “In a dark time, the eye begins to see.”',
    person: 'Cavett Robert'
  }, {
    quote: ' “We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.”',
    person: 'plato'
  }, {
    quote: '. “Only the person who has experienced light and darkness, war and peace, rise and fall, only that person has truly experienced life.”',
    person: 'Stefan Zweig'
  }, {
    quote: ' “Don’t underestimate the allure of darkness. Even the purest hearts are drawn to it.”',
    person: 'Klaus Mikaelson'
  }, {
    quote: '“Death must be so beautiful. To lie in the soft brown earth, with the grasses waving above one’s head, and listen to silence. To have no yesterday, and no tomorrow. To forget time, to forgive life, to be at peace.”',
    person: ' Oscar Wilde'
  }, {
    quote: '“Before my birth there was infinite time, and after my death, inexhaustible time. I never thought of it before: I’d been living luminously between two eternities of darkness.”',
    person: 'Orhan Pamuk'
  }, {
    quote: ' “People often believed they were safer in the light, thinking monsters only came out at night. But safety – like light – is a façade.” ',
    person: 'C.J. Roberts'
  }, {
    quote: ' “Death is nothing, but to live defeated and inglorious is to die daily.” ',
    person: 'Napoleon Bonaparte'
  }, {
    quote: '“I shut my eyes and all the world drops dead; I lift my eyes and all is born again.” ',
    person: 'Sylvia Plath'
  }, {
    quote: '“When you spend so long trapped in darkness, you find that the darkness begins to stare back.”',
    person: 'Sarah J. Maas'
  }, {
    quote: '“The secret of joy is the mastery of pain.”',
    person: 'Anais Nin'
  }, {
    quote: ' “Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.”',
    person: ' Khalil Gibran'
  }, {
    quote: '“We must embrace pain and burn it as fuel for our journey.”',
    person: ' Kenji Miyazawa'
  }, {
    quote: '“Maybe you have to know the darkness before you can appreciate the light.”',
    person: 'Madeline L’Engle'
  }, {
    quote: '"You must burn yourself in your own flame how can you rise as a new one if you have not yet become an ashes"',
    person: 'me'
  }
];



btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
