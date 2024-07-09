'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../i18nConfig';


export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();



    const handleChange = e => {
        const newLocale = e.target.value;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    

        const pathWithoutLocale = currentPathname.replace(`/${currentLocale}`, '');
        
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            if (newLocale === i18nConfig.defaultLocale) {
                router.push(pathWithoutLocale);
            } else {
                router.push('/' + newLocale + pathWithoutLocale);
            }
        } else {
            if (newLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
                router.push(pathWithoutLocale);
            } else {
                router.push('/' + newLocale + pathWithoutLocale);
            }
        }

        router.refresh()

    };

    return (
        <select onChange={handleChange} value={currentLocale}>

            <option value='ar'>العربية</option>
            <option value='en'>English</option>
        </select>
    );
}
