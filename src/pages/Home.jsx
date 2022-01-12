function Home() {
    return (
        <div>
            Home Page
            {process.env.REACT_APP_GITHUB_TOKEN}
        </div>
    )
}

export default Home
