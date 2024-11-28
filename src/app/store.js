import { configureStore } from '@reduxjs/toolkit'
import CardSlice1 from '../features/CardSlice1'

export default configureStore({
  reducer: {
    allcard:CardSlice1
  },
});