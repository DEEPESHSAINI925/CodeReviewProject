import { useEffect, useState } from 'react'
import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import Editor from 'react-simple-code-editor' 
import prism from "prismjs"
import axios from "axios"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
function App() {
 const [code, setcode] = useState(`function sum()=>{return 1+1}`)
 const [reviwer, setreviwer] = useState("")
useEffect(() => {
  prism.highlightAll()
},[])

async function reviewer() {
  try {
    const response = await axios.post("http://localhost:3001/ai/getPrompt", {prompt: code})
    if(response.status === 201){

      setreviwer(  response.data.data)
    }
  } catch (error) {
    console.error(error);
    alert("error: " + error);
  }
}
  return (
    
    <div className="main">
      <div className="left">
        <div className="code">
          <Editor
          value={code}
          onValueChange={code=>setcode(code)}
          highlight={code=>prism.highlight(code,prism.languages.javascript,"javascript")}
          padding={10}
          style={{
            fontFamily:'"Fira code","Fira Mono",monospace ',
            fontSize:12,
            border:"1px solid #ddd",
            borderRadius:"5px",
            height:"100%",
            width:"100%"
          }}
          />
        </div>
        <div onClick={()=>reviewer()} className='button'>Submit</div>
      </div>
      <div className="right">
        {reviwer && (
          <div>
            {typeof reviwer === 'string' 
              ? reviwer 
              : JSON.stringify(reviwer, null, 2)}
          </div>
        )}
      </div>
    </div>
      
  )
}

export default App
