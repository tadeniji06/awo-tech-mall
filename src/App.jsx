import AppRoutes from './routes/routes';
import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';
const App = () => {
	const projectId = 'sd5tdu9giq';
	useEffect(() => {
		Clarity.init(projectId);
	}, []);
	return <AppRoutes />;
};
export default App;
