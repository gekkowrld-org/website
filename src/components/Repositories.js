import React from "react";
import Metadata from "./Metadata";

let githubOrg = "wicodeZU";
let githubOrgUrl = `https://api.github.com/orgs/${githubOrg}`;
let githubOrgReposUrl = `${githubOrgUrl}/repos`;

function Repositories() {

	const [repos, setRepos] = React.useState([]);

	React.useEffect(() => {
		fetch(githubOrgReposUrl)
			.then(response => response.json())
			.then(data => {
				setRepos(data);
			});
	}, []);

	return (
		<>
			<Metadata title="WiCode Repositories" description="WiCode Repositories" />
			<div className="flex flex-col items-center justify-center py-2">
				<header className="flex flex-col items-center justify-center text-center">
					<h1 className="text-4xl font-bold">WiCode Repositories</h1>
					<div className="mt-3 text-lg flex flex-wrap gap-3 items-center justify-center">
						{repos.map(repo => (
							<div
								key={repo.id}
								className="flex flex-col items-center justify-center text-center"
							>
								<a href={repo.html_url} className="flex flex-col items-center justify-center text-center">
									<img
										src={repo.owner.avatar_url}
										className="h-40 w-40 rounded-md"
										alt="WiCode Logo"
									/>
									<h1 className="text-4xl font-bold">{repo.name}</h1>
									<p className="mt-3 text-lg">{repo.description}</p>
									<p>{repo.stargazers_count} Stars &#9899; {repo.forks_count} Forks &#9899; {repo.watchers_count} Watchers</p>
								</a>
							</div>
						))}
					</div>
				</header>
			</div>
		</>
	);
}

export default Repositories;
