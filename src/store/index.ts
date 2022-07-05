import create from 'zustand'

interface AppState {
    username: string | null,
    route: string,
    data: any | null,
    login: Function
};

export const useStore = create<AppState>(set => ({
    username: null,
    data: null,
    route: 'login',
    setUserName: (name: string) => {
        set((state) => ({ username: name }))
    },
    login: (name: string, password: string) => {
        console.log('login')
        console.log('name: ' + name + ', password: ' + password)
        //setTimeout(()=>{
            if (name == 'admin' && password == 'admin') {
                set((state) => ({username: 'Administrator', route: 'app'}))
            }
            if (name == 'edit' && password == 'edit') {
                set((state) => ({username: 'Editor', route: 'edit'}))
            }
        //}, 1000)
    }
    //increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    //removeAllBears: () => set({ bears: 0 })
}))


