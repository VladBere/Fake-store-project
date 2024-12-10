import { useTranslation } from "react-i18next";

export const AboutUs = () => {

    const { t } = useTranslation();


    return (
        <div className='text- xl h-screen'>
            <h2 className='mt-5 text-5xl font-extrabold'>{t('About Us')}</h2>
            <p>{t('About Us p')}</p>
            <br />
            <h2 className='text-2xl font-extrabold'>{t('Our Story')}</h2>
            <p>{t('Our Story p')}</p>
            <br />
            <h2 className='text-2xl font-extrabold'>{t('What We Offer')}</h2>
            <p>{t('What We Offer p')}</p>
            <br />
            <h2 className='text-2xl font-extrabold'>{t('Why Choose Us?')}</h2>
            <ul className='ml-10 list-disc'>
                <li>{t('Why Choose Us? ul 1')}</li>
                <li>{t('Why Choose Us? ul 2')}</li>
                <li>{t('Why Choose Us? ul 3')}</li>
                <li>{t('Why Choose Us? ul 4')}</li>
            </ul>
            <br />
            <h2 className='text-2xl font-extrabold'>{t('Join Our Community')}</h2>
            <p>{t('Join Our Community p 1')}</p>
            <br />
            <p></p>
        </div>
    )
}