const ButtonStitchesDemo = () => {
  return (
    <button className='group relative rounded-lg border-2 border-sky-500 bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:shadow-lg'>
      <span className='absolute start-0 top-0 size-full rounded-md border border-dashed border-sky-50 shadow-inner shadow-white/30 group-active:shadow-white/10' />
      <span className='absolute start-0 top-0 size-full rotate-180 rounded-md border-sky-50 shadow-inner shadow-black/30 group-active:shadow-black/10' />
      Stitches Button
    </button>
  )
}

export default ButtonStitchesDemo
