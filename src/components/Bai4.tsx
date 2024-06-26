import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../store/store';
import { toggleMode } from '../store/reducers/Bai4/displayModeSlice';

export default function Bai4() {
    const mode = useSelector((state: RootState) => state.displayModeSlice);
    const dispatch: AppDispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleMode());
    };
  return (
    <div>Bai4
        <button onClick={handleToggle}>
            {mode === 'list' ? 'Grid mode' : 'List mode'}
        </button>
    </div>
  )
}
