import { createAction } from "redux-actions";
import { CREATE_ITEM, REMOVE_ITEM} from './Types'

export const createItem = createAction(CREATE_ITEM)
export const removeItem = createAction(REMOVE_ITEM)
