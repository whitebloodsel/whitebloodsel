import useWindowStore from '#store/window'
import useIsMobile from '#store/device'
import { ChevronLeft } from 'lucide-react'
import React from 'react'

const WindowControlls = ({target, onBack}) => {
    const {closeWindow} = useWindowStore();
    const isMobile = useIsMobile();

    if (isMobile) {
      return (
        <button
          type="button"
          className="mobile-back"
          aria-label="Back"
          onClick={onBack ?? (() => closeWindow(target))}
        >
          <ChevronLeft strokeWidth={2.5} />
        </button>
      );
    }

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)}/>
      <div className="minimize"/>
    <div className="maximize"/>
    </div>
  )
}

export default WindowControlls
