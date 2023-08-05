var app = new Vue({
  el: "#app",
  data: {
    product: "socks",
    image: "assets/green.jpg",
    inStock: true,
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage : 'assets/green.jpg',
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage : 'assets/blue.jpg',
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    cart : 0,
  },
  methods : {
    addToCart : function() {
      this.cart += 1; 
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
    removeFromCart() {
      if(this.cart) {
        this.cart -= 1;
      }
    }
  }
});
