const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};

// solution 1
const printCard = function() {
  console.log(this.frontContent);
  console.log(this.insideContent);

  // console.log("Debbug Before forEach: " + this);
  this.signatories.forEach(function (signatory) {
    // console.log("Debug Inside: " +this);
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  }, this);
};

printCard.call(messageConfig);

//solution 2

// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   const outerContet = this;

//   this.signatories.forEach(function (signatory) {
//     const message = `${outerContext.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   })
// }

// printCard.call(messageConfig);