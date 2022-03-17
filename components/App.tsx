import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react'
import { http } from '../lib/common'
import { systemSettings } from '../data'

type ILayout = {
    children: ReactNode
}

const AppContext = createContext<object>({})

export const AppProvider = ({ children }: ILayout) => {
    const [settings, setSettings] = useState(systemSettings)

    // const { result, error } = useFetch('/api/settings')

    useEffect(() => {
        http.get('/api/settings')
            .then((response) => {
                setSettings(response.data.data)
            })
            .catch((error) => console.log('Error fetching data', error))
    }, [])

    return (
        <AppContext.Provider value={settings}>{children}</AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}
