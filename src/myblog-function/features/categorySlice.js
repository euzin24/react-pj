import {createSlice} from '@reduxjs/toolkit';

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
        create_cat: (state, action)=>{
            console.log(`create ${action.payload}`);
        },
        update_cat: (state, action)=>{
            console.log("update");
        },
        delete_cat: (state)=>{
            console.log("delete");
        },
        set_selected_category: (state, action)=>{
            state.selectedCat = action.payload;
        }
    }
});


//returning current state value
export const selectedCat = (state) => state.rootReducer.category.selectedCat;

export const { create_cat, update_cat, delete_cat, set_selected_category } = categorySlice.actions;

export default categorySlice.reducer;