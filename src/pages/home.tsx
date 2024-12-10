import { useTranslation } from "react-i18next";

export const HomePage = () => {

    const { t } = useTranslation();

    return (
        <div className='h-screen'>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                FAKE STORE
            </h1>
            <p className='mt-10 text-2xl'>
                {t("Fake store p 1")}
                <br />
                <br />
                {t("Fake store p 2")}<br />
                <ul className='ml-10 gap-10 flex flex-col mb-10 mt-10'>
                    <li>
                        1. {t("Fake store ul 1")}
                    </li>
                    <li>
                        2. {t("Fake store ul 2")}
                    </li>
                    <li>
                        3. {t("Fake store ul 3")}
                    </li>
                    <li>
                        4. {t("Fake store ul 4")}
                    </li>
                </ul>
                {t("Fake store p 3")}
            </p>
        </div>
    )
}
