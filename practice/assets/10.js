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

                   

                </div>
                <div>
              <p v-if="!reviews.length">There are no reviews yet.</p>
              <ul v-else>
                  <li v-for="(review, index) in reviews" :key="index">
                    <p>{{ review.name }}</p>
                    <p>Rating:{{ review.rating }}</p>
                    <p>{{ review.review }}</p>
                  </li>
              </ul>
          </div>
                  <product-review @review-submitted="addReview"></product-review>


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
      reviews :[]
    }
  },
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariants].variantId);
    },
    updateProduct(index) {
      this.selectedVariants = index;
    },
    addReview(productReview) {
          this.reviews.push(productReview)
    }
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
 
  Vue.component('product-review', {
    template: `
      <form class="review-form" @submit.prevent="onSubmit">
      
        <p class="error" v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name">
        </p>
        
        <p>
          <label for="review">Review:</label>      
          <textarea id="review" v-model="review"></textarea>
        </p>
        
        <p>
          <label for="rating">Rating:</label>
          <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </p>

         <p>Would you recommend this product?</p>
        <label>
          Yes
          <input type="radio" value="Yes" v-model="recommend"/>
        </label>
        <label>
          No
          <input type="radio" value="No" v-model="recommend"/>
        </label>
            
        <p>
          <input type="submit" value="Submit">  
        </p>    
      
    </form>
    `,
    data() {
      return {
        name: null,
        review: null,
        rating: null,
        recommend: null,
        errors: []
      }
    },
    methods: {
       onSubmit() {
        this.errors = []
        if(this.name && this.review && this.rating) {
          let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            recommend: this.recommend
          }
          this.$emit('review-submitted', productReview);
          this.name = null;
          this.review = null;
          this.rating = null;
          this.recommend = null;
        } else {
          if(!this.name) this.errors.push("Name required.");
          if(!this.review) this.errors.push("Review required.");
          if(!this.rating) this.errors.push("Rating required.");
          if(!this.recommend) this.errors.push("Recommendation required.")
        }
      }
    }
  })

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    }
  }
});