Vue.component('product-details', {
  template:`<ul><li v-for="detail in details"> {{detail}}</li></ul>`,
  props: {
    details : {
     type: Array,
    required: true
    }
  }
});
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
      default: 'hi',
    },
  },
  template: `
  <div class="product">

                <div class="product-image">
                <img :src="image" />
                </div>

                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{ shipping }}

                   <product-details :details="details"></product-details>

                    <!-- <div v-for="variant in variants" :key="variant.variantId" 
                    class="color-box" :style="{'background-color':variant.variantColor}"
                    @mouseover="updateProduct(variant.variantImage)">
                    </div> -->
                    <div v-for="(variant, index) in variants" :key="variant.variantId" 
                    class="color-box" :style="{backgroundColor:variant.variantColor}"
                    @mouseover="updateProduct(index)">
                    </div>

                    <!-- <button v-on:click="cart+=1">Add to cart</button> -->
                    <button :disabled="!inStock" :class="{disabledButton:!inStock}" @click="addToCart()">Add to cart</button>

                    <div class="cart">
                        <p>Cart({{ cart }})</p>
                    </div>

                </div>
                
            </div>
            `,
  data() {
    return {
      brand: "Vue Mastery",
      product: "socks",
      // image: "assets/green.jpg",
      selectedVariants: 0,
      // inStock: true,
      inventory: 100,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [{
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
    }
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
    },
    shipping() {
      if(this.premium) {
        return 'Free'
      }
      return 2.99
    },
  },
});
var app = new Vue({
  el: "#app",
  data: {
    premium: true,

  }
});