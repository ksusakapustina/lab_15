import { Route, Routes } from 'react-router-dom';
import { CONTENT_TYPE } from '../../constants';
import Main_Section from './Main_Section/Main_Section';
import Main_Article from './Main_Article/Main_Article';
import Main_Aside from './Main_Aside/Main_Aside';
import NotFound from '../NotFound/NotFound';

import './Main.css';

const Main = () => {
    return (
        <main className='main'>
            <div className='main_content'>
            <Main_Section />
            <div className='main_divider'></div>
            <Routes>
                <Route path="/" element={<Main_Article type={CONTENT_TYPE.NEWS} />} />
                <Route path="/about" element={<Main_Article type={CONTENT_TYPE.ABOUT} />} />
                <Route path="/contacts" element={<Main_Article type={CONTENT_TYPE.CONTACTS} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <div className='main_divider'></div>
            <Main_Aside />
            </div>
        </main>
    );
};

export default Main;
