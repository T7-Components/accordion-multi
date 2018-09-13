// Dependencies.
import React from 'react'
import ReactDOM from 'react-dom'

// UI components.
import AccordionMulti from './'
import { AccordionPanel } from '@t7/accordion'

// CSS.
import './demo.css'
import './index.css'

// Define class.
class Demo extends React.Component {
  render () {
    const selected = {
      0: true,
      1: true,
      2: true
    }
    // Expose UI.
    return (
      <AccordionMulti selected={selected} handleClick={() => {}}>
        <AccordionPanel label='Item 1'>
          <p>
            Content for "Item 1 a"
          </p>
        </AccordionPanel>
        <AccordionPanel label='Item 2'>
          <p>
            Content for "Item 2"
          </p>
        </AccordionPanel>
        <AccordionPanel label='Item 3'>
          <p>
            Content for "Item 3"
          </p>
        </AccordionPanel>
      </AccordionMulti>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
