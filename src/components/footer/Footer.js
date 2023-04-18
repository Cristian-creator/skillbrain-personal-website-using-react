import './Footer.css';
import FooterItem from './FooterItem';

const Footer = () => {
    const footerItems = [
        {
            title: 'Phone number',
            content: '(405)608-0551'
        },
        {
            title: 'Email',
            content: 'brittany-chiang@gmail.com',
        },
        {
            title: 'Address',
            content: '5412 Timberwolf Ct.'
        }
    ];

    return (
        <footer className='footer-container'>
            {footerItems.map((footerItem) => (
                <FooterItem key={footerItem.title} data={footerItem} />
            ))}
        </footer>
    )
};

export default Footer;