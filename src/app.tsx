import output from './app.css?inline'
import Item from './components/item'

interface P {
  name: string
}

export function App(e: P) {
  console.log(e)

  return (
    <>
      <style>{output}</style>
      <div class="hi">ㅎㅇㅇ? {e.name}</div>
      <Item />
    </>
  )
}
