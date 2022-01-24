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

  // -----------------SET LOADING
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // -----------------FETCHING ALL USERS FROM GITHUB USERS
  const fetchUsers = async () => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    const data = await response.json()

    // SETTING UP USERS AND LOADING
    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
  }

  // ----------------SEARCHING FOR SINGLE USER FROM GITHUB API
  const searchUsers = async (text) => {
    setLoading()

    const params = new URLSearchParams({
      q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    const {items} = await response.json()
    console.log(items);

    // SETTING UP USERS AND LOADING
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
