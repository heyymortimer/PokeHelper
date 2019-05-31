new Vue({
    el: '#app', 
    data() {
        return {
            url: 'https://pokeapi.co/api/v2/pokemon/',
            pokeName: '',
            first: true,
            pokeList: [],
            seen: true,
            poke: {
                name: '',
                id: '',
                imgNormal: '', 
                imgShiny: '',
                types: [],
                stats: []
            },
      }
    }, 
    methods: {
        clearPokes() {
            let vm = this
            vm.poke = { name: '', id: '', imgNormal: '', imgShiny: '', types: [], stats: [] }
        },
        fixPoke(pokeName) {
            let vm = this
            vm.clearPokes()
            vm.callPoke(pokeName)
        },
        callPoke(pokeName) {
            let vm = this
            pokeName = pokeName.toString().toLowerCase()
            axios.get(vm.url + pokeName)
            .then(function (response) {
                vm.poke.name = response.name
                vm.poke.id = response.id
                vm.poke.imgNormal = response.sprites.front_default
                vm.poke.imgShiny = response.sprites.front_shiny
                for(var i = 0; i < response.types.length; i++) {
                    vm.poke.types.push(response.types[i].type.name.toUpperCase())
                }
                for(var i = 0; i < response.stats.length; i++) {
                    vm.poke.stats.push(response.stats[i].base_stat)
                }
                vm.savePoke.push(vm.poke)
                  console.log(response.stats.length);
            })
        }, clearField() {
            let vm = this
            vm.pokeName = ''
        }, 
        addToFavourites() {
            let vm = this
            vm.pokeList.push(
                vm.poke.name.toUpperCase()
            )
            console.log(vm.pokeList[0]);
            vm.$emit('updateList', vm.pokeList)
        },
        deleteFave(index) {
            this.$delete(this.pokeList, index)
        },
    }, created() {
        let vm = this
        vm.callPoke(vm.pokeName.toString())
    },
        watch: {
        pokeList: {
        handler() {
        console.log('App mounted22!');
        localStorage.setItem('poke', JSON.stringify(this.pokeList));
        }
        }
        },
        mounted() {
        console.log('App mounted!');
        if (localStorage.getItem('poke')) this.pokeList = JSON.parse(localStorage.getItem('poke'));
        }
});
