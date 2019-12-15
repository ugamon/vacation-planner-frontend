import React, {Component} from 'react'
import SmileButton from '../smile-button'

import './slide-pannel.css'

export default class SlidePannel extends Component {
	render(){
		return (	
			<div>
				<input id="clicker" type="checkbox" />
				<label for="clicker">Click me! I'm an arbitrary trigger</label>
				<div class="panel-wrap">
		 			<div class="panel">
				    		<h3>Выбери свой тур</h3>
							<SmileButton/>
					</div>


				</div>
			</div>

		)
	}
} 