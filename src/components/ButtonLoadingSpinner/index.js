import React, { useState } from 'react'
import useButtonLoader from '../../hooks/useButtonLoader'
import Header from '../Headers'
import './style.css'
/**
* @author
* @function ButtonLoading
**/

const ButtonLoading = (props) => {

	const [isLoading, setLoading] = useState(false);

	//Method 2
	const [subscribeButtonElement, setSubscribeLoading] = useButtonLoader(
		"Subscribe 2",
		"Subscribing 2..."
	);
	const [subscribe3ButtonElement, setSubscribe3Loading] = useButtonLoader(
		"Subscribe 3",
		"Subscribing 3..."
	);

	const subscribe = () => {
		setLoading(true);
	
		fetch("https://jsonplaceholder.typicode.com/todos/1")
		  .then((response) => response.json())
		  .then((json) => {
			console.log(json);
			setLoading(false);
		  });
	  };

	  const subscribe2 = () => {
		setSubscribeLoading(true);
	
		fetch("https://jsonplaceholder.typicode.com/todos/1")
		  .then((response) => response.json())
		  .then((json) => {
			console.log(json);
			setSubscribeLoading(false);
		  });
	  };
	
	  const subscribe3 = () => {
		setSubscribe3Loading(true);
	
		fetch("https://jsonplaceholder.typicode.com/todos/1")
		  .then((response) => response.json())
		  .then((json) => {
			console.log(json);
			setSubscribe3Loading(false);
		  });
	  };

  return(
    <>
		<Header title="Loading spinners (Hooks API)" />
		<div className="row w-100">
			<div className="col text-center">
				<h2>Button Loading spinners</h2>			
				<p>Click the subscribe button below to see the loading effect</p>

				<p>
					{!isLoading && (
					<button className="btn btn-danger mr-2" onClick={subscribe}>
						Subscribe
					</button>
					)}
					{isLoading && (
					<button className="btn btn-danger mr-2" disabled>
						<i className="fas fa-spinner fa-spin"></i> Subscribing...
					</button>
					)}
				</p>

				<p>
					<button
						className="btn btn-danger mr-2"
						onClick={subscribe2}
						ref={subscribeButtonElement}
					>
						Subscribe 2
					</button>
					<button
						className="btn btn-danger mr-2"
						onClick={subscribe3}
						ref={subscribe3ButtonElement}
					>
						Subscribe 3
					</button>
				</p>
			</div>
		</div>
		<hr />
		
    </>
   )

 }

export default ButtonLoading