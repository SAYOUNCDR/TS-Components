import ClipboardCopy from "./components/ClipboardCopy"

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold text-center p-20">APP File</h1>
      <ClipboardCopy text="Sample text for copy!"/>
    </div>
  )
}

export default App