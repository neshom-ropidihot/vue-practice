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

                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>

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
                    <button @click="removeFromCart" 
                      >
                    Remove from cart
                    </button>                   

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
    }
  },
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariants].variantId);
    },
    updateProduct(index) {
      this.selectedVariants = index;
    },
    removeFromCart() {
      this.$emit('remove-from-cart');
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
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeItem() {
      this.cart = [];
    }
  }
});