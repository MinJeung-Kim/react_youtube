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
                    <div className={styles.logo}>
                        <img className={styles.img} src="/images/logo.png" alt="logo" />
                        <h1 className={styles.title}>Youtube</h1>
                    </div> 
                    <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
                    <button className={styles.button} type="submit" onClick={onClick}>
                        <img className={styles.buttonImg} src="/images/search.png" alt="search" />
                    </button>
                </header>
            );
        }
    
);
export default SearchHeader;