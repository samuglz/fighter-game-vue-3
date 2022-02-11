import axios from 'axios';
import { FIGHTERS } from '@/api/api-routes';

export const fetchCharacters = async ({ commit }) => {
  try {
    const { data } = await axios.get(FIGHTERS)
    const { maxPoints, maxPointsByStat, minPointsByStat  } = data;

    let newData = [];
    const imgPlayers = {
      'Tank': require('@/assets/img/characters/tanque.png'),
      'Assasin': require('@/assets/img/characters/asesina')
    };
      data.characters.map(character => {
        console.log(character.name)
        console.log(imgPlayers[character.name])
        newData.push({
          createdAt: character.createdAt,
          id: character.id,
          img: imgPlayers[character.name],
          stats: [...character.stats]
        })
      })
  
    commit('SET_CHARACTERS', newData)
    commit('SET_POINTS', { maxPoints, maxPointsByStat, minPointsByStat })
  } catch (error) {
    console.error(error);
  }
}

