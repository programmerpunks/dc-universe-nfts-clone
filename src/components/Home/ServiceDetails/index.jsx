import data from './data'

const ServiceDetails = () => {
  return (
    <>
    <div className='px-[10%] flex justify-center'>
      <div className="mb:max-lg:grid mb:max-lg:grid-cols-2 lg:flex gap-10 sm-max-md:gap-20 2xl:gap-20">
        {data.map((item, index) => {
          return (
            <>
              <div className='space-y-3 sm:w-[200px]'>
                <img src={item.img} alt="" />
                <h2 className="text-xl font-bold uppercase lg:text-2xl">{item.heading}</h2>
                <p className="text-sm leading-2 text-white/60 lg:text-lg">
                  {item.details}
                </p>
              </div>
            </>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default ServiceDetails
