import React, { useEffect } from 'react'

const fetchRiverContent = async (url: string) => {
  const response = await fetch(url)
  const html = await response.text()
  document.getElementById('shadow-river-content')!.shadowRoot!.innerHTML = html
}

const RiverContentRenderer = ({ url }: { url: string }) => {
  useEffect(() => {
    const shadowElement = document.getElementById('river-content-embed')!
    shadowElement.id = 'shadow-river-content'
    shadowElement.attachShadow({ mode: 'open' })
    shadowElement.style.maxWidth = '1232px'
    shadowElement.style.margin = '0 auto'
    fetchRiverContent(url)

    return () => {
      document.body.removeChild(shadowElement!)
    }
  }, [])

  return <div id="river-content-embed"></div>
}

export default RiverContentRenderer
