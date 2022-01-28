import axios from 'axios';
import { FIGHTERS } from '@/api/api-routes';

export const fetchCharacters = async ({ commit }) => {
  try {
    const { data } = await axios.get(FIGHTERS)
    commit('SET_CHARACTERS', data)
    commit('SET_POINTS', data)
  } catch (error) {
    console.error(error);
  }
}