import {createSlice} from '@reduxjs/toolkit'; 
import {createSelector} from 'reselect';

const initialState={
    content: [
        {id:1, cat:1, title:'제목1', content:'내용1'},
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
            state.maxContentNumber += 1
            state.content = state.content.concat(
                {id:state.maxContentNumber,
                cat:action.payload.cat,
                title:action.payload.title,
                content:action.payload.content});
            state.selectedCon = state.maxContentNumber
        },
        update_con: (state, action)=>{
            console.log("update content");
            state.content.forEach((value=>{
                if(value.id===state.selectedCon){
                    value.cat = action.payload.cat;
                    value.title = action.payload.title;
                    value.content = action.payload.content;
                }
            }))
        },
        delete_con: (state)=>{
            state.content = state.content.filter(item=>item.id!==state.selectedCon)
            state.selectedCon = 0;
        },
        set_selected_content: (state, action)=>{
            state.selectedCon = Number(action.payload);
        }
    }
});

//returning current state value
export const selectedCon = (state) => state.rootReducer.content.selectedCon;
export const getContent = (state) => state.rootReducer.content.content;
export const maxContentNumber = (state)=>state.rootReducer.content.maxContentNumber;

export const getContentByCategoryId = (id) => createSelector(
    getContent,
    (content)=>content.filter(item=>id? item.cat===id : item)
)

export const getContentInfoByContentId = (_id) => createSelector(
    getContent,
    (content)=>
        _id?
        content.find(item=>item.id===_id)
        :
        {title:null, content:null}
)

// export const checkEmpty = (_id) => createSelector(
//     getContent,
//     (content)=>content.filter(item=>item.cat===_id).length
// )

export const { create_con,
    update_con,
    delete_con,
    set_selected_content } = contentSlice.actions;

export default contentSlice.reducer;