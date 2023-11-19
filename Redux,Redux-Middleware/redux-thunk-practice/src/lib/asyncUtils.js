export const  createPromiseThunk= (type, promiseCreator) =>{
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return param => async dispatch => {
        //const id = idSelector(param);
    
        dispatch({type,param});
        try {
            // 결과물의 이름을 payload 라는 이름으로 통일시킵니다.
            const payload = await promiseCreator(param);
            dispatch({ type: SUCCESS, payload }); // 성공
          } catch (e) {
            dispatch({type: ERROR, payload: e});

        }
    };
};

// 특정 id 를 처리하는 Thunk 생성함수
const defaultIdSelector = param => param;
export const createPromiseThunkById = (
  type,
  promiseCreator,
  // 파라미터에서 id 를 어떻게 선택 할 지 정의하는 함수입니다.
  // 기본 값으로는 파라미터를 그대로 id로 사용합니다.
  // 하지만 만약 파라미터가 { id: 1, details: true } 이런 형태라면
  // idSelector 를 param => param.id 이런식으로 설정 할 수 있곘죠.
  idSelector = defaultIdSelector
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return param => async dispatch => {
    const id = idSelector(param);
    dispatch({ type, meta: id });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload, meta: id });
    } catch (e) {
      dispatch({ type: ERROR, error: true, payload: e, meta: id });
    }
  };
};

export const reducerUtils = {
    initial:(initialData= null)=>({
        loading:false,
        data:initialData,
        error:null
    }),

    loading:(prevState=null)=>({
        loading: true,
        data: prevState,
        error: null
    }),
    success:(payload)=>({
        loading:false,
        data:payload,
        error:null
    }),
    error:(error)=>({
        loading:false,
        data:null,
        error:error
    })
};

export const handleAsyncActions = (type, key, keepData=false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
  
      switch (action.type) {
        case type:
          return {
            ...state,
            [key]: reducerUtils.loading(keepData?state[key].data:null)
          };
        case SUCCESS:
          return {
            ...state,
            [key]: reducerUtils.success(action.payload)
          };
        case ERROR:
          return {
            ...state,
            [key]: reducerUtils.error(action.payload)
            
          };
        default:
          return state;
      }
    };
  };

  export const handleAsyncActionsById = (type, key, keepData=false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
      const id=action.meta;
      switch (action.type) {
        case type:
          return {
            ...state,
            [key]: {
              ...state[key],
              [id]:reducerUtils.loading(action.payload)
            }
          };
        case SUCCESS:
          return {
            ...state,
            [key]: {
              ...state[key],
              [id]:reducerUtils.success(action.payload)
            }
          };
        case ERROR:
          return {
            ...state,
            [key]: {
              ...state[key],
              [id]:reducerUtils.error(action.payload)
            }
          };
        default:
          return state;
      }
    };
  };