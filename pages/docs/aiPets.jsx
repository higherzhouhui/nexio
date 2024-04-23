import SvgPoint from './Image/svgPoint'
import styles from '@/styles/docs.module.css'
import { useTranslation } from 'react-i18next';

export default function AiPets() {
    const { t } = useTranslation()
    return (
        <div className={styles.contentWrap}>
            <div className={styles.inner}>
                <SvgPoint />
                <div className={styles.smallWrap}>
                    {t('jyopenai')}
                    <div className="mt-4">
                        {t('zycwsxxldgl')}
                    </div>
                    <div className="mt-4">
                        {t('jmchaowodesc')}
                    </div>
                </div>
            </div>
        </div>
    )
}
