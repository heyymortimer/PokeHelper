Vue.component('pokemon',  {
    props: {
        item: {
            type: Object, 
            required: true 
        }, 
        deleteItem: {
            type: Function, 
            required: true
        }
    },
    template: `<li class="list-group-item">
    {{ vm.poke.name }}
    <button class="btn btn-sm btn-danger" v-on:click="deleteItem(item.id)">X</button>
    </li>`,
    data() {
        return {}
    }
});

Vue.component('pokelist', {
    template: `
    <div>
        <input type="text" placeholder="Add favourite pokemon" class="form-control" v-on:keyup.enter="addItem" :value="newItem">
        <ul class="list-group">
            <pokemon v-for="pokemon in favourites" :key="pokemon.id" :item="pokemon" @updateList="addItem" :deleteItem="deleteItem"></pokemon>
        </ul>
    </div>`,
    computed: {
        nrOfItems() {
            return this.favourites.length == 1 ? "pokemon" : "favourites";
        }
    },
    methods: {
        addItem: function(event) {
            let pokemon = {
                title: event.target.value,
                id: ++this.highestId
            };
            this.favourites.push(pokemon);
            this.newItem = "";
        },
        deleteItem: function(id) {
            this.favourites = this.favourites.filter(pokemon => pokemon.id != id);
        }
    },
    data() {
        return {
            highestId: 0,
            newItem: "",
            favourites: [{
                id: 0,
                title: "Pikachu"
            }]
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
        title: "Vue",
    }
});
