import { useState } from "react"
const ClipboardCopy = ({text}:{text:string}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async() => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.log("Failed to copy!", err);
        }
    }


  return (
      <div style={{ display: "flex", alignItems: "center", gap: "8px"}}>
          <span>{text}</span>
          <button onClick={handleCopy} style={{cursor: "pointer"}}>{ copied ? "✅ Copied" : "📋 Copy"}</button>
      </div>
  )
}

export default ClipboardCopy