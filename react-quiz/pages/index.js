import styled from 'styled-components'
import {Widget} from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GithubCorner";
import db from '../db.json'

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    
    @media screen and (max-width: 500px) {
        margin: auto;
        padding: 15px;
    }  
`;

export default function Home() {
	return (
		<QuizBackground backgroundImage={db.bg}>
			<QuizContainer>
				<Widget>
					<Widget.Header>
						<Widget.Title>League of Legends Quiz</Widget.Title>
					</Widget.Header>
					<Widget.Content>
						<p>lorem ipsum dolor ist est...</p>
					</Widget.Content>
				</Widget>

				<Widget>
					<Widget.Content>
						<h1>Quizes da Galera</h1>

						<p>Quizes da Galera</p>
					</Widget.Content>
				</Widget>
				<Footer/>
			</QuizContainer>
			<GitHubCorner projectUrl={"https://github.com/GabrielSaliba/react-quiz"}/>
		</QuizBackground>
	)
}
