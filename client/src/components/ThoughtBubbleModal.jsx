import React from 'react'

const modalBackdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.5)',
  zIndex: 2000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const modalContentStyle = {
  background: 'rgba(255,255,255,0.15)',
  backdropFilter: 'blur(16px)',
  borderRadius: '24px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  padding: '2.5rem 2rem 2rem 2rem',
  color: 'white',
  minWidth: 'min(90vw, 700px)',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
}

const closeButtonStyle = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  background: 'rgba(255,255,255,0.2)',
  border: 'none',
  borderRadius: '50%',
  width: '2.5rem',
  height: '2.5rem',
  color: '#8948c9',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  cursor: 'pointer',
  transition: 'background 0.2s',
}

function ThoughtBubbleModal({ open, onClose, children }) {
  if (!open) return null
  return (
    <div style={modalBackdropStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose} aria-label="Close">×</button>
        {children}
      </div>
    </div>
  )
}

export default ThoughtBubbleModal 