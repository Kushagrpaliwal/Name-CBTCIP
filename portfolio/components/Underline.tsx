

const Underline = () => {
  return (
    <div className="flex items-center justify-center ">

    <div className="w-[40rem] h-20 relative justify-center mt-1">

      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-lightpurple to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-lightpurple to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    </div>
  </div>
  )
}

export default Underline