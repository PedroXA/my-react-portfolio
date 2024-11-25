export const Icons = {
    inicio: (props) => {
        return (
            <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M14 5.91L9.5 1.41L2.41 8.5H4V16.5H7V10.5H12V16.5H15V8.5H16.59L15 6.91V3.5H14V5.91ZM0 9.5L9.5 0L13 3.5V2.5H16V6.5L19 9.5H16V17.5H11V11.5H8V17.5H3V9.5H0Z" fill="#00CBA2" />
            </svg>

        )
    },
    projetos: (props) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#00cba2" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8h-7q-1.65 0-2.825 1.175T11 12q0 .775.263 1.45t.737 1.2v3.7q-.325.35-.537.762t-.338.888zm11 3q-.825 0-1.412-.587T13 21q0-.575.275-1.025T14 19.25v-5.525q-.45-.275-.725-.712T13 12q0-.825.588-1.412T15 10t1.413.588T17 12q0 .575-.275 1.013t-.725.712V16.6l4-1.325v-1.55q-.45-.275-.725-.712T19 12q0-.825.588-1.412T21 10t1.413.588T23 12q0 .575-.275 1.013t-.725.712V16.7l-6 2v.55q.45.275.725.725T17 21q0 .825-.587 1.413T15 23"/></svg>

        )
    },
    galeria: (props) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#00CBA2" {...props}>
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" /></svg>
        )
    },
    github: (props) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="#00CBA2" {...props}>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
        )
    },
    linkedin: (props) => {
        return (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M42.6667 0C44.0812 0 45.4377 0.561903 46.4379 1.5621C47.4381 2.56229 48 3.91885 48 5.33333V42.6667C48 44.0812 47.4381 45.4377 46.4379 46.4379C45.4377 47.4381 44.0812 48 42.6667 48H5.33333C3.91885 48 2.56229 47.4381 1.5621 46.4379C0.561903 45.4377 0 44.0812 0 42.6667V5.33333C0 3.91885 0.561903 2.56229 1.5621 1.5621C2.56229 0.561903 3.91885 0 5.33333 0H42.6667ZM41.3333 41.3333V27.2C41.3333 24.8944 40.4174 22.6832 38.7871 21.0529C37.1568 19.4226 34.9456 18.5067 32.64 18.5067C30.3733 18.5067 27.7333 19.8933 26.4533 21.9733V19.0133H19.0133V41.3333H26.4533V28.1867C26.4533 26.1333 28.1067 24.4533 30.16 24.4533C31.1501 24.4533 32.0997 24.8467 32.7999 25.5468C33.5 26.2469 33.8933 27.1965 33.8933 28.1867V41.3333H41.3333ZM10.3467 14.8267C11.5348 14.8267 12.6743 14.3547 13.5145 13.5145C14.3547 12.6743 14.8267 11.5348 14.8267 10.3467C14.8267 7.86667 12.8267 5.84 10.3467 5.84C9.15143 5.84 8.00514 6.31481 7.15997 7.15997C6.31481 8.00514 5.84 9.15143 5.84 10.3467C5.84 12.8267 7.86667 14.8267 10.3467 14.8267ZM14.0533 41.3333V19.0133H6.66667V41.3333H14.0533Z" fill="#00CBA2" />
            </svg>
        )
    },
    behance: (props) => {
        return (
            <svg viewBox="0 0 42 39" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0C14.7374 3.93668e-05 16.4376 0.502938 17.8954 1.44799C19.3533 2.39305 20.5064 3.73986 21.2157 5.32586C21.9249 6.91186 22.16 8.66924 21.8925 10.3859C21.6249 12.1025 20.8662 13.705 19.708 15C20.8662 16.295 21.6249 17.8975 21.8925 19.6141C22.16 21.3308 21.9249 23.0881 21.2157 24.6741C20.5064 26.2601 19.3533 27.607 17.8954 28.552C16.4376 29.4971 14.7374 30 13 30H5C3.67392 30 2.40215 29.4732 1.46447 28.5355C0.526784 27.5979 0 26.3261 0 25V5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0H13ZM32 8C37.886 8 42 13.314 42 19C42 19.7458 41.7222 20.4648 41.2208 21.0168C40.7194 21.5689 40.0303 21.9144 39.288 21.986L39 22H38.008C38.61 22.0012 39.1977 22.1835 39.6948 22.5231C40.1918 22.8628 40.5751 23.3441 40.7949 23.9046C41.0148 24.465 41.0609 25.0786 40.9273 25.6656C40.7938 26.2526 40.4867 26.7859 40.046 27.196C38.254 28.862 35.674 30 32 30C26.114 30 22 24.686 22 19C22 13.314 26.114 8 32 8ZM13 18H6V24H13C13.7704 23.9996 14.5112 23.7028 15.0688 23.1712C15.6264 22.6395 15.958 21.9137 15.995 21.1442C16.0321 20.3746 15.7716 19.6203 15.2676 19.0376C14.7637 18.4549 14.0548 18.0883 13.288 18.014L13 18ZM37.992 22H28.8C29.594 23.29 30.856 24 32 24C34.326 24 35.396 23.326 35.954 22.804C36.5072 22.2891 37.2363 22.002 37.992 22ZM31.998 14C30.854 14 29.592 14.71 28.798 16H35.198C34.404 14.71 33.142 14 31.998 14ZM13 6H6V12H13C13.7956 12 14.5587 11.6839 15.1213 11.1213C15.6839 10.5587 16 9.79565 16 9C16 8.20435 15.6839 7.44129 15.1213 6.87868C14.5587 6.31607 13.7956 6 13 6ZM35 2C35.7957 2 36.5587 2.31607 37.1213 2.87868C37.6839 3.44129 38 4.20435 38 5C38 5.79565 37.6839 6.55871 37.1213 7.12132C36.5587 7.68393 35.7957 8 35 8H29C28.2044 8 27.4413 7.68393 26.8787 7.12132C26.3161 6.55871 26 5.79565 26 5C26 4.20435 26.3161 3.44129 26.8787 2.87868C27.4413 2.31607 28.2044 2 29 2H35Z" fill="#00CBA2" />
            </svg>

        )
    }
} 