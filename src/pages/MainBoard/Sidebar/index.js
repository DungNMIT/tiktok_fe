import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { BOARD_SECTIONS } from '../constants';

const cx = classNames.bind(styles);

function Sidebar({ activeSection, onSectionChange }) {
    return (
        <aside className={cx('wrapper')}>
            <nav className={cx('nav')}>
                {BOARD_SECTIONS.map((section) => (
                    <button
                        key={section.id}
                        type="button"
                        className={cx('nav-item', { active: activeSection === section.id })}
                        onClick={() => onSectionChange(section.id)}
                    >
                        {section.label}
                    </button>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
