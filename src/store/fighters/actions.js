import axios from 'axios';
import { FIGHTERS } from '@/api/api-routes';

export const fetchCharacters = async ({ commit }) => {
  try {
    const { data } = await axios.get(FIGHTERS)
    const { maxPonts, maxPointsByStat, minPointsByStat  } = data;

    let newData = [];
    const imgPlayers = {
      'Tank': '../../assets/img/characters/tanque.png',
      'Assasin': '../../assets/img/characters/asesina.png'
    };

      data.characters.map(character => {
        console.log(character.name)
        console.log(imgPlayers[character.name])
        newData.push({
          maxPonts: maxPonts,
          maxPointsByStat: maxPointsByStat,
          minPointsByStat: minPointsByStat,
          createdAt: character.createdAt,
          id: character.id,
          img: imgPlayers[character.name],
          stats: [...character.stats]
        })
      })
      console.log({ newData })

    commit('SET_CHARACTERS', newData)
    commit('SET_POINTS', newData)
  } catch (error) {
    console.error(error);
  }
}