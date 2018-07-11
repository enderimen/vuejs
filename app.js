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
			}
		},
		created(){
			
			//setTimeout(() => {
			fetch('./data.json')
			.then((res) => { return res.json()	})
			.then((res) => {
				this.isLoading = false;
				this.cart = res.cart;
				this.save = res.saved;
			})

		//}, 2000);

		}

	})
})