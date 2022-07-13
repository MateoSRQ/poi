import create from 'zustand'
import Session from 'react-session-api'

interface AppState {
    username: string | null,
    route: string,
    user: string,
    data: any | null,
    login: Function,
    logout: Function,
    start: Function
};

Session.config(true, 0)

export const useStore = create<AppState>(set => ({
    username: null,
    data: null,
    route: 'login',
    user: '1',
    start: () => {
        console.log('start')
        let sessionData = Session.get('__appData')
        console.log('sessionData: ' + sessionData)
        if (sessionData) {
            console.log('start found: ' + sessionData)
            sessionData = JSON.parse(sessionData)
            //set(() => ({...sessionData}))
            console.log('un: ' + sessionData.username)
            set(()=> ({
                username: sessionData.username,
                route: sessionData.route,
                user: sessionData.user
            }))
            //login(sessionData.username, sessionData.route, sessionData.user)
        }

    },

    setUserName: (name: string) => {
        set((state) => ({ username: name }))
    },
    login:  (name: string, password: string) => {
        console.log('login')
        console.log('name: ' + name + ', password: ' + password)

        if (name == 'admin' && password == 'admin') {
            Session.set('__appData', JSON.stringify({username: 'Administrator', route: 'app', user: '1'}))
            set((state) => ({username: 'Administrator', route: 'app', user: '1'}))
        }
        if (name == 'edit' && password == 'edit') {
            Session.set('__appData', JSON.stringify({username: 'Editor', route: 'edit', user: '1'}))
            set((state) => ({username: 'Editor', route: 'edit', user: '1'}))
        }
        if (name == 'adminTI' && password == 'adminTI') {
            console.log('yyyyy')
            Session.set('__appData', JSON.stringify({username: 'Administrator', route: 'app', user: '2'}))
            let app = Session.get('__appData')
            console.log('appData : ' +  app)
            set((state) => ({username: 'Administrator', route: 'app', user: '2'}))
        }
        if (name == 'editTI' && password == 'editTI') {
            console.log('edit')
            Session.set('__appData', JSON.stringify({username: 'Editor', route: 'edit', user: '2'}))
            set((state) => ({username: 'Editor', route: 'edit', user: '2'}))
        }
        if (name == 'loadTI' && password == 'loadTI') {
            Session.set('__appData', JSON.stringify({username: 'Operador', route: 'upload', user: '2'}))
            set((state) => ({username: 'Operador', route: 'upload', user: '2'}))
        }
    },
    logout: () => {
        console.log('logout')
        set((state)=> ({username: null, route: 'login', user: '1' }))
    }
    //increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    //removeAllBears: () => set({ bears: 0 })
}))


