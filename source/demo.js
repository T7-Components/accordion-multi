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
      <React.Fragment>
        <h1>@t7/accordion-multi</h1>

        <p>
          <a href='https://github.com/t7-components/accordion-multi/blob/master/source/demo.js'>
            View "demo.js" on GitHub
          </a>
        </p>

        <hr />

        <h2>
          Using &#60;AccordionMulti&#62; as a wrapper and &#60;AccordionPanel&#62; as content
        </h2>

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
      </React.Fragment>
    )
  }
}

// Get root.
const root = document.getElementById('root')

// Render.
ReactDOM.render(<Demo />, root)
