import React from "react";
import Metadata from "./Metadata";
import { glogo, xlogo } from "../img/img";

let githubOrg = "wicodeZU";
let githubOrgUrl = `https://api.github.com/orgs/${githubOrg}`;
const publicMembersUrl = `${githubOrgUrl}/public_members`;
function Team() {
	const [team, setTeam] = React.useState([]);
	const [teamMembers, setTeamMembers] = React.useState([]);
	const [memberDetails, setMemberDetails] = React.useState([]);

	React.useEffect(() => {
		fetch(githubOrgUrl)
			.then(response => response.json())
			.then(data => {
				setTeam(data);
			});
	}, []);

	React.useEffect(() => {
		fetch(publicMembersUrl)
			.then(response => response.json())
			.then(data => {
				setTeamMembers(data);
			});
	}, [team]);

	React.useEffect(() => {
		const fetchMemberDetails = async () => {
			const promises = teamMembers.map(member =>
				fetch(`https://api.github.com/users/${member.login}`).then(
					response => response.json()
				)
			);
			const results = await Promise.all(promises);
			setMemberDetails(results);
		};

		fetchMemberDetails();
	}, [teamMembers]);

	return (
		<>
			<Metadata title="WiCode Team" description="WiCode Team" />
			<div className="flex flex-col items-center justify-center py-2">
				<header className="flex flex-col items-center justify-center text-center">
					<img
						src={team.avatar_url}
						className="h-40 w-40 rounded-md"
						alt="WiCode Logo"
					/>
					<h1 className="text-4xl font-bold"><a href={team.html_url}>{team.name}</a> </h1>
					<p className="mt-3 text-lg">{team.description}</p>
					<p>{team.followers} Followers &#9899; Created at {new Date(team.created_at).toLocaleString()}</p>
				</header>
			</div>
			<div className="flex flex-col items-center justify-center py-2">
				<header className="flex flex-col items-center justify-center text-center">
					<h1 className="text-4xl font-bold">Meet The Team</h1>
					<div className="mt-3 text-lg flex flex-wrap gap-3 items-center justify-center">
						{memberDetails.map(member => (
							<div
								key={member.id}
								className="flex flex-col items-center justify-center text-center"
							>
								<img
									src={member.avatar_url}
									className="w-72 h-72 rounded-md"
									alt="WiCode Logo"
								/>
								<a
									href={member.html_url}
									className="text-4xl font-bold"
								>
									{member.name}
								</a>
								<p className="mt-3 text-lg text-center">
									{member.bio}
								</p>
								<div className="flex flex-row items-center gap-9 justify-center text-center">
									{member.twitter_username && (
										<a
											href={`https://x.com/${member.twitter_username}`}
											className="text-4xl font-bold"
										>
											<img
												height={24}
												width={24}
												src={xlogo} alt="Twitter" />
										</a>
									)}
									<a
										href={member.html_url}
										className="text-4xl font-bold"
									>
										<img
											height={24}
											width={24}
											src={glogo} alt="GitHub" />
									</a>
								</div>
							</div>
						))}
					</div>
				</header>
			</div>
		</>
	);
}

export default Team;
