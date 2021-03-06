import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
  const [text, setText] = useState('')

  const { users, searchUsers, clearScreen } = useContext(GithubContext)

  const handleChange = (event) => setText(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(text);
    if (text === '') {
      alert('Please enter a valid Username')
    } else {
      // searchUsers(text)
      searchUsers(text)
      setText('')
    }
  }


  return (
    <div className="grid mb-10 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={() => clearScreen()}>CLEAR</button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
