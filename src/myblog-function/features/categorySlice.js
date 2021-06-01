import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';

const initialState={
    categories: [{id:0, title:'전체'},
        {id:1, title:'카테고리1'},
        {id:2, title:'카테고리2'},
        {id:3, title:"카테고리3"}],
    selectedCat: 0,
    maxCategoryNumber: 3
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        update_cat: (state, action)=>{
            state.categories = action.payload.catData;
            state.maxCategoryNumber=action.payload.maxCatId;
        },
        set_selected_category: (state, action)=>{
            state.selectedCat = Number(action.payload);
        }
    }
});

//returning current state value
export const getCategories=(state)=>state.rootReducer.category.categories;
export const selectedCat=(state)=>state.rootReducer.category.selectedCat;
export const maxCategoryNumber=(state)=> state.rootReducer.category.maxCategoryNumber;

export const selectCategory = (num) => createSelector(
    getCategories,
    categories=>categories.filter(item=>item.id!==num)
)

export const getCategoryTitle = (id) => createSelector(
    getCategories,
    categories=>categories.find(item=>item.id===id).title
)

export const {
    update_cat,
    set_selected_category,
    increase_maxCategoryNumber } = categorySlice.actions;

export default categorySlice.reducer;