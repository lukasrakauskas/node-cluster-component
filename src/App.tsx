import { FC } from 'react'

import { ClusterMetrics } from './components/ClusterMetrics'

const App: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-4/5">
        <ClusterMetrics />
      </div>
    </div>
  )
}

export default App
