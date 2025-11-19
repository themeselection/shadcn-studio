import ProductInsightsCard from '@/components/shadcn-studio/blocks/widget-product-insights'

const WidgetCardPreview = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-16'>
      <div className='flex justify-center'>
        <ProductInsightsCard className='w-full max-w-85.5' />
      </div>
    </div>
  )
}

export default WidgetCardPreview
