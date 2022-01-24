import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

function Home() {
    return (
        <>
            {/* S E A R C H   C O M P O N E N T */}
            <UserSearch />
            <UserResults />
        </>
    )
}

export default Home
