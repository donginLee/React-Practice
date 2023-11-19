// 액션 타입 변수화
const SET_DIFF="counter/SET_DIFF";
const INCREASE="counter/INCREASE";
const DECREASE="counter/DECREASE";

//액션 생성 함수 내보내기
export const setDiff=diff=>({type:SET_DIFF,diff});
export const increase=()=>({type:INCREASE});
export const decrease=()=>({type:DECREASE});

//초기 상태 선언
const initialState={
    number:0,
    diff:1
};

export default function counter(state=initialState,action){
    switch(action.type){
        case INCREASE:
            return{...state,number:state.number+state.diff};
        case DECREASE:
            return{...state,number:state.number-state.diff};
        case SET_DIFF:
            return{...state,diff:action.diff};
        default:
            return state;
    }
}