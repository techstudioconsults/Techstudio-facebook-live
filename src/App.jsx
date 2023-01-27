import { Suspense } from 'react'
import { Loading } from './constants'

function App() {
  return (
    <Suspense fallback={<Loading text='LOADING...' />}>
      <div>okay</div>
    </Suspense>
  )
}

export default App
