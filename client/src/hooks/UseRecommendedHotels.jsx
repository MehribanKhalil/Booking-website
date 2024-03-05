const useHotel = create(set => ({
    // rating:,
    hotels:[],
    setHotels: value => set({ hotels: value }),
    selectedRating: 0,
    setHotels: rating => set({ selectedRating: rating }),
    selectedCategories: [],
    
  }))
  
  export default useHotel