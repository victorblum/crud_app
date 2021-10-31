//НЕ ВАЖНО
// кнопка не активна - disabled !movie
// менять кнопку на добавлено
// короткое описание фильма
// выплывающее окно отлов ошибок
// выплывающее окно не найденных фильмов
// Action.js
// Приложение должно быть доступно для использования на мобильных устройствах.

const initialState = {
    orders: []
}

function reducer (state = initialState, action) {
    switch(action.type) {
        case 'ALL_ORDERS':
            return {...state,orders: [...action.payload.ordersList]};

        // case 'DELETE_MOVIES':
        //     const findId = [...state.favouriteMovies.filter((item)=> item.imdbID !== action.payload.imdbID)];
        //     return {...state,favouriteMovies: findId};
        default:
          return state;
      }
}

export default reducer;