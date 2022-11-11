import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Travel Agency`;
    }, [title])
};

export default useTitle;