import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, selectIsUserRegistered } from './registrationSlice';
import "./App.css"

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const isRegistered = useSelector((state) =>
        selectIsUserRegistered(state, { username })
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password || !confirmPassword) {
            alert('по братский заполни все ');
            return;
        }

        if (password !== confirmPassword) {
            alert('у тебя пороли не совпадают ');
            return;
        }

        if (isRegistered) {
            alert('уже занято сорян');
            return;
        }

        dispatch(registerUser({ username, password }));
        alert('молодец ты прошёл регистрацию');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <form className="registration-form" onSubmit={handleSubmit}>
            <h2>Регистрация</h2>
            <div>
                <label htmlFor="username">Имя пользователя:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Подтвердите пароль:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegistrationForm;