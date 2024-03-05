import { create } from 'zustand'



const useHotel = create(set => ({
  search: '',
  setSearch: value => set({ search: value }),
  selectedRating: 0,
  setRating: rating => set({ selectedRating: rating }),
  selectedCategories: [],
  toggleCategory: category =>
    set(state => {
      if (state.selectedCategories.includes(category)) {
        return {
          selectedCategories: state.selectedCategories.filter(
            c => c !== category
          )
        }
      } else {
        return { selectedCategories: [...state.selectedCategories, category] }
      }
    }),
  selectedFacilities: [],
  toggleFacility: facility =>
    set(state => {
      if (state.selectedFacilities.includes(facility)) {
        return {
          selectedFacilities: state.selectedFacilities.filter(
            f => f !== facility
          )
        }
      } else {
        return { selectedFacilities: [...state.selectedFacilities, facility] }
      }
    })
}))

export default useHotel