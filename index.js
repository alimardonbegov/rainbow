var image = [
  "url('https://media3.giphy.com/media/3oEduFsHnm570eb3G0/giphy.gif?cid=ecf05e47z0jy9nsy5gku2e6rrvtz6hgbii5ybt1iu0nvml0h&rid=giphy.gif&ct=g')",
  "url('https://media3.giphy.com/media/CSbIZi52DvqnJPm1WA/giphy.gif?cid=ecf05e47gqn1fv30bxfo1bqva5szkvaondtjtw7926m2w5mr&rid=giphy.gif&ct=g')",
  "url('https://media1.giphy.com/media/xThuWcaa4U4XZQDgvm/giphy.gif?cid=790b7611e620cc0922a8a4522a574f1f71eca69561d5e569&rid=giphy.gif&ct=g')",
  "url('https://media.giphy.com/media/kaGnuqqXc4zX0XHd1o/giphy.gif')",
  "url('https://media.giphy.com/media/dxffQ1gQTtX59UTINJ/giphy.gif')",
  "url('https://media.giphy.com/media/S3oAaB2MAr7Th7Lczr/giphy.gif')",
  "url('https://media.giphy.com/media/26AHG5KGFxSkUWw1i/giphy.gif')",
  "url('https://media.giphy.com/media/143mJNJBPGuQxy/giphy.gif')",
  "url('https://media.giphy.com/media/l0HlNHAeMZPIp5peg/giphy.gif')",
  "url('https://media.giphy.com/media/ZcKDWNzkQ9tOsV9LXp/giphy.gif')",
];

document
  .querySelector("button")
  .addEventListener("click", function changeBackround() {
    var randomImageNumber = Math.floor(Math.random() * image.length);
    console.log(randomImageNumber);
    document.body.style.backgroundImage = image[randomImageNumber];
  });
