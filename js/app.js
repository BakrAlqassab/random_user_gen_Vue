const app = Vue.createApp({
//   template: "<h1> Hello {{firstName}}</h1>",
  data() {
    return {
        firstName:'Bakr',
        lastName:'Al-Qassab',
        email:'bakr@gmail.com',
        gender:'male',
        picture:'https://john-darke.co.uk/wp-content/uploads/2019/04/male-image.jpg'
    };
  },
});

app.mount("#app");
