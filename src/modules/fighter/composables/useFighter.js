import { useStore } from 'vuex';
import { computed } from 'vue';

const useFighters = () =>{
    const store = useStore()
    const characters = computed(() => store.getters['fighters/getCharacters'])
    const getimgCharacters = () =>{
        let imgs = []
        characters.value.map(img =>{
            imgs.push(img.img)
        })
        return imgs
    }
    return{
        characters,
        getimgCharacters

    }
}

export default useFighters;