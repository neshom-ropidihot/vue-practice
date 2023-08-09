var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "socks",
    // image: "assets/green.jpg",
    selectedVariants: 0,
    // inStock: true,
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "assets/green.jpg",
        variantQuantity: 10     
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "assets/blue.jpg",
        variantQuantity: 0
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariants = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariants].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariants].variantQuantity;
    }
  },
});
