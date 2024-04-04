import React from 'react'

function NotFound() {
  return (
    <div className='notFound'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  )
}

export default NotFound