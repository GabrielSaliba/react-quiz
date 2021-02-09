import styled from "styled-components";

function Logo({link, logo}) {
	return (
		<span>
			<a href={link} target='_blank'>
				<LogoImage
					src={logo}
					alt={logo}/>
			</a>
		</span>

	)
}

const LogoImage = styled.img`
	max-width: 120px;
	max-height: 50px;
	margin-top: 20px;
	margin-left: 30px;
	
	@media screen and (max-width: 500px) {
		max-width: 35%	;
		margin-right: 100%;
		margin-left: 30%;
	}
`;

export const CustomLogo = styled(Logo)`
`;

export default CustomLogo
