export const SET_CHARACTERS = (state, characters ) => {
  state.characters = [...characters]
}

export const SET_POINTS = (state, { maxPoints, maxPointsByStat, minPointsByStat }) => {
  state.maxPoints = maxPoints
  state.maxPointsByStat = maxPointsByStat
  state.minPointsByStat = minPointsByStat
}