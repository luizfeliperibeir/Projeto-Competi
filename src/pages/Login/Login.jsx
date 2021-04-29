import React from 'react';
import loginImg from './login.svg';

/* 
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigation = useNavigation();
	react-toastfy

	const handleLogin = async () => {
		if(userName !== '' && password !== '') {
			await dispatch(setUserPassword(password));
			navigation.push('/dashboard/pokedex')
		} else {
			toast.error('Usuario ou senha invalidas')
		}
		
	}
*/

export class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Login</div>
				<div className="content">
					<div className="image">
						<img src={loginImg} />
					</div>
					<div className="form">
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
								type="text"
								name="username"
								placeholder="username"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="footer">
					<button type="button" className="btn" onClick={handleLogin}>
						Login
					</button>
				</div>
			</div>
		);
	}
}
