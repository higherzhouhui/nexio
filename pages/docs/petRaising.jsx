import SvgPoint from './Image/svgPoint'
import styles from '@/styles/docs.module.css'
import { useTranslation } from 'react-i18next';

export default function petRaising() {
    const { t } = useTranslation()
    return (
        <div className={styles.wrap3}>
            <div className={styles.wrap3Item}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>{t('sywjtycb')}</div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>{t("dywjzcgm")}</div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('gmswxfjl')}
                </div>
            </div>
            <div className={`${styles.wrap3Item} mt-4`}>
                <SvgPoint />
                <div className={styles.wrap3ItemsInner}>
                    {t('mrcgcylq')}
                </div>
            </div>
        </div>
    )
}
