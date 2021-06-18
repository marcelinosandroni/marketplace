import {Suspense} from 'react'
import {createResource} from './services/api'

const resource = createResource()

function App() {
  return (
    <div>
      <h1>Hi</h1>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Data resource={resource} />
      </Suspense>
    </div>
  )
}

function Data({resource}: any) {
  const data = resource.data.read()

  return <h1>{data}</h1>
}

function Loading() {
  return <h1>Terminado!</h1>
}

export default App
