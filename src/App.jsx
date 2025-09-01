import { useState, useEffect } from "react";

const filmList = [
	{ title: "Inception", genre: "Fantascienza" },
	{ title: "Il Padrino", genre: "Thriller" },
	{ title: "Titanic", genre: "Romantico" },
	{ title: "Batman", genre: "Azione" },
	{ title: "Interstellar", genre: "Fantascienza" },
	{ title: "Pulp Fiction", genre: "Thriller" },
];

function App() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ul className="list-group">
							{filmList.map((film, index) => {
								return (
									<li
										className="list-group-item d-flex justify-content-between align-items-center"
										key={index}
									>
										<h6>{film.title}</h6>
										<p className="mb-0">{film.genre}</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
