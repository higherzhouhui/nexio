import SvgPoint from './Image/svgPoint'
import styles from '@/styles/docs.module.css'
import { useTranslation } from 'react-i18next';

export default function Reward() {
    const { t } = useTranslation()
    return (
        <div className={styles.wrap3}>
            <div className={styles.wrap4Title}>{t('jfhq')}:</div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('wycwsjdjj')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('qdphbsdtj')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('qdhyhq')}
                </div>
            </div>

            <div className={`${styles.wrap4Title} mt-12`}>{t('jfdj')}:</div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>{t('jyjlgjjcph')}</div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>{t('jyssjph')}</div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>{t('syxfjph')}</div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('hdjfhssxh')}
                </div>
            </div>
        </div>
    )
}
