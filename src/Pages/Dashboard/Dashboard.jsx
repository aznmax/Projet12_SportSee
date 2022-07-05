import "./Dashboard.scss";
import ActivityChart from "../../components/Charts/BarChart/ActivityChart";
import SessionChartD3 from "../../components/Charts/LineChart/SessionChartD3";
import PerformancesChart from '../../components/Charts/RadarChart/PerformancesChart';
import ScoreChart from '../../components/Charts/CircleChart/ScoreChart';
import Nutriment from '../../components/Nutriment/Nutriment';
import { getUserDatas } from "../../ApiComponents/requests";
import {useState, useEffect} from 'react';
import Loader from "../../components/Loader/Loader";
import Error from "../Error/Error";
import User from "../../ModelsUser/User";
import {useParams} from "react-router-dom";


/** 
 * @component
 * @namespace Dashboard
 * 
 * @description This is component for Dashboard page, it handles 3 states (user => datas of the user, loader => if true, Loader component is rendered, 
 *   error => if true, Error component is rendered)
 * @returns If loader and error are false, the Dashboard is rendered, with first name, nutriments and some charts with fetched informations of the user
 * 
 */
function Dashboard() {
	// user datas, fetched in the useEffect in getUserDatas
	const [user, setUser] = useState({});
	// user Sessions datas, fetched in the useEffect in getUserDatas, to have an array with only the day datas, to display on the session chart
	const [userSessions, setUserSessions] = useState({});
	// isLoaded and error, to display a loader or an error if we have some problems when fetching the datas
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);
	// User Id, taking from the url params
	const {userId} = useParams();

	useEffect(() => {
		getUserDatas(userId)
			.then((result) => {
				// Create a new User from the User class, with the fetched datas on parameters
				let user = new User(result[0], result[1], result[2], result[3]);
				setUser(user);
				// Taking the datas we need for the sessionsChart, only an array of days
				let userSession = user.sessions.sessions;
				const userSessionsLength = [...userSession].map((day) => day.sessionLength);
				setUserSessions(userSessionsLength);
				
				setIsLoaded(true);
			})
			.catch(err => {
				setError(true);
				setIsLoaded(true);
			})
		}, [userId])

	if(error) {
		return (
		<Error type="fetchError"/>
		)
	}
	if(!isLoaded) {
		return (<Loader />)
	}

	return (
		<>
			<section className="dashboard">

				<h2>Bonjour <em>Thomas</em></h2>
				<p className="dashboard-text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
		
				<section className="dashboard__graphs">

					<div className="dashboard__graphs__charts">

						<ActivityChart data={user.activities} />

						<div className="dashboard__graphs__charts-smalls">
							<SessionChartD3 data={user} sessions={userSessions} />
							<PerformancesChart data={user.performances} />
							<ScoreChart data={user.infos}/>
						</div>

					</div>
				
				<div className="dashboard__graphs__nutriments">
					<Nutriment quantity={user.getNutriment("calorieCount")} nutriment="Calories" /> 
					<Nutriment quantity={user.getNutriment("proteinCount")} nutriment="Protéines" />
					<Nutriment quantity={user.getNutriment("carbohydrateCount")} nutriment="Glucides" />
					<Nutriment quantity={user.getNutriment("lipidCount")} nutriment="Lipides" />
				</div> 
				
				</section>

			</section>
		</>
	)
}

Dashboard.propTypes = {

}


export default Dashboard;