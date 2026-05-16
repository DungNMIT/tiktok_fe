import classNames from 'classnames/bind';
import styles from './BoardContent.module.scss';
import { BOARD_SECTIONS } from '../constants';

const cx = classNames.bind(styles);

function BoardContent({ activeSection }) {
    const section = BOARD_SECTIONS.find((item) => item.id === activeSection);

    return (
        <section className={cx('wrapper')}>
            <h2 className={cx('heading')}>{section?.label ?? 'Board'}</h2>
            <p className={cx('description')}>{section?.description ?? ''}</p>
        </section>
    );
}

export default BoardContent;
