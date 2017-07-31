const init = {
  isActive: false,
  sections: [
    '計畫緣起',
    '挑戰內容',
    '常見問題',
    '主辦單位',
    '聯絡我們'
  ]
}

export default (state = init, action) => {
  switch (action.type) {
    case 'TOGGLE_OVERLAY_MENU':
      return {...state, isActive: !state.isActive}
      case 'CLOSE_OVERLAY_MENU':
        return {...state, isActive: false}
    default:
      return state
  }
}
