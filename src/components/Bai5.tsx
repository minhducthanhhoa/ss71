import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState,AppDispatch } from '../store/store';
import { toggleMenu } from '../store/reducers/Bai5/menuSlice';
import { FaUser, FaTachometerAlt, FaDollarSign, FaChartLine, FaFileAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Bai5() {
    const menuState = useSelector((state: RootState) => state.menuSlice);
    const dispatch: AppDispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleMenu());
    };
  return (
    <div>Bai5
        <div style={{
      width: menuState === 'expanded' ? '200px' : '50px',
      background: '#001f3f',
      color: '#ffffff',
      height: '100vh',
      transition: 'width 0.3s',
      padding: '10px'
    }}>
      <div onClick={handleToggle} style={{ cursor: 'pointer', marginBottom: '20px' }}>
        {menuState === 'expanded' ? 'Thu gọn' : 'Mở rộng'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: menuState === 'expanded' ? 'flex-start' : 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaTachometerAlt />
          {menuState === 'expanded' && <span style={{ marginLeft: '10px' }}>Bảng điều khiển</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaUser />
          {menuState === 'expanded' && <span style={{ marginLeft: '10px' }}>Tài khoản</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaDollarSign />
          {menuState === 'expanded' && <span style={{ marginLeft: '10px' }}>Tài sản</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaChartLine />
          {menuState === 'expanded' && <span style={{ marginLeft: '10px' }}>Thống kê</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaFileAlt />
          {menuState === 'expanded' && <span style={{ marginLeft: '10px' }}>Tài liệu</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', cursor: 'pointer' }} onClick={handleToggle}>
          {menuState === 'expanded' ? <FaArrowLeft /> : <FaArrowRight />}
          {menuState === 'expanded' && <span style={{ marginLeft: '10px' }}>Thu gọn</span>}
        </div>
      </div>
    </div>
    </div>
  )
}
