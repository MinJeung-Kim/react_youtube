import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

// 검색 이벤트가 발생하면 onSearch 콜백 함수 호출
const SearchHeader = memo(({onSearch}) => {
        const inputRef = useRef();
        const handleSearch = () => {
            // input태그의 현재 값 가져오기
            const value = inputRef.current.value;
            onSearch(value);
        }
        const onClick = () => {
            handleSearch();
        };
    
        const onKeyPress = (event) => {
            if(event.key === 'Enter'){
                handleSearch();
            } 
        };
            return (
                <header className={styles.header}>
                    <div className={styles.logoBox}>
                        <span className={styles.menuImg}><i className="fas fa-bars"></i></span>
                        <div className={styles.logo}>
                            <img className={styles.img} src="/images/logo.png" alt="logo" />
                            <h3 className={styles.title}>Youtube</h3>
                        </div> 
                    </div>

                    <div className={styles.searchBox}>
                        <div className={styles.search}>
                            <input ref={inputRef} className={styles.input} type="search" placeholder="검색" onKeyPress={onKeyPress}/>
                            <span className={styles.keyboardImg}><i className="fas fa-keyboard"></i></span>
                        </div>
                        <button className={styles.button} type="submit" onClick={onClick}>
                            <span className={styles.buttonImg}><i className="fas fa-search"></i></span>
                        </button>
                        <span className={styles.microphoneImg}><i className="fas fa-microphone"></i></span>
                    </div>
                   
                    <div className={styles.icons}>
                        <span className={styles.cameraImg}><i className="fas fa-video"></i></span>
                        <span className={styles.topMenuImg}><i className="fas fa-th"></i></span>
                        <span className={styles.bellImg}><i className="fas fa-bell"></i></span>
                        <span className={styles.propilImg}><i className="fas fa-user-circle"></i></span>
                    </div>
                </header>
            );
        }
    
);
export default SearchHeader;