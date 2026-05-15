import './Footer.css';

const Footer = () => {
    const currentDate = new Date();
    const formatedDate = currentDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    
    return (
        <footer className='footer'>
            <p className='footer_info'>
                Creation Data: {formatedDate}
            </p>
            <p className='footer_info'>
                Author: Kapustina Ksenia Vladimirovna
            </p>
        </footer>
    );
};

export default Footer;