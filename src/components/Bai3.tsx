import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../store/store';
import { toggleTheme } from '../store/reducers/Bai3/themeSlice';
export default function Bai3() {
    const theme = useSelector((state: RootState) => state.themeSlice);
    const dispatch: AppDispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTheme());
    };
  return (
    <div>Bai3
            <div style={{
                background: theme === 'light' ? '#ffffff' : '#333333',
                color: theme === 'light' ? '#000000' : '#ffffff',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                }}>
            <h1>{theme === 'light' ? 'Light' : 'Dark'}</h1>
            <button onClick={handleToggle}>
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
        </div>
    </div>
  )
}
