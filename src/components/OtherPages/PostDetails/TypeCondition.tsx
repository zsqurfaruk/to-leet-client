import React from 'react';
import ConditionTypeEng from './ConditionType/ConditionTypeEng';
import ConditionTypeBan from './ConditionType/ConditionTypeBan';

const TypeCondition = () => {
    const lang = localStorage.getItem("lan");
    return (
        <div>
            {
                lang ? <ConditionTypeEng></ConditionTypeEng> : <ConditionTypeBan></ConditionTypeBan>
            }
        </div>
    );
};

export default TypeCondition;