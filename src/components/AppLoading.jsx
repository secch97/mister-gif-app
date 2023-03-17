import React from 'react'
/* Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AppLoading = () => {
  return (
    <div className="loading">
        <FontAwesomeIcon icon={["fas", "fa-spinner"]} size='6x' spin/>
        <h2>Loading</h2>
    </div>
  )
}
