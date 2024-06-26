import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../store/store';
import { switchToEnglish,switchToVietnamese } from '../store/reducers/Bai6/languageSlice';

export default function Bai6() {
    const language = useSelector((state: RootState) => state.languageSlice);
    const dispatch: AppDispatch = useDispatch();

    const handleSwitchToEnglish = () => {
        dispatch(switchToEnglish());
    };

    const handleSwitchToVietnamese = () => {
        dispatch(switchToVietnamese());
    };

  return (
    <div>Bai6
        <select value={language} onChange={(e) => {
        if (e.target.value === 'en') {
          handleSwitchToEnglish();
        } else {
          handleSwitchToVietnamese();
        }
      }}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <h1>
        {language === 'en' ? 'Rikkei Academy' : 'Học viện Rikkei'}
      </h1>
    </div>
  )
}
