    import ReactDom from 'react-dom'

    const MODAL_STYLES = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      backgroundColor: 'rgb(1000,1000,1000)',
      transform: 'translate(-50%, -50%)',
      zIndex: 1000,
      height: '90vh',
      borderRadius:'4px',
      width: '62vw'
    }

    const OVERLAY_STYLES = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, .7)',
      zIndex: 1000
    }

    export default function Modal({ children }) {
      
      return ReactDom.createPortal(
        <>
          <div style={OVERLAY_STYLES}/>
          <div style={MODAL_STYLES}>
            <div style={{height:'100%'}}>
            {children}
            </div>
          </div>
        </>,
        document.getElementById('root')
      )
    }