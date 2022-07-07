import create from 'zustand'

interface AppState {
    username: string | null,
    route: string,
    user: string,
    data: any | null,
    login: Function,
    logout: Function
};

export const useStore = create<AppState>(set => ({
    username: null,
    data: null,
    route: 'login',
    user: '1',
    setUserName: (name: string) => {
        set((state) => ({ username: name }))
    },
    login: (name: string, password: string) => {
        console.log('login')
        console.log('name: ' + name + ', password: ' + password)

        if (name == 'admin' && password == 'admin') {
            set((state) => ({username: 'Administrator', route: 'app', user: '1'}))
        }
        if (name == 'edit' && password == 'edit') {
            set((state) => ({username: 'Editor', route: 'edit', user: '1'}))
        }
        if (name == 'adminTI' && password == 'adminTI') {
            set((state) => ({username: 'Administrator', route: 'app', user: '2'}))
        }
        if (name == 'editTI' && password == 'editTI') {
            console.log('edit')
            set((state) => ({username: 'Editor', route: 'edit', user: '2'}))
        }
        if (name == 'loadTI' && password == 'loadTI') {
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


