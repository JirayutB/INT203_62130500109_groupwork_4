const app = {
    data() {
        return {
            title: 'Photo Gallery ',
            tasks: [{
             image: 'images/1.jpg',article: 'Blaziken, Fire/Fighting Pokemon',
                     done: false },
            {image: 'images/2.jpg',article: 'Pidgeot, Normal/Flying Pokemon' ,
                     done: false },
            {image: 'images/3.jpg',article: 'Xerneas, Legendary Fairy Pokemon' ,
                     done: false }
            ],
            searchOpen: false,
            inputSearch: '',
            searchFinding: false,
            showImages: false,
            currentIndex: 0
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        switchOpen() {
            this.searchOpen = !this.searchOpen
        },
        showImage(index) {
            this.showImages = true;
            this.currentIndex = index;
        },
        hideImage() {
            this.showImages = false;
        }
    },
    computed: {
        countImage(){
            return this.tasks.length
        },
        countUndone(){
            return this.tasks.filter( t => !t.done ).length
        },
        searchImage() {
            this.searchFinding = false;
            if (this.inputSearch == '') {
                return this.tasks;
            } else {
                let search = this.tasks.filter(task => this.inputSearch.toLowerCase().split(' ')
                .every(v => task.article.toLowerCase().includes(v)));
                if (search == '') {
                    this.searchFinding = true;
                } else {
                    return search;
                }
            }

        }
    }
}
Vue.createApp(app).mount('#app')
     