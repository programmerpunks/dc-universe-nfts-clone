import gothamCall from '../../../images/Footer/gotham-call.png'

const CreateAccount = () => {
  return (
    <div className='space-y-9 xl:flex xl:flex-row-reverse xl:items-center xl:gap-10 xl:px-10'>
      <div className='flex justify-center xl:w-4/5'>
        <img src={gothamCall} alt='Gotham' />
      </div>
      <div className='text-center space-y-9 xl:text-left'>
        <h1 className='text-5xl font-extrabold uppercase lg:text-6xl'>When Gotham calls, will you answer?</h1>
        <p className='text-base leading-7 text-white/60 lg:text-lg'>The Bat Cowl collection unlocks holder-only adventures in Gotham. Become part of the Gotham City District Knightwatch. Solve puzzles. Outsmart villains. Unravel the mystery.</p>
        <button className='bg-blue-600'>
          <p className='py-4 font-semibold px-6'>Create an Account</p>
        </button>
      </div>
    </div>
  )
}

export default CreateAccount
