import {createSlice} from '@reduxjs/toolkit'; 
import {createSelector} from 'reselect';

const initialState={
    content: [{id:1, cat:1, title:'제목1', content:'내용1'},
        {id:2, cat:2, title:'제목2', content:'내용2'},
        {id:3, cat:2, title:'제목3', content:'내용3'},
        {id:4, cat:1, title:'제목4', content:'내용4'},
        {id:5, cat:1, title:'제목5', content:'내용5'},
        {id:6, cat:1, title:'제목6', content:'내용6'},
        {id:7, cat:1, title:'제목7', content:'내용7'}],
    selectedCon: 0,
    maxContentNumber: 7
};

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        create_con: (state, action)=>{
            console.log(`create content ${action.payload}`);
            console.log(state.content);
        },
        update_con: (state, action)=>{
            console.log("update content");
        },
        delete_con: (state)=>{
            console.log("delete content");
        },
        check_empty: (state, action)=>{
            console.log("action payload"+action.payload);
            return action.payload;
        }
    }
});

//returning current state value
export const selectedCon = (state) => state.rootReducer.content.selectedCon;
export const getContent = (state) => state.rootReducer.content.content;

export const getContentByCategoryId = (id) => createSelector(
    getContent,
    (content)=>content.filter(item=>id?item.cat===id:item)
)

export const { create_con, update_con, delete_con, check_empty } = contentSlice.actions;

export default contentSlice.reducer;