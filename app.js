window.addEventListener('load',() => {

	window.vue = new Vue ({
		el:'#app',
		name:'Cart',
		data:{
			isLoading : true,
			cart: [],
			saved: []
		},
		methods:{
			removeFromCart(index) {
				this.cart.splice(index,1);
			},
			saveForLater(index) {
				const item = this.cart.splice(index,1);
				this.saved.push(item[0]);
			},
			removeFromSavedList(index) {
				this.saved.splice(index,1);
			},
			moveToCart(index) {
				const item = this.saved.splice(index,1);
				this.cart.push(item[0]);
			}
		},
		created(){
			
			setTimeout(() => {
			fetch('./data.json')
			.then((res) => { return res.json()	})
			.then((res) => {
				this.isLoading = false;
				this.cart = res.cart;
				this.save = res.saved;
			})

		}, 2000);

		}

	})
})