import { useStore } from 'vuex';
import { computed } from 'vue';

const useFighters = () =>{
    const store = useStore()

    return{
        characters: computed(() => store.getters['fighters/getCharacters']),
    }
}

export default useFighters;