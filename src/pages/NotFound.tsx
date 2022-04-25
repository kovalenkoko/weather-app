import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {UserSagaActionCreators} from "../store/sagas/user/action-creators";

const NotFound: FC = () => {
    return (
        <div>
            not found
        </div>
    );
};

export default NotFound