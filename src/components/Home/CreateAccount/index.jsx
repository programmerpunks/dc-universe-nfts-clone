import gothamCall from '../../../images/gotham-call.png'
const CreateAccount = () => {
  return (
    <div className='space-y-9'>
      <div>
        <img src={gothamCall} alt='Gotham' />
      </div>
      <div className='text-center space-y-9'>
        <h1 className='text-4xl font-extrabold uppercase'>When Gotham calls, will you answer?</h1>
        <p className='text-base leading-7'>The Bat Cowl collection unlocks holder-only adventures in Gotham. Become part of the Gotham City District Knightwatch. Solve puzzles. Outsmart villains. Unravel the mystery.</p>
        <button className='bg-blue-600'>
          <p className='py-4 font-semibold px-6'>Create an Account</p>
        </button>
      </div>
    </div>
  )
}

export default CreateAccount
