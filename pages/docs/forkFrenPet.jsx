import styles from '@/styles/docs.module.css'
import { useTranslation } from 'react-i18next';

export default function Nexio() {
    const { t } = useTranslation()
    const tableLeft = [
        t('cyxsj'),
        t('tycwmint'),
        t('zcrfhwx'),
        t('dyhsfljl'),
        t('dyhbdjl'),
        t('dyhsjzlcb'),
        t('czzqdjl')
    ]

    const tableRight = [
        t('bcyxdsj'),
        t('bcwmtcb'),
        t('qxrfdhwxmt'),
        t('dysflqfjz'),
        t('dybdjl'),
        t('dysjcb'),
        t('wzqqdjl')
    ]
    return (
        <div className={styles.table}>
            <div className="a">
                <div className={styles.tableLeft}>
                    <div className={styles.leftTitle}>Nexio</div>
                    {tableLeft.map((e) => {
                        return (
                            <div key={e} className={styles.tableItem}>
                                {e}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="b">
                <div className={styles.tableRight}>
                    <div className={styles.rightTitle}>FrenPet</div>
                    {tableRight.map((e) => {
                        return (
                            <div key={e} className={styles.tableRightItem}>
                                {e}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
