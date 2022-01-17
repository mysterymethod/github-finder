import Spinner from './assets/spinner.gif'

function spinner() {
  return (
    <div className="w-20 mt-20 mx-auto">
      <img className="text-center mx-auto" src={Spinner} alt="Loading..." />
    </div>
  )
}

export default spinner
