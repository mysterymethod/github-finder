import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducers'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = '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'

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  }

  // S E T  L O A D I N G
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = async () => {
    setLoading()  
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    const data = await response.json()

    // S E T T I N G    U P   U S E R S   A N D   L O A D I N G
    dispatch({
      type: 'GET_USERS',
      payload: data,
    })

    
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
