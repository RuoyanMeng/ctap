import { v4 as uuidv4 } from 'uuid';

export const initialLinearInputState = [{ id: uuidv4(), stepID: '', stepIDCheck:false, funcsSettings: [{ fid: uuidv4(), funcName: '', funcP: '', funcNameCheck:false}] }];
export const initialBranchInputState = [{ id: uuidv4(), subf_srcid: '', subfID: '', stepID: '', subf_srcidCheck:false, subfIDCheck:false, stepIDCheck:false, lindearSetting:[{ id: uuidv4(), stepID: '', stepIDCheck:false, funcsSettings: [{ fid: uuidv4(), funcName: '', funcP: '', funcNameCheck:false}] }] }];
export const Reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_STEPSETS': {
            return action.data
        }
        default:
            return state;


    }

};

 