import walkImage from '../../../assets/walk.jpg';
import './Main_Section.css';

const Main_Section = () => {
    return (
        <div className='main-section'>
            <img src={walkImage}
            alt="walk"
            className='main-section_image'
            />
        </div>
    );
};

export default Main_Section;
