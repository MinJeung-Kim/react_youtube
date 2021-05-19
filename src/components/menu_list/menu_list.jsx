import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menu_list.module.css';

const MenuList = (props) => (
        <ul className={styles.menu}>
            <li><a className={styles.homeImg} href="#"><i className="fas fa-home"></i></a> 홈</li>
            <li><a className={styles.compassImg} href="#"><i className="fas fa-compass"></i></a>탐색</li>
            <li><a className={styles.newspaperImg} href="#"><i className="fas fa-newspaper"></i></a>구독</li>
            <li><a className={styles.archiveImg} href="#"><i className="fas fa-archive"></i></a>보관함</li>
            <div className={styles.line}>
                <li><a className={styles.historyImg} href="#"><i className="fas fa-history"></i></a>시청 기록</li>
                <li><a className={styles.clockImg} href="#"><i className="fas fa-clock"></i></a>나중에 볼 동영상</li>
                <li><a className={styles.thumbsImg} href="#"><i className="fas fa-thumbs-up"></i></a>좋아요 표시한 동영상</li>
                <li><a className={styles.chevronImg} href="#"><i className="fas fa-chevron-down"></i></a>더보기</li>
                {/* <i class="fas fa-angle-up"></i> */}
            </div>
            <div className={styles.line}>
                <a className={styles.gitImg} href="https://github.com/MinJeung-Kim/react_youtube"><li><i className="fab fa-github"></i>MinJeung-Kim</li></a>
            </div> 
        </ul> 
    );

export default MenuList;