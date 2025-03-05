import "../styles/Works.css"

export const Works = () => {
	return (
		<div>
			<h2>CHECK OUT SOME OF MY WORKS.</h2>
			<div className="project">
				<li><a href="https://todomike.netlify.app/" target="todo" rel="">ToDO List</a></li>
			</div>
			<div className="project">
				<li><a href="https://pass-checker.netlify.app/" target="pass-check" rel="">Password Checker</a></li>
			</div>
		</div>
	);
};