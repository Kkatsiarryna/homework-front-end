const initState = {
    themeId: 1,
}

export type ThemeType = typeof initState

export const themeReducer = (state = initState, action: ActionType): ThemeType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => {
    return { type: 'SET_THEME_ID', id } as const
    }// fix any

type ActionType = ReturnType<typeof changeThemeId>
